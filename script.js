const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("todo-btn");
const todoList = document.getElementById("todo-list");

// add task
const addTask = () => {
  const taskText = todoInput.value.trim();
  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    todoList.appendChild(taskItem);
    todoInput.value = "";
  }
};

// create new task items
const createTaskItem = (taskText) => {
  const taskItem = document.createElement("li");
  taskItem.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", deleteTask);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(textSpan);
  taskItem.appendChild(deleteBtn);
  // console.log(taskItem);

  return taskItem;
};

//delete tasks
const deleteTask = (event) => {
  console.log(event.target);
  const taskItem = event.target.parentNode;
  todoList.removeChild(taskItem);
};

//toggle out taks
const toggleTask = (event) => {
  const taskItem = event.target.parentNode;
  taskItem.classList.toggle("completed");
};

//Event listeners
addTaskBtn.addEventListener("click", addTask);
todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
todoList.addEventListener("change", toggleTask);

const todoItems = ["stdudy code", "workout", "doo laundry"];
todoItems.forEach((item) => {
  const task = createTaskItem(item);
  todoList.appendChild(task);
});
