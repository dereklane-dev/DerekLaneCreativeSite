import { projects } from "./projects.js";
import { ProjectCard } from "./components.js";

const container = document.querySelector("#projects");
const filterButtons = document.querySelectorAll("#filters button");
const currentProjectId = document.body.dataset.projectId || null;

if (container) {

    const baseCategory = container.dataset.baseCategory;
    console.log("Base category:", baseCategory);

    // Page-level filtering
    const scopedProjects = (baseCategory
  ? projects.filter(project =>
      project.categories.includes(baseCategory)
    )
  : projects
  ).filter(project =>
    !currentProjectId || project.id !== currentProjectId
  );

  function renderProjects(list) {
    container.innerHTML = list.map(ProjectCard).join("");
  }

  // Initial render
  renderProjects(scopedProjects.slice(0,4));

  // In-page filters
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      // Active state
      filterButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      if (filter === "all") {
        renderProjects(scopedProjects);
      } else {
        renderProjects(
          scopedProjects.filter(project =>
            project.skills?.includes(filter)
          )
        );
      }
    });
  });
}
