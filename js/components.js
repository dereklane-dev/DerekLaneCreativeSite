export function ProjectCard(project) {
  return `
    <article class="project-card">
      <a href="${project.link}"><img src="${project.thumbnail}" alt="${project.title}" class="preview-image">
      <h2>${project.title}</h2></a>
      <p>${project.description}</p>
      <span><em>${project.year}</em></span>
    </article>
  `;
}