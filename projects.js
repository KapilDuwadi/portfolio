// Parse markdown-style links in descriptions
function parseMarkdownLinks(text) {
  return text.replace(
    /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g,
    '<a class="text-accent hover:underline underline-offset-2" href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
}

// Build a single project card
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'card group rounded-xl overflow-hidden bg-surface-1 border border-border';

  card.innerHTML = `
    <div class="h-44 sm:h-52 overflow-hidden relative">
      <div class="img-overlay z-10"></div>
      <img
        alt="${project.title}"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src="${project.image}"
        loading="lazy"
      />
    </div>
    <div class="p-5 sm:p-6">
      <div class="flex justify-between items-start gap-3 mb-3">
        <h3 class="text-base font-semibold text-gray-100 group-hover:text-accent transition-colors leading-snug">${project.title}</h3>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer"
           class="shrink-0 text-muted hover:text-accent transition-colors"
           aria-label="Open ${project.title}">
          <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </div>
      <p class="text-subtle text-[.82rem] leading-relaxed mb-4">
        ${parseMarkdownLinks(project.description)}
      </p>
      <div class="flex flex-wrap gap-1.5">
        ${project.skills.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>
  `;

  return card;
}

// Load and render
function loadProjects() {
  fetch('projects.json')
    .then(r => r.json())
    .then(data => {
      const container = document.getElementById('project-list');
      data.forEach(p => container.appendChild(createProjectCard(p)));
    })
    .catch(err => console.error('Error loading projects:', err));
}

document.addEventListener('DOMContentLoaded', loadProjects);
