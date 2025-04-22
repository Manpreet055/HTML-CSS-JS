let body = document.querySelector("body");
let input = document.querySelector(".inputField");
let tasks = document.querySelector(".tasks");

// Load tasks on page load
window.addEventListener("DOMContentLoaded", () => {
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(taskText => {
    let taskDiv = document.createElement("div");
      taskDiv.innerHTML = `<input type="checkbox"/>${taskText} <span class="deleteTask">&times;</span>` ;
      taskDiv.className = "newDiv"
    tasks.appendChild(taskDiv);
  });
});

body.addEventListener("click", (event) => {
  if (event.target.matches(".addTask")) {
    let taskText = input.value.trim();
    if (!taskText) return;

    // Create task div
      let newDiv = document.createElement("div");
    newDiv.textContent = taskText;
    tasks.appendChild(newDiv);

    // Save task in localStorage
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));

    input.value = ""; // clear input
  }
});
