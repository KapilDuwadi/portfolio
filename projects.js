// Function to create project card

function parseMarkdownLinks(text) {
  const markdownLinkRegex = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g;
  return text.replace(markdownLinkRegex, '<a class="hero-link" href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';

  card.innerHTML = `
    <a class="image-container" href="${project.link}" target="_blank">
      <img src="${project.image}" alt="website" class="project-image" width="100%">
      <div class="image-rect"></div>
    </a>
    <div class="project-info">
      <h3>${project.title}</h3>
      ${parseMarkdownLinks(project.description)}
      <div class="skills">
        ${project.skills.map(skill => `<p class="mono-font skill-tag">${skill}</p>`).join('')}
      </div>
    </div>
  `;

  return card;
}

// Load JSON and render
function loadProjects() {
  fetch('projects.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('project-list');
      const showMoreBtn = document.getElementById('show-more-btn');

      const maxVisible = 3;
      let isExpanded = false;

      function renderProjects() {
        container.innerHTML = '';
        const toShow = isExpanded ? data.length : maxVisible;

        data.slice(0, toShow).forEach(project => {
          const card = createProjectCard(project);
          container.appendChild(card);
        });

        // Update button text and visibility
        if (data.length <= maxVisible) {
          showMoreBtn.style.display = 'none';
        } else {
          showMoreBtn.style.display = 'block';
          showMoreBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
        }
      }

      showMoreBtn.addEventListener('click', () => {
        isExpanded = !isExpanded;
        renderProjects();
      });

      renderProjects();
    })
    .catch(error => console.error('Error loading project data:', error));
}

document.addEventListener('DOMContentLoaded', loadProjects);
