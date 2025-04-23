let input = document.querySelector(".inputField");
let tasks = document.querySelector(".tasks");
let addTask = document.querySelector(".addTask");
let storedTasks = JSON.parse(localStorage.getItem("alltasks")) || [];
storedTasks.forEach((task) => {
  tasks.insertAdjacentHTML("beforeend", task);
});
addTask.addEventListener("click", () => {
  let newDiv = document.createElement("div");
  newDiv.textContent = input.value;
  newDiv.className = "newDiv";
  tasks.insertAdjacentElement("beforeend", newDiv);
  storedTasks.push(newDiv.outerHTML);
  localStorage.setItem("alltasks", JSON.stringify(storedTasks));
});
