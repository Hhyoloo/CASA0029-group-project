document.addEventListener("DOMContentLoaded", () => {
  const mapLinks = [...document.querySelectorAll(".mindmap-links a")];
  const cards = [...document.querySelectorAll(".grade-card[data-target]")];
  const evidenceCards = [...document.querySelectorAll(".evidence-item")];
  const evidenceScore = document.getElementById("evidenceScore");
  const evidenceText = document.getElementById("evidenceText");

  cards.forEach(card => {
    card.classList.add("interactive");
    card.addEventListener("click", () => document.getElementById(card.dataset.target)?.scrollIntoView({ behavior: "smooth" }));
  });

  const refreshEvidenceScore = () => {
    if (!evidenceCards.length || !evidenceScore || !evidenceText) return;
    const done = evidenceCards.filter(c => c.classList.contains("done")).length;
    const pct = Math.round((done / evidenceCards.length) * 100);
    evidenceScore.textContent = `${pct}%`;
    evidenceText.textContent = done === evidenceCards.length
      ? "All evidence validated. Narrative, methods, and interaction are now consistently aligned."
      : `Progress ${done}/${evidenceCards.length}: continue validating each rubric claim with map/chart evidence.`;
  };

  evidenceCards.forEach(card => {
    card.querySelector("button")?.addEventListener("click", () => {
      card.classList.toggle("done");
      refreshEvidenceScore();
    });
    card.addEventListener("dblclick", () => document.getElementById(card.dataset.link || "")?.scrollIntoView({ behavior: "smooth" }));
  });

  document.getElementById("jumpChallenge")?.addEventListener("click", () => {
    document.getElementById("explorer")?.scrollIntoView({ behavior: "smooth" });
    const target = document.getElementById("attentionTitle");
    if (target) {
      target.style.transition = "box-shadow .4s ease";
      target.style.boxShadow = "0 0 0 8px rgba(255,154,92,0.35)";
      setTimeout(() => target.style.boxShadow = "none", 1400);
    }
  });

  refreshEvidenceScore();

  const sectionIds = ["home", "introduction", "movement", "habitat", "explorer", "score-lab", "grading", "future"];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const id = visible.target.id;
    mapLinks.forEach(link => link.classList.toggle("is-current", link.getAttribute("href")?.slice(1) === id));
  }, { threshold: 0.45 });
  sectionIds.forEach(id => document.getElementById(id) && observer.observe(document.getElementById(id)));
});
