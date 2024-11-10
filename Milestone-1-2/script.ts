// Check if the variables already exist to avoid redeclaration
if (!window['toggleSkillsButton'] && !window['skillsList']) {
    const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
    const skillsList = document.getElementById("skills-list") as HTMLElement;
  
    toggleSkillsButton.addEventListener("click", () => {
      // Toggle visibility of the skills list with anijmation
      skillsList.classList.toggle("hidden");
  
      if (!skillsList.classList.contains("hidden")) {
        skillsList.classList.add("fade-in");
        skillsList.classList.remove("fade-out");
        toggleSkillsButton.textContent = "Hide Skills";
      } else {
        skillsList.classList.add("fade-out");
        skillsList.classList.remove("fade-in");
        toggleSkillsButton.textContent = "View Skills";
      }
    });
  
    // Add variables to the global window object to prevent re-declaration
    window['toggleSkillsButton'] = toggleSkillsButton;
    window['skillsList'] = skillsList;
  }
  