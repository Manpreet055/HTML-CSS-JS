//Selecting elements
let inputData = document.querySelector(".inputField");
let addTasks = document.querySelector(".addTask");
let tasks = document.querySelector(".tasks");
let darkMode = document.querySelector(".darkModeButton");

//Retrieving Data from LocalStorage
let storedTasks = JSON.parse(localStorage.getItem("storedTasks")) || [];

// Function to create task element after retriving the data from localStorage
function createTaskElement(taskObj) {
  let newTask = document.createElement("div"); //Div element holding all the data about tasks
  newTask.className = "newTask";

  let checkbox = document.createElement("input"); // creating Checkbox dynamically
  checkbox.type = "checkbox";
  checkbox.className = "checkBox";
  checkbox.checked = taskObj.isDone; // loading checkboxState if true checkbox will true otherwise unchecked

  let textData = document.createElement("span"); // creating span element to store task's text.
  textData.className = "textData";
  textData.textContent = taskObj.taskContent; //loading Task's text data into the span elemnt

  let editTask = document.createElement("div"); 
  editTask.className = "editTask";
  editTask.innerHTML = `<i class="fas fa-pen"></i>`;

  let deleteTask = document.createElement("div");
  deleteTask.className = "deleteTask";
  deleteTask.innerHTML = `<i class="fas fa-trash"></i>`;

  newTask.appendChild(checkbox);
  newTask.appendChild(textData);
  newTask.appendChild(editTask);
  newTask.appendChild(deleteTask);
  tasks.appendChild(newTask);

  // Update localStorage when checkbox is clicked
  checkbox.addEventListener("change", () => {
    let targetTask = storedTasks.find(
      (task) => task.taskContent === textData.textContent
    );
    if (targetTask) {
      targetTask.isDone = checkbox.checked;
      localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
    }
  });
}

// Load tasks from localStorage
storedTasks.forEach((task) => {
  createTaskElement(task);
});

// Add task logic
function addTask() {
  if (inputData.value.trim() === "") {
    alert("Empty Task");
    return;
  }

  let duplicateCheck = storedTasks.some(
    (task) => task.taskContent.trim() === inputData.value.trim()
  );
  if (duplicateCheck) {
    alert("Task already exists");
    inputData.value = "";
    return;
  }

  //Storing Task data into an object
  let taskObj = {
    isDone: false,
    taskContent: inputData.value.trim(),
  };
  storedTasks.push(taskObj);
  localStorage.setItem("storedTasks", JSON.stringify(storedTasks));

  createTaskElement(taskObj);

  inputData.value = "";
}

// Event listeners for adding task
addTasks.addEventListener("click", addTask);
inputData.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// Delete and edit task logic
tasks.addEventListener("click", (event) => {
  if (event.target.closest(".deleteTask")) {
    let removeTask = event.target.closest(".newTask");
    let taskText = removeTask.querySelector(".textData").textContent;
    removeTask.remove();
    storedTasks = storedTasks.filter((task) => task.taskContent !== taskText);
    localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
  }

  if (event.target.closest(".editTask")) {
    if (!confirm("Are you sure ?")) return;
    let clickTask = event.target.closest(".newTask");
    let textData = clickTask.querySelector(".textData");
    inputData.value = textData.textContent;

    storedTasks = storedTasks.filter(
      (task) => task.taskContent !== textData.textContent
    );
    localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
    clickTask.remove();
  }
});

// Dark Mode logic
let darkModeEnabled = localStorage.getItem("darkModePrefrence") === "true";
if (darkModeEnabled) {
  document.body.classList.add("darkMode");
}

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
  localStorage.setItem(
    "darkModePrefrence",
    document.body.classList.contains("darkMode")
  );
});
