let inputData = document.querySelector(".inputField");
let addTasks = document.querySelector(".addTask");
let tasks = document.querySelector(".tasks");
let allTasks = JSON.parse(localStorage.getItem("alltasks")) || [];
allTasks.forEach((task) => {
  tasks.insertAdjacentHTML("beforeend", task);
});

addTasks.addEventListener("click", () => {
  if (inputData.value === "") return;
  let newDiv = document.createElement("div");
  newDiv.className = "newDiv";
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  let newbutton = document.createElement("button");
  newbutton.textContent = "Delete";
  newbutton.className = "deleteTask";
  newDiv.appendChild(checkbox);
  newDiv.append(inputData.value);
  newDiv.appendChild(newbutton);
  tasks.appendChild(newDiv);
  allTasks.push(newDiv.outerHTML);

  localStorage.setItem("alltasks", JSON.stringify(allTasks));
});

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteTask")) {
    let taskDiv = e.target.closest(".newDiv");
    taskDiv.remove();
    localStorage.setItem("alltasks", JSON.stringify(allTasks));
  }
});