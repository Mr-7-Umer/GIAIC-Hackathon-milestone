// Check if the variables already exist to avoid redeclaration
if (!window['toggleSkillsButton'] && !window['skillsList']) {
    var toggleSkillsButton_1 = document.getElementById("toggle-skills");
    var skillsList_1 = document.getElementById("skills-list");
    toggleSkillsButton_1.addEventListener("click", function () {
        // Toggle visibility of the skills list with anijmation
        skillsList_1.classList.toggle("hidden");
        if (!skillsList_1.classList.contains("hidden")) {
            skillsList_1.classList.add("fade-in");
            skillsList_1.classList.remove("fade-out");
            toggleSkillsButton_1.textContent = "Hide Skills";
        }
        else {
            skillsList_1.classList.add("fade-out");
            skillsList_1.classList.remove("fade-in");
            toggleSkillsButton_1.textContent = "View Skills";
        }
    });
    // Add variables to the global window object to prevent re-declaration
    window['toggleSkillsButton'] = toggleSkillsButton_1;
    window['skillsList'] = skillsList_1;
}
