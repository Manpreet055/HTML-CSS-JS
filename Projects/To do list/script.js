let inputData = document.querySelector(".inputField");
let addTasks = document.querySelector(".addTask");
let tasks = document.querySelector(".tasks");
let allTasks = JSON.parse(localStorage.getItem("alltasks")) || [];
allTasks.forEach((task) => {
  tasks.insertAdjacentHTML("beforeend", task);
});

addTasks.addEventListener("click", () => {
  let duplicateCheck = allTasks.some((task) => task.includes(inputData.value));
  if (inputData.value === "" || duplicateCheck) {
    alert("Invalid Input!");
    inputData.value = "";
    return;
  }

  let newDiv = document.createElement("div");
  newDiv.className = "newDiv";
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  let deletebutton = document.createElement("button");
  deletebutton.textContent = "Delete";
  deletebutton.className = "deleteTask";
  let editButton = document.createElement("button");
  editButton.className = "editTask";
  editButton.textContent = "Edit";
  let text = document.createElement("span");
  text.textContent = inputData.value;
  text.className = "textData";
  newDiv.appendChild(checkbox);
  newDiv.appendChild(text);
  newDiv.appendChild(editButton);
  newDiv.appendChild(deletebutton);
  tasks.appendChild(newDiv);
  allTasks.push(newDiv.outerHTML);
  localStorage.setItem("alltasks", JSON.stringify(allTasks));
  inputData.value = "";
});

tasks.addEventListener("click", (event) => {
  if (event.target.matches(".deleteTask")) {
    let removeTask = event.target.closest(".newDiv");
    let removeHtml = removeTask.outerHTML;
    removeTask.remove();
    allTasks = allTasks.filter((task) => task !== removeHtml);
    localStorage.setItem("alltasks", JSON.stringify(allTasks));
  } else if (event.target.matches(".editTask")) {
    let targetedDiv = event.target.closest(".newDiv");
    let textElement = targetedDiv.children[1];
    addTasks.textContent = "Edit";
    inputData.value = textElement.textContent;
    textElement.textContent = inputData.value;
    targetedDiv.remove();
    allTasks = addTasks.filter((task) => task !== targetedDiv);
    localStorage.setItem("alltasks", JSON.stringify(allTasks));
    addTasks.textContent = "+ Add";
  }
});
