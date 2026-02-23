async function loadComponent(id, file) {
  const response = await fetch(file);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}

loadComponent("header-placeholder", "/components/header.html");
loadComponent("footer-placeholder", "/components/footer.html");

async function loadSharedHead() {
  const resp = await fetch("/components/head-shared.html");
  const html = await resp.text();
  document.head.insertAdjacentHTML("beforeend", html);
}

loadSharedHead();

// Portfolio filtering

const buttons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project-card');

if (buttons.length && projects.length) {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      projects.forEach(project => {
        const tags = project.dataset.tags.split(',');

        project.hidden = filter !== 'all' && !tags.includes(filter);
      });
    });
  });
}

const toggleButton = document.getElementById("filter-toggle");
const filters = document.getElementById("filters");

toggleButton.addEventListener("click", () => {
  filters.toggleAttribute("hidden");
  toggleButton.setAttribute("aria-expanded", String(!isOpen));
  });