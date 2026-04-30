(function(){
  const el = document.getElementById('msoa3dMap');
  if (!el || typeof mapboxgl === 'undefined') return;

  mapboxgl.accessToken = '';
  const palette = {
    'Stable Habitat Core':'#A9C99A',
    'Potential Corridor':'#8FC7CE',
    'Attention Zone':'#E8CF78',
    'Urban Pressure Area':'#D39A78'
  };
  const classify = (score)=>{ score=Number(score||0); if(score>=70) return 'Stable Habitat Core'; if(score>=55) return 'Potential Corridor'; if(score>=40) return 'Attention Zone'; return 'Urban Pressure Area'; };
  const cls = (f)=> f.properties.BHP_Class || classify(f.properties.BHP_Score);
  const val = (p,...names)=>{ for(const n of names){ if(p[n]!==undefined && p[n]!==null && p[n]!== '') return Number(p[n])||0; } return 0; };

  const map = new mapboxgl.Map({
    container: 'msoa3dMap',
    style: {
      version: 8,
      sources: {
        carto: {
          type: 'raster',
          tiles: ['https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png','https://b.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png','https://c.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution: '© OpenStreetMap © CARTO'
        }
      },
      layers: [{ id:'carto', type:'raster', source:'carto', paint:{'raster-opacity':0.92,'raster-saturation':-0.18,'raster-contrast':0.03} }]
    },
    center: [-0.1276, 51.5072],
    zoom: 9.6,
    pitch: 58,
    bearing: -24,
    antialias: true
  });
  window.msoa3dRealMap = map;
  map.addControl(new mapboxgl.NavigationControl({visualizePitch:true}), 'top-right');

  let bhpData=null, buildingData=null, selectedId=null;

  function bbox(coords){
    let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
    function scan(c){
      if(typeof c[0]==='number'){ minX=Math.min(minX,c[0]); maxX=Math.max(maxX,c[0]); minY=Math.min(minY,c[1]); maxY=Math.max(maxY,c[1]); }
      else c.forEach(scan);
    }
    scan(coords); return [minX,minY,maxX,maxY];
  }
  function centroid(feature){
    const b=bbox(feature.geometry.coordinates); return [(b[0]+b[2])/2,(b[1]+b[3])/2];
  }
  function ringOf(feature){
    if(feature.geometry.type==='Polygon') return feature.geometry.coordinates[0];
    if(feature.geometry.type==='MultiPolygon') return feature.geometry.coordinates[0][0];
    return [];
  }
  function pip(pt, ring){
    const x=pt[0], y=pt[1]; let inside=false;
    for(let i=0,j=ring.length-1;i<ring.length;j=i++){
      const xi=ring[i][0], yi=ring[i][1], xj=ring[j][0], yj=ring[j][1];
      const intersect=((yi>y)!==(yj>y)) && (x < (xj-xi)*(y-yi)/(yj-yi+1e-12)+xi);
      if(intersect) inside=!inside;
    }
    return inside;
  }
  function squareFromPoint(lon,lat,sizeDeg,height,kind){
    const s=sizeDeg;
    return {type:'Feature',properties:{height,kind},geometry:{type:'Polygon',coordinates:[[[lon-s,lat-s],[lon+s,lat-s],[lon+s,lat+s],[lon-s,lat+s],[lon-s,lat-s]]]}};
  }
  function generateBuildings(feature){
    const p=feature.properties;
    const c=cls(feature);
    const H=Math.max(.05, Math.min(1, val(p,'Hi_final','H_i','Hi')));
    const C=Math.max(.05, Math.min(1, val(p,'Ci_n','C_i','Ci')));
    const D=Math.max(.05, Math.min(1, val(p,'Di_n','D_i','Di')));
    const Lp=Math.max(.05, Math.min(1, val(p,'Li_n','Ei_n','Si_n','L_i','Li')));
    const pressure=Math.max(.16, Math.min(1, D*.58+Lp*.42));
    const support=Math.max(.16, Math.min(1, H*.7+C*.3));
    const b=bbox(feature.geometry.coordinates), ring=ringOf(feature);
    const pts = (buildingData?.features||[]).filter(f=>{
      const co=f.geometry.coordinates;
      return co[0]>=b[0] && co[0]<=b[2] && co[1]>=b[1] && co[1]<=b[3] && pip(co, ring);
    });
    const step = Math.max(1, Math.ceil(pts.length/420));
    const sampled = pts.filter((_,i)=>i%step===0).slice(0,420);
    const baseHeight = c==='Urban Pressure Area'? 34 : c==='Attention Zone'? 24 : c==='Potential Corridor'? 18 : 13;
    const amp = 30 + pressure*90;
    const features = sampled.map((f,i)=>{
      const [lon,lat]=f.geometry.coordinates;
      const h = baseHeight + ((i*37)%100)/100*amp;
      const kind = (i%7===0 && support>.35)?'green':(i%11===0 && C>.35)?'blue':'built';
      const size = 0.00016 + ((i%5)*0.000025);
      return squareFromPoint(lon,lat,size,h,kind);
    });
    if(features.length<24){
      const cen=centroid(feature);
      for(let i=0;i<80;i++){
        const lon=cen[0]+(Math.random()-.5)*0.026, lat=cen[1]+(Math.random()-.5)*0.018;
        if(pip([lon,lat],ring)) features.push(squareFromPoint(lon,lat,0.00018,baseHeight+Math.random()*amp,i%6===0?'green':'built'));
      }
    }
    return {fc:{type:'FeatureCollection',features}, pressure, support, c};
  }

  function updatePanel(feature, generated){
    const p=feature.properties, c=generated.c;
    const stats=document.getElementById('msoa3dStats');
    if(stats){
      stats.innerHTML=`<div><span>Selected MSOA</span><strong>${p.msoa21nm||'Selected area'}</strong></div><div><span>BHP class</span><strong>${c}</strong></div><div><span>3D building points</span><strong>${generated.fc.features.length}</strong></div>`;
    }
    const label=document.getElementById('msoa3dClass'); if(label) label.textContent=c;
    const interp=document.getElementById('msoa3dInterpretation');
    if(interp){
      interp.textContent=`${p.msoa21nm||'This MSOA'} is shown as a local 3D building field. Extrusion height represents estimated urban pressure (${Math.round(generated.pressure*100)}%), while green/blue blocks mark habitat-supportive and corridor-like signals (${Math.round(generated.support*100)}%). Click another MSOA to rebuild the 3D scene.`;
    }
  }

  function selectFeature(feature, fly=true){
    const id=feature.__id;
    selectedId=id;
    const generated=generateBuildings(feature);
    const source=map.getSource('local-buildings');
    if(source) source.setData(generated.fc);
    const selected={type:'FeatureCollection',features:[feature]};
    const selectedSource=map.getSource('selected-msoa');
    if(selectedSource) selectedSource.setData(selected);
    updatePanel(feature, generated);
    const cen=centroid(feature);
    if(fly) map.flyTo({center:cen, zoom:14.2, pitch:62, bearing:-28, duration:1300});
  }

  Promise.all([
    fetch('data/London_BHP_Results_2025.geojson').then(r=>r.json()),
    fetch('data/building_centroid_10.geojson').then(r=>r.json())
  ]).then(([bhp, buildings])=>{
    bhpData=bhp; buildingData=buildings;
    bhpData.features.forEach((f,i)=>{f.__id=i; f.properties.__id=i;});
    map.on('load',()=>{
      map.addSource('msoa', {type:'geojson', data:bhpData});
      map.addLayer({id:'msoa-fill',type:'fill',source:'msoa',paint:{'fill-color':['match',['get','BHP_Class'],'Stable Habitat Core',palette['Stable Habitat Core'],'Potential Corridor',palette['Potential Corridor'],'Attention Zone',palette['Attention Zone'],'Urban Pressure Area',palette['Urban Pressure Area'],'#dde4d8'],'fill-opacity':0.42}});
      map.addLayer({id:'msoa-line',type:'line',source:'msoa',paint:{'line-color':'rgba(35,48,39,.42)','line-width':0.55}});
      map.addSource('selected-msoa',{type:'geojson',data:{type:'FeatureCollection',features:[]}});
      map.addLayer({id:'selected-fill',type:'fill',source:'selected-msoa',paint:{'fill-color':'#dfe873','fill-opacity':0.18}});
      map.addLayer({id:'selected-line',type:'line',source:'selected-msoa',paint:{'line-color':'#243128','line-width':2.2}});
      map.addSource('local-buildings',{type:'geojson',data:{type:'FeatureCollection',features:[]}});
      map.addLayer({
        id:'local-buildings-3d',type:'fill-extrusion',source:'local-buildings',
        paint:{
          'fill-extrusion-color':['match',['get','kind'],'green','#8EBE7B','blue','#7FB4BD','#C78564'],
          'fill-extrusion-height':['get','height'],
          'fill-extrusion-base':0,
          'fill-extrusion-opacity':0.86
        }
      });
      map.on('mousemove','msoa-fill',()=>{map.getCanvas().style.cursor='pointer';});
      map.on('mouseleave','msoa-fill',()=>{map.getCanvas().style.cursor='';});
      map.on('click','msoa-fill',(e)=>{
        const id=e.features?.[0]?.properties?.__id;
        const f=bhpData.features[Number(id)];
        if(f) selectFeature(f);
      });
      const top=[...bhpData.features].sort((a,b)=>Number(b.properties.bird_count||0)-Number(a.properties.bird_count||0))[0] || bhpData.features[0];
      selectFeature(top,false);
      const b=bbox(bhpData.features.map? {geometry:{coordinates:bhpData.features.map(f=>f.geometry.coordinates)}}.geometry.coordinates : top.geometry.coordinates);
      map.fitBounds([[b[0],b[1]],[b[2],b[3]]],{padding:60,duration:0,pitch:58,bearing:-24});
    });
  }).catch(err=>{
    console.error('3D building map failed', err);
    if(el) el.innerHTML='<div style="padding:24px;font-weight:800">3D building data could not be loaded.</div>';
  });

  const sec=document.getElementById('msoa-3d');
  if(sec) new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) setTimeout(()=>map.resize(),260); }),{threshold:.18}).observe(sec);
})();
