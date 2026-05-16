const PROJECT_META = {
  "Home Energy Rebate Tool":               { tag: "Federal Platform", year: "2024", grad: 1 },
  "Home Energy Score, DOE":               { tag: "Federal Platform", year: "2023", grad: 2 },
  "GPST Open Tools Submission Portal":    { tag: "Open Source",      year: "2023", grad: 3 },
  "Fast Tracking Roof Top Solar Application Processing": { tag: "Research Tool", year: "2022", grad: 4 },
  "North American Energy Resilience Model (NAERM)":      { tag: "Federal Platform", year: "2021", grad: 5 },
};

function createProjectCard(project, index, total) {
  const meta = PROJECT_META[project.title] || { tag: "Project", year: "2023", grad: 1 };

  const wrap = document.createElement("div");
  wrap.className = "card-wrap reveal";
  wrap.style.setProperty("--rd", `${(index % 2) * 120}ms`);

  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("data-index", index);

  card.innerHTML = `
    <div class="card-media">
      <img
        src="${project.image}"
        alt="${project.title}"
        loading="lazy"
      />
      <div class="card-media-overlay"></div>
      <span class="card-tag">${meta.tag}</span>
      <span class="card-year">${meta.year}</span>
    </div>
    <div class="card-meta">
      <span>${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}</span>
      <span>${meta.tag}</span>
    </div>
    <h3 class="card-title">${project.title}</h3>
    <p class="card-desc">${project.description.replace(/\[([^\]]+)]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}</p>
    <div class="card-stack">
      ${project.skills.map(s => `<span>${s}</span>`).join("")}
    </div>
    <div class="card-links">
      <a href="${project.link}" target="_blank" rel="noopener noreferrer">
        Visit project
        <svg class="arrow" width="11" height="11" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2">
          <path d="M7 17 17 7M9 7h8v8"/>
        </svg>
      </a>
    </div>
  `;

  // 3D tilt on hover
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.setProperty("--card-tilt-y", `${(px - 0.5) * 5}deg`);
    card.style.setProperty("--card-tilt-x", `${(0.5 - py) * 3.5}deg`);
  });
  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--card-tilt-y", "0deg");
    card.style.setProperty("--card-tilt-x", "0deg");
  });

  wrap.appendChild(card);
  return wrap;
}

function loadProjects() {
  fetch("projects.json")
    .then(r => r.json())
    .then(data => {
      const container = document.getElementById("project-list");
      if (!container) return;
      data.forEach((p, i) => {
        const el = createProjectCard(p, i, data.length);
        container.appendChild(el);
      });

      // Trigger IntersectionObserver for newly added cards
      document.querySelectorAll(".card-wrap.reveal:not(.in)").forEach(el => {
        revealObserver.observe(el);
      });
    })
    .catch(err => console.error("Error loading projects:", err));
}

// Expose observer so loadProjects can register new elements
let revealObserver;

document.addEventListener("DOMContentLoaded", () => {
  revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );

  // Observe existing reveal elements
  document.querySelectorAll(".reveal, .reveal-clip").forEach(el => revealObserver.observe(el));

  loadProjects();
});
