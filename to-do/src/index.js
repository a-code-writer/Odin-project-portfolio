import createToDo from "./create-to-do";
import createProject from "./create-project";

let projects = [];
let taskList = [];
let projectsTab = document.getElementById("projectsTab"); //sidebar
let addTask = document.getElementById("add-task");

function toDo(name, dueDate, priority, projParent, status, notes) {
  //to-do object
  return {
    name,
    dueDate,
    priority,
    projParent,
    status,
    notes,
  };
}

//project form
let projName = document.createElement("input"); //project name input
projName.setAttribute("placeholder", "Project Name");

let addBtn = document.createElement("button"); //submits new project
addBtn.setAttribute("type", "submit");
addBtn.textContent = "Add";

let cancelBtn = document.createElement("button"); //cancels new project
cancelBtn.setAttribute("type", "button");
cancelBtn.textContent = "Cancel";
cancelBtn.addEventListener("click", () => {
  form.remove();
});

let form = document.createElement("form"); //creates project form
form.appendChild(projName);
form.appendChild(addBtn);
form.appendChild(cancelBtn);

let projBtn = document.getElementById("add-btn"); //add project btn (inside html)
projBtn.addEventListener("click", () => {
  //when btn is clicked, project form appears
  document.getElementById("content").appendChild(form);
});

form.addEventListener("submit", (event) => {
  //submit project button
  event.preventDefault();
  localStorage.setItem("projects", JSON.stringify(projects));
  projects.push(projName.value);
  createProject();
});

//to-do form
let taskNameInput = document.createElement("input"); //to-do name input
taskNameInput.setAttribute("placeholder", "Task Name");
taskNameInput.setAttribute("required", "");

let taskPriority = document.createElement("select"); //to-do priority checkbox
taskPriority.innerHTML =
  '<option value="Yes">Priority</option><option value="No">Not A Priority</option>';
taskPriority.setAttribute("id", "priority-check");
taskPriority.setAttribute("required", "");

let taskPriorityLabel = document.createElement("label"); //label for priority checkbox
taskPriorityLabel.setAttribute("for", "priority-check");
taskPriorityLabel.textContent = "Is this a priority task?";

let toDoFormPriorityDiv = document.createElement("div");
toDoFormPriorityDiv.appendChild(taskPriorityLabel);
toDoFormPriorityDiv.appendChild(taskPriority);

let taskDuedate = document.createElement("input"); //to-do calender selector
taskDuedate.setAttribute("type", "date");
taskDuedate.setAttribute("required", "");

let dueDateLabel = document.createElement("label"); //label for calender
dueDateLabel.textContent = "When is this due?";

let toDoFormDueDateDiv = document.createElement("div");
toDoFormDueDateDiv.appendChild(dueDateLabel);
toDoFormDueDateDiv.appendChild(taskDuedate);

let taskProject = document.createElement("select"); //to-do project selector
let taskProjectlabel = document.createElement("label");
taskProjectlabel.textContent = "Does this belong in a project?";

let toDoFormProjectDiv = document.createElement("div");
toDoFormProjectDiv.appendChild(taskProjectlabel);
toDoFormProjectDiv.appendChild(taskProject);

let taskSubmit = document.createElement("button"); //submit to-do btn
taskSubmit.setAttribute("type", "submit");
taskSubmit.textContent = "Submit Task";

let taskCancel = document.createElement("button"); //to-do cancel
taskCancel.textContent = "Cancel";
taskCancel.addEventListener("click", () => {
  taskForm.remove();
});

let toDoFormSubmitCancelDiv = document.createElement("div");
toDoFormSubmitCancelDiv.appendChild(taskSubmit);
toDoFormSubmitCancelDiv.appendChild(taskCancel);

let taskNotes = document.createElement("input"); //todo description area
taskNotes.setAttribute("type", "text");
taskNotes.setAttribute("placeholder", "Put your description here.");

let taskForm = document.createElement("form"); //to-do form is assembled
taskForm.appendChild(taskNameInput);
taskForm.appendChild(toDoFormPriorityDiv);
taskForm.appendChild(toDoFormDueDateDiv);
taskForm.appendChild(toDoFormProjectDiv);
taskForm.appendChild(taskNotes);
taskForm.appendChild(toDoFormSubmitCancelDiv);

addTask.addEventListener("click", () => {
  //puts to-do form in the DOM
  document.getElementById("content").appendChild(taskForm);
  taskForm.style.justifySelf = "center";
});

taskForm.addEventListener("submit", (event) => {
  //submit to-do
  let status = "Pending";
  event.preventDefault();
  const newToDo = toDo(
    taskNameInput.value,
    taskDuedate.value,
    taskPriority.value,
    taskProject.value,
    status,
    taskNotes.value
  );
  taskList.push(newToDo);
  document.getElementById("content").innerHTML = "";

  //use list to create DOM to-do elements
  for (let i = 0; i < taskList.length; i++) {
    console.log(taskList);
    console.log(taskList[i]);
    createToDo(taskList[i], i);
  }

  localStorage.setItem("taskList", JSON.stringify(taskList));

  taskForm.remove();
});

//when page loads, to-dos are loaded
window.onload = () => {
  //to-do part
  // localStorage.clear()
  let storedToDos = localStorage.getItem("taskList"); //retrieves to-do list from local storage
  if (storedToDos) {
    //checks if to-do list is not empty
    let listOfToDos = JSON.parse(storedToDos); //parses to-do list
    for (let i = 0; i < listOfToDos.length; i++) {
      taskList.push(listOfToDos[i]);
    } //adds to-do list to taskList
    document.getElementById("content").innerHTML = ""; //gets rid of the default text
    console.log(listOfToDos);
    console.log(taskList);
    taskList.forEach((toDo) => {
      createToDo(toDo, taskList.indexOf(toDo));
    });
  } else {
    console.log("no to-dos");
  }
};

//project part
let storedProjects = localStorage.getItem("projects"); //retrieves project from local storage
if (storedProjects) {
  let listOfProjects = JSON.parse(storedProjects); //parses project
  listOfProjects.forEach((project) => {
    projects.push(project); //putting localStorage projects into projects array
  });
  createProject();
} else {
  console.log("no projects");
}

//Today tab
document.getElementById("todayTab").addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  const today = new Date();
  for (let i = 0; i < taskList.length; i++) {
    console.log(taskList[i].dueDate);
    console.log(taskList[i]);
    const inputDate = new Date(taskList[i].dueDate);
    const timeDiff = Math.abs(today.getTime() - inputDate.getTime());
    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    if (timeDiff <= dayInMilliseconds) {
      //checks if the difference is less than or equal to one day
      //append all to-do's within  a day to the content div
      console.log(taskList[i]);
      createToDo(taskList[i], i);
    }
  }
});

//all tab
document.getElementById("allTab").addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    //append all to-do's within a day to the content div
    console.log(taskList[i]);
    createToDo(taskList[i], i);
  }
});

//this week tab
document.getElementById("thisWeekTab").addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  const today = new Date();
  console.log(taskList[0]);
  for (let i = 0; i < taskList.length; i++) {
    const inputDate = new Date(taskList[i].dueDate);
    const timeDiff = Math.abs(today.getTime() - inputDate.getTime());
    const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    if (timeDiff <= weekInMilliseconds) {
      //checks if the difference is less than or equal to one week
      createToDo(taskList[i], i); //append all to-do's within  a week to the content div
    }
  }
});

//priority tab
document.getElementById("priorityTab").addEventListener("click", () => {
  document.getElementById("content").innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    console.log(taskList[i].priority);
    if (taskList[i].priority == "Yes") {
      createToDo(taskList[i], i);
    }
  }
});

export default taskList;
export { projects, addTask, projName, taskProject, form, taskList };
