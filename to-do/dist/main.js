/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function createProject() { 
     //add input to list
    projectsTab.innerHTML = ""; //resets sidebar content
    

    for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.length; i++){ //adds all current projects in array to sidebar
        
        let projLi = document.createElement('li') 
        projLi.setAttribute('class', 'active-tab')
        projLi.innerText = _index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i] 
        projLi.setAttribute('index', i); //How I will be able to choose and edit specific projects

        projLi.addEventListener('click', () => {  //clicking on projLi will show all tasks that are related with that project
            document.getElementById('content').innerHTML = ""; //clears content
            
            for(let j = 0; j < _index_js__WEBPACK_IMPORTED_MODULE_0__.taskList.length; j++){   //loops through taskList to find tasks that are related to the clicked projLi
                if(_index_js__WEBPACK_IMPORTED_MODULE_0__.taskList[j].projParent == projLi.innerText){
                    createToDo(_index_js__WEBPACK_IMPORTED_MODULE_0__.taskList[j], i)
                }    
            }
            
        })

        let menu = document.createElement('img'); //3 dots at end of project div
        menu.setAttribute('src', '../3-dots.png')
        menu.setAttribute('index', i) //making sure each menu button corresponds to its matching project
        menu.addEventListener('click', () => {
            let adjLi = document.querySelector(`li[index="${i}"]`)//adjLi is the corresponding project
            if(!adjLi.nextElementSibling || adjLi.nextElementSibling.tagName !== "DIV"){ //checks if projLi has div sibling already
                let menuBtns = document.createElement('div');// all buttons will be stored in a seperate div
                menuBtns.setAttribute('index', i)

                //inside menu button
                let editBtn = document.createElement('button')
                editBtn.innerText = "Edit";
                editBtn.addEventListener('click', () => {
                    let editProjForm = document.createElement('form');
                    let updateBtn = document.createElement('button')
                    let cancelNameBtn = document.createElement('button')

                    updateBtn.textContent = "Update";
                    updateBtn.setAttribute("type", "submit")
                    cancelNameBtn.textContent = "Cancel"

                    //button inside of Edit button
                    cancelNameBtn.addEventListener("click", () => {
                        editProjForm.remove()
                    })

                    //inside of edit button, will change the projects Name
                    let updateNameInput = document.createElement('input')
                    updateNameInput.setAttribute('placeholder', "Updated name")

                    editProjForm.appendChild(updateBtn);
                    editProjForm.appendChild(cancelNameBtn);
                    editProjForm.appendChild(updateNameInput);
                    editProjForm.addEventListener('submit', (event) => {
                        event.preventDefault();
                        _index_js__WEBPACK_IMPORTED_MODULE_0__.projects[i] = updateNameInput.value;
                        adjLi.textContent = updateNameInput.value
                        projLi.appendChild(menu)
                    })
                    menuBtns.remove()
                    projectsTab.insertBefore(editProjForm, adjLi.nextElementSibling)
                })

                //inside of menu button
                let deleteBtn = document.createElement('button')
                deleteBtn.innerText = 'Delete';
                deleteBtn.addEventListener('click', () => {
                    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.splice(i)
                    document.querySelector(`li[index="${i}"]`).remove()
                    document.querySelector(`div[index="${i}"]`).remove()
                })

                //inside of menu button
                let cancelbutton = document.createElement('button');
                cancelbutton.innerText = 'Cancel'
                cancelbutton.addEventListener('click', () =>{
                    document.querySelector(`div[index="${i}"]`).remove()
                })

                //buttons put inside of div
                menuBtns.appendChild(editBtn)
                menuBtns.appendChild(deleteBtn)
                menuBtns.appendChild(cancelbutton);
                
                //button div is added before current projects next sibling ie: right after it   
                projectsTab.insertBefore(menuBtns, adjLi.nextSibling) 
            }
        })

        projLi.appendChild(menu)
        projectsTab.appendChild(projLi)
    }

    //adding project options to the to-do form(dropdown menu)
    _index_js__WEBPACK_IMPORTED_MODULE_0__.taskProject.innerHTML = '<option></option>';
    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(project => {
        const option = document.createElement('option');
        option.text = project;
        option.value = project;
        _index_js__WEBPACK_IMPORTED_MODULE_0__.taskProject.appendChild(option);
    })

     localStorage.setItem('projects', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects)); 

    _index_js__WEBPACK_IMPORTED_MODULE_0__.form.remove()
}

 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);

/***/ }),

/***/ "./src/create-to-do.js":
/*!*****************************!*\
  !*** ./src/create-to-do.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const createToDo = (newToDo, i) => { 
    //i was kept as a n argument to use as a unique identifier for each to-do.
    let container = document.createElement('li') //container div for to-do
        container.setAttribute('code', i) 
        let containerLeft = document.createElement('div')
        containerLeft.setAttribute('style', 'display: flex; gap: 5px; margin-left: 5px')
        let containerRight = document.createElement('div')
        containerRight.setAttribute('style', 'display: flex; align-items: center')
    
        //TO-DO CHECKBOX
        let toDoCheck = document.createElement('img')
        toDoCheck.setAttribute('src', './unchecked.png')
        toDoCheck.setAttribute('style', 'max-height: 20px; max-width: 20px; align-self: center')
        toDoCheck.setAttribute('index', i)
        toDoCheck.addEventListener('click', () => {
            if(toDoCheck.getAttribute('src') == './unchecked.png'){
                toDoCheck.setAttribute('src', './checked.png')
                newToDo.status = true
                toDoName.style.textDecoration = 'line-through';
                toDoDate.style.textDecoration = 'line-through';
                toDoName.style.opacity = '0.5';
                toDoDate.style.opacity = '0.5';
            } else {
                toDoCheck.setAttribute('src', './unchecked.png')
                newToDo.status = false
                toDoName.style.textDecoration = 'none';
                toDoDate.style.textDecoration = 'none';
                toDoName.style.opacity = '1';
                toDoDate.style.opacity = '1';
            }
        })
        
        //TO-DO NAME ELEMENT
        let toDoName = document.createElement('p');
        toDoName.textContent = newToDo.name; 

        //TO-DO NOTES ELEMENT
        let toDoNotes = document.createElement('textarea')
        toDoNotes.textContent = newToDo.notes;
        toDoName.addEventListener('click', () =>{ //on clicking the p element, the notes section will be appended to the bottom of the to-do
            if(!container.nextElementSibling || container.nextElementSibling.tagName !== "TEXTAREA" && container.nextElementSibling.tagName !== "DIV" && container.nextElementSibling.tagName !== "FORM"){ //check if there is already a notes section, no duplicates
                document.getElementById('content').insertBefore(toDoNotes, container.nextElementSibling)
            } else if(container.nextElementSibling.tagName === "TEXTAREA"){ //if there is already a notes section, remove it
                toDoNotes.remove()
            } 
        })

        //TO-DO DATE ELEMENT
        let toDoDate = document.createElement('p')
        toDoDate.textContent = newToDo.dueDate;

        //BORDER FOR TO-DO, CHANGES BASED OFF PRIORITY
        let borderStyle = 'border-left: 5px solid';
        if (newToDo.priority == 'Yes') {
          borderStyle += ' red;';
        } else {
          borderStyle += ' black;';
        }

        //3 DOTS AT END OF TO-DO
        let toDoMenu = document.createElement('img');
        toDoMenu.setAttribute('src', '../3-dots.png') 
        toDoMenu.setAttribute('style', 'max-height: 20px; max-width: 20px')
        toDoMenu.setAttribute('index', i)
        toDoMenu.addEventListener('click', () => {
            if(!container.nextElementSibling || container.nextElementSibling.tagName !== "FORM" && container.nextElementSibling.tagName !== "DIV"){ //CHECKS FOR DUPLICATES
                let toDoBtnsDiv = document.createElement('div') //div which will contain all 3 menu btns for to-do
                toDoBtnsDiv.setAttribute('code', i)
                toDoBtnsDiv.setAttribute('style', 'display: flex; justify-content: end;')

                //UPDATE TO-DO BUTTON
                let toDoEdit = document.createElement('button') 
                toDoEdit.textContent = "Edit"
                toDoEdit.addEventListener('click', () => {
                    if(!container.nextElementSibling || container.nextElementSibling.tagName !== "FORM"){ //checks to see if the next element after container is a form. if not it appends the to-do update form to the bottom of the to-do content container div
                    let editForm = document.createElement('form')//form that will take input and replace to-do item info

                    let toDoFormName = document.createElement('input');
                    toDoFormName.setAttribute('placeholder', 'Set New Task Name Here');

                    let toDoFormProject = document.createElement('select')
                    toDoFormProject.textContent = 'Is this part of a project?'
                    toDoFormProject.innerHTML = '<option></option>';
                    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(project => {
                        const option = document.createElement('option');
                        option.text = project;
                        option.value = project;
                        toDoFormProject.appendChild(option);
                    })

                    let toDoFormPriority = document.createElement('select')
                    toDoFormPriority.innerHTML = '<option>Priority</option> <option>Not a Priority</option>'
                    
                    let toDoFormDate = document.createElement('input')
                    toDoFormDate.setAttribute('type', 'date');

                    let toDoFormNotes = document.createElement('input')
                    toDoFormNotes.setAttribute('placeholder', 'Set New Task Notes Here');

                    let toDoFormSubmit = document.createElement('button')
                    toDoFormSubmit.textContent = 'Submit'
                    toDoFormSubmit.setAttribute('type', 'submit')

                    let toDoFormCancel = document.createElement('button')
                    toDoFormCancel.textContent = 'Cancel';
                    toDoFormCancel.addEventListener('click', () => {
                        editForm.remove();
                    });

                    //TO-DO UPDATE FORM
                    editForm.appendChild(toDoFormName)
                    editForm.appendChild(toDoFormDate)
                    editForm.appendChild(toDoFormPriority)
                    editForm.appendChild(toDoFormProject)
                    editForm.appendChild(toDoFormNotes)
                    editForm.appendChild(toDoFormSubmit)
                    editForm.appendChild(toDoFormCancel)

                    editForm.addEventListener('submit', (event) =>{
                        event.preventDefault();
                        //CHANGING OBJECT VALUES
                        toDoBtnsDiv.remove()
                        newToDo.name = toDoFormName.value
                        newToDo.dueDate = toDoFormDate.value
                        if(toDoFormPriority.value == "Not a Priority"){ //checks if user selected Not priority or priority and uses if statment to set prioirty status to true or falsely
                            newToDo.priority = 'No';
                        } else{
                            newToDo.priority = 'Yes';
                        }
                        newToDo.projParent = toDoFormProject.value
                        newToDo.notes = toDoFormNotes.value

                        //USING NEW OBJECT VALUES TO CHANGE DOM VALUES
                        toDoDate.textContent = newToDo.dueDate;
                        toDoName.textContent = newToDo.name;
                        let borderStyle = 'border: 5px solid';
                        if (newToDo.priority == 'Yes') {
                          borderStyle += ' red;';
                        } else {
                          borderStyle += ' black;';
                        }
                        if(toDoFormNotes.value == ""){
                            return;
                        }else{
                            toDoNotes.textContent = newToDo.notes;
                        }
                        

                        container.setAttribute('style', `${borderStyle}`)
                       //<li> border to indicate priority level. Will do this
                        //by checking objects priority status and adding css  

                        editForm.remove()
                    })


                    document.getElementById('content').insertBefore(editForm, container.nextElementSibling)
                }
                   
                })

                //finished will be a special case because it does not need to be reflected

                //DELETE BUTTON
                let toDoDelete = document.createElement('button') //delete button
                toDoDelete.textContent = "Delete";
                toDoDelete.addEventListener('click', () => {
                    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].splice(i, 1)
                    document.querySelector(`li[code="${i}"]`).remove()
                    document.querySelector(`div[code="${i}"]`).remove()
                })

                //CANCEL BUTTON
                let toDoCancel = document.createElement('button')
                toDoCancel.textContent = 'Cancel'
                toDoCancel.addEventListener('click', () => {
                    toDoBtnsDiv.remove()
                })
                
                
                //3 DOTS MENU
                toDoBtnsDiv.appendChild(toDoEdit)
                toDoBtnsDiv.appendChild(toDoDelete)
                toDoBtnsDiv.appendChild(toDoCancel)
                document.getElementById('content').insertBefore(toDoBtnsDiv, container.nextElementSibling)
            }
        })

        containerLeft.appendChild(toDoCheck);
        containerLeft.appendChild(toDoName);

        containerRight.appendChild(toDoDate)
        containerRight.appendChild(toDoMenu);

        //this block is for maintaining the to-do's crossed out if they are already finished, when adding a new
        //to-do.
        if(newToDo.status == true){
            toDoCheck.checked = true
            toDoName.style.textDecoration = 'line-through';
            toDoDate.style.textDecoration = 'line-through';
            toDoName.style.opacity = '0.5';
            toDoDate.style.opacity = '0.5';
        } else {
            newToDo.status = false
            toDoName.style.textDecoration = 'none';
            toDoDate.style.textDecoration = 'none';
            toDoName.style.opacity = '1';
            toDoDate.style.opacity = '1';
        }

        container.appendChild(containerLeft);
        container.appendChild(containerRight);
        
        container.setAttribute('style', ` display: flex; justify-content: space-between; ${borderStyle} `);

        document.getElementById('content').appendChild(container) 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToDo);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   projName: () => (/* binding */ projName),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   taskList: () => (/* binding */ taskList),
/* harmony export */   taskProject: () => (/* binding */ taskProject)
/* harmony export */ });
/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do */ "./src/create-to-do.js");
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");




let projects = [];
let taskList = [];
let projectsTab = document.getElementById('projectsTab') //sidebar
let addTask = document.getElementById('add-task') 



function toDo(name, dueDate, priority, projParent, status, notes){ //to-do object
    return {
        name,
        dueDate,
        priority,
        projParent , 
        status, 
        notes
    }
}

            //project form
let projName = document.createElement('input'); //project name input
projName.setAttribute('placeholder', 'Project Name')

let addBtn = document.createElement('button') //submits new project
addBtn.setAttribute('type', 'submit');
addBtn.textContent = 'Add';

let cancelBtn = document.createElement('button'); //cancels new project
cancelBtn.setAttribute('type', 'button')
cancelBtn.textContent = "Cancel";
cancelBtn.addEventListener('click', () =>{
    form.remove();
})

let form = document.createElement('form');  //creates project form
form.appendChild(projName);
form.appendChild(addBtn);
form.appendChild(cancelBtn);

let projBtn = document.getElementById('add-btn') //add project btn (inside html)
projBtn.addEventListener('click', () => { //when btn is clicked, project form appears
    document.getElementById('content').appendChild(form);
})

form.addEventListener('submit', (event) => {//submit project button
    event.preventDefault();
    localStorage.setItem('projects', JSON.stringify(projects))
    projects.push(projName.value);
    (0,_create_project__WEBPACK_IMPORTED_MODULE_1__["default"])()
})

            //to-do form
let taskNameInput = document.createElement('input')  //to-do name input
taskNameInput.setAttribute('placeholder', "Task Name");
taskNameInput.setAttribute('required', '');

let taskPriority = document.createElement('select') //to-do priority checkbox
taskPriority.innerHTML = '<option value="Yes">Priority</option><option value="No">Not A Priority</option>'
taskPriority.setAttribute('id', 'priority-check')
taskPriority.setAttribute('required', '')

let taskPriorityLabel = document.createElement('label'); //label for priority checkbox
taskPriorityLabel.setAttribute('for', 'priority-check')
taskPriorityLabel.textContent = "Is this a priority task?"

let toDoFormPriorityDiv = document.createElement('div')
toDoFormPriorityDiv.appendChild(taskPriorityLabel)
toDoFormPriorityDiv.appendChild(taskPriority)


let taskDuedate = document.createElement('input') //to-do calender selector
taskDuedate.setAttribute('type', 'date')
taskDuedate.setAttribute('required', '')

let dueDateLabel = document.createElement('label'); //label for calender
dueDateLabel.textContent = "When is this due?"

let toDoFormDueDateDiv = document.createElement('div')
toDoFormDueDateDiv.appendChild(dueDateLabel)
toDoFormDueDateDiv.appendChild(taskDuedate)

let taskProject = document.createElement('select') //to-do project selector
let taskProjectlabel = document.createElement('label');
taskProjectlabel.textContent = "Does this belong in a project?"

let toDoFormProjectDiv = document.createElement('div')
toDoFormProjectDiv.appendChild(taskProjectlabel)
toDoFormProjectDiv.appendChild(taskProject)

let taskSubmit = document.createElement('button'); //submit to-do btn
taskSubmit.setAttribute('type', 'submit');
taskSubmit.textContent = "Submit Task"

let taskCancel = document.createElement('button'); //to-do cancel
taskCancel.textContent = "Cancel"
taskCancel.addEventListener('click', () => {
    taskForm.remove()
})

let toDoFormSubmitCancelDiv = document.createElement('div')
toDoFormSubmitCancelDiv.appendChild(taskSubmit)
toDoFormSubmitCancelDiv.appendChild(taskCancel)

let taskNotes = document.createElement('input') //todo description area
taskNotes.setAttribute('type', 'text')
taskNotes.setAttribute('placeholder', 'Put your description here.')


let taskForm = document.createElement('form') //to-do form is assembled
taskForm.appendChild(taskNameInput)
taskForm.appendChild(toDoFormPriorityDiv)
taskForm.appendChild(toDoFormDueDateDiv)
taskForm.appendChild(toDoFormProjectDiv)
taskForm.appendChild(taskNotes)
taskForm.appendChild(toDoFormSubmitCancelDiv)


addTask.addEventListener('click', () => { //puts to-do form in the DOM
    document.getElementById('content').appendChild(taskForm)
    taskForm.style.justifySelf = 'center'
})

taskForm.addEventListener('submit',(event)=> { //submit to-do 
    let status = "Pending"
    event.preventDefault();
    const newToDo = toDo(taskNameInput.value, taskDuedate.value, taskPriority.value, taskProject.value, status, taskNotes.value)
    taskList.push(newToDo);
    document.getElementById('content').innerHTML = ""

    //use list to create DOM to-do elements
    for(let i = 0; i < taskList.length; i++){
        console.log(taskList)
        console.log(taskList[i])
        ;(0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[i], i)
    }

    localStorage.setItem('taskList', JSON.stringify(taskList))


    taskForm.remove()
})


//when page loads, to-dos are loaded
window.onload = () => { 
    //to-do part
    // localStorage.clear()
    let storedToDos = localStorage.getItem('taskList'); //retrieves to-do list from local storage
    if (storedToDos) { //checks if to-do list is not empty
    let listOfToDos = JSON.parse(storedToDos); //parses to-do list
    document.getElementById('content').innerHTML = "" //gets rid of the default text
    console.log(listOfToDos)
    listOfToDos.forEach(toDo => {
        ;(0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(toDo, listOfToDos.indexOf(toDo))
    })
    } else{
        console.log('no to-dos')
    }  
}

    //project part
    //localStorage.clear()
    let storedProjects = localStorage.getItem('projects'); //retrieves project from local storage
    if (storedProjects) {
    let listOfProjects = JSON.parse(storedProjects); //parses project
    listOfProjects.forEach(project => {
        projects.push(project) //putting localStorage projects into projects array
    })  
    ;(0,_create_project__WEBPACK_IMPORTED_MODULE_1__["default"])()
    } else {
        console.log('no projects')
    }





        //Today tab
document.getElementById('todayTab').addEventListener('click', () => {
    document.getElementById('content').innerHTML = "";
    const today = new Date();
    console.log(taskList[0])
    for(let i = 0; i <= taskList.length; i++){  
        const inputDate = new Date(taskList[i].dueDate);
        const timeDiff = Math.abs(today.getTime() - inputDate.getTime());
        const dayInMilliseconds = 24 * 60 * 60 * 1000;
        if(timeDiff <= dayInMilliseconds){ //checks if the difference is less than or equal to one day
            //append all to-do's within  a day to the content div
            console.log(taskList[i])
            ;(0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[i], i)
        }
    }
})

        //all tab
document.getElementById('allTab').addEventListener('click', () => {
    document.getElementById('content').innerHTML = "";
    for(let i = 0; i <= taskList.length; i++){
        //append all to-do's within a day to the content div
        console.log(taskList[i])
        ;(0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[i], i)
    }
})

        //this week tab
document.getElementById('thisWeekTab').addEventListener('click', () => {
    document.getElementById('content').innerHTML = "";
    const today = new Date();
    console.log(taskList[0])
    for(let i = 0; i <= taskList.length; i++){  
        const inputDate = new Date(taskList[i].dueDate);
        const timeDiff = Math.abs(today.getTime() - inputDate.getTime());
        const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
        if(timeDiff <= weekInMilliseconds){ //checks if the difference is less than or equal to one week     
            (0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[i], i) //append all to-do's within  a week to the content div
        }
    }
})

        //priority tab
document.getElementById('priorityTab').addEventListener('click', () => {
    document.getElementById('content').innerHTML = "";
    for(let i = 0; i <= taskList.length; i++){
        console.log(taskList[i].priority)
        if(taskList[i].priority == 'Yes'){
            (0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[i], i)
        }
    }
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskList);



//I have a new problem. How do I retrieve projects from localstorage and 
//add them to the DOM?

//I have it figured out for to-do's, projects are different though.
//The issue comes from how the create-project function works.
//createProject() has no parameters. The code inside accesses the projects array
//and loops through it creating projects and appending them to the DOM
//However before any of that creation it first takes the value of the projName input field.
//This is no issue when the submit project button is clicked because when it is clicked the 
//projName input field will always be filled. Hwoever I am attempting to create projects when the
//window in loading for the first time (onload) this creates a problem because at this time the
//input field 'projName' has a value of "" which the createProject() function takes and uses to
//create an empty project, resulting in these blank <li> elements which I have been seeing.
//I attempted to solve this by inserting an if statement in the beginning of the function which 
//read (if projName.value == ""){return}. This would stop the creation of any projects with 
//an empty title, however this also created another problem. Now there are no projects being created
//at all. Once the condition of the if statement is met, the rest of the function will not run, meaning
// that it will not loop thru the projects array and create any projects in the DOM. I thiught of 
//countering this by rewriting the createProject() function to mimic how the creattodo() function
//works. But I dont know if thats the right way to do it. The to-dos are working fine. All todos stored
// in localstorage are being created.

//however todos are objects and projects are arrays. 

//I need to figure out how to make the projects that have a title, while also skipping the ones with "" as
//the title. Maybe a for loop would work?. for(item in projects){ if(item.title == ""){create project}else{
//return} Instead of doing for(projects.length) add an if statment after that skips the ones with "" as the title.


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLXByb2ovLi9zcmMvY3JlYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai8uL3NyYy9jcmVhdGUtdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RzLCBwcm9qTmFtZSwgdGFza1Byb2plY3QsIGZvcm0sIHRhc2tMaXN0IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7IFxyXG4gICAgIC8vYWRkIGlucHV0IHRvIGxpc3RcclxuICAgIHByb2plY3RzVGFiLmlubmVySFRNTCA9IFwiXCI7IC8vcmVzZXRzIHNpZGViYXIgY29udGVudFxyXG4gICAgXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXsgLy9hZGRzIGFsbCBjdXJyZW50IHByb2plY3RzIGluIGFycmF5IHRvIHNpZGViYXJcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcHJvakxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSBcclxuICAgICAgICBwcm9qTGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUtdGFiJylcclxuICAgICAgICBwcm9qTGkuaW5uZXJUZXh0ID0gcHJvamVjdHNbaV0gXHJcbiAgICAgICAgcHJvakxpLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKTsgLy9Ib3cgSSB3aWxsIGJlIGFibGUgdG8gY2hvb3NlIGFuZCBlZGl0IHNwZWNpZmljIHByb2plY3RzXHJcblxyXG4gICAgICAgIHByb2pMaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgIC8vY2xpY2tpbmcgb24gcHJvakxpIHdpbGwgc2hvdyBhbGwgdGFza3MgdGhhdCBhcmUgcmVsYXRlZCB3aXRoIHRoYXQgcHJvamVjdFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7IC8vY2xlYXJzIGNvbnRlbnRcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0YXNrTGlzdC5sZW5ndGg7IGorKyl7ICAgLy9sb29wcyB0aHJvdWdoIHRhc2tMaXN0IHRvIGZpbmQgdGFza3MgdGhhdCBhcmUgcmVsYXRlZCB0byB0aGUgY2xpY2tlZCBwcm9qTGlcclxuICAgICAgICAgICAgICAgIGlmKHRhc2tMaXN0W2pdLnByb2pQYXJlbnQgPT0gcHJvakxpLmlubmVyVGV4dCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtqXSwgaSlcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgLy8zIGRvdHMgYXQgZW5kIG9mIHByb2plY3QgZGl2XHJcbiAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi8zLWRvdHMucG5nJylcclxuICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKSAvL21ha2luZyBzdXJlIGVhY2ggbWVudSBidXR0b24gY29ycmVzcG9uZHMgdG8gaXRzIG1hdGNoaW5nIHByb2plY3RcclxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWRqTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtpbmRleD1cIiR7aX1cIl1gKS8vYWRqTGkgaXMgdGhlIGNvcnJlc3BvbmRpbmcgcHJvamVjdFxyXG4gICAgICAgICAgICBpZighYWRqTGkubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGFkakxpLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkRJVlwiKXsgLy9jaGVja3MgaWYgcHJvakxpIGhhcyBkaXYgc2libGluZyBhbHJlYWR5XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVudUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvLyBhbGwgYnV0dG9ucyB3aWxsIGJlIHN0b3JlZCBpbiBhIHNlcGVyYXRlIGRpdlxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9pbnNpZGUgbWVudSBidXR0b25cclxuICAgICAgICAgICAgICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCJFZGl0XCI7XHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0UHJvakZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbmNlbE5hbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdG4udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsTmFtZUJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9idXR0b24gaW5zaWRlIG9mIEVkaXQgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsTmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0ucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2luc2lkZSBvZiBlZGl0IGJ1dHRvbiwgd2lsbCBjaGFuZ2UgdGhlIHByb2plY3RzIE5hbWVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJVcGRhdGVkIG5hbWVcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFwcGVuZENoaWxkKHVwZGF0ZUJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFwcGVuZENoaWxkKGNhbmNlbE5hbWVCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hcHBlbmRDaGlsZCh1cGRhdGVOYW1lSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0gPSB1cGRhdGVOYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkakxpLnRleHRDb250ZW50ID0gdXBkYXRlTmFtZUlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2pMaS5hcHBlbmRDaGlsZChtZW51KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUJ0bnMucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1RhYi5pbnNlcnRCZWZvcmUoZWRpdFByb2pGb3JtLCBhZGpMaS5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vaW5zaWRlIG9mIG1lbnUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSAnRGVsZXRlJztcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtpbmRleD1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltpbmRleD1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2luc2lkZSBvZiBtZW51IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGV0IGNhbmNlbGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsYnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbaW5kZXg9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9idXR0b25zIHB1dCBpbnNpZGUgb2YgZGl2XHJcbiAgICAgICAgICAgICAgICBtZW51QnRucy5hcHBlbmRDaGlsZChlZGl0QnRuKVxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuYXBwZW5kQ2hpbGQoY2FuY2VsYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9idXR0b24gZGl2IGlzIGFkZGVkIGJlZm9yZSBjdXJyZW50IHByb2plY3RzIG5leHQgc2libGluZyBpZTogcmlnaHQgYWZ0ZXIgaXQgICBcclxuICAgICAgICAgICAgICAgIHByb2plY3RzVGFiLmluc2VydEJlZm9yZShtZW51QnRucywgYWRqTGkubmV4dFNpYmxpbmcpIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcHJvakxpLmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgICAgICAgcHJvamVjdHNUYWIuYXBwZW5kQ2hpbGQocHJvakxpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkaW5nIHByb2plY3Qgb3B0aW9ucyB0byB0aGUgdG8tZG8gZm9ybShkcm9wZG93biBtZW51KVxyXG4gICAgdGFza1Byb2plY3QuaW5uZXJIVE1MID0gJzxvcHRpb24+PC9vcHRpb24+JztcclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XHJcbiAgICAgICAgdGFza1Byb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pXHJcblxyXG4gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7IFxyXG5cclxuICAgIGZvcm0ucmVtb3ZlKClcclxufVxyXG5cclxuIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdCIsImltcG9ydCB0YXNrTGlzdCBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBjcmVhdGVUb0RvID0gKG5ld1RvRG8sIGkpID0+IHsgXHJcbiAgICAvL2kgd2FzIGtlcHQgYXMgYSBuIGFyZ3VtZW50IHRvIHVzZSBhcyBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIHRvLWRvLlxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykgLy9jb250YWluZXIgZGl2IGZvciB0by1kb1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvZGUnLCBpKSBcclxuICAgICAgICBsZXQgY29udGFpbmVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29udGFpbmVyTGVmdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGdhcDogNXB4OyBtYXJnaW4tbGVmdDogNXB4JylcclxuICAgICAgICBsZXQgY29udGFpbmVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnRhaW5lclJpZ2h0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcicpXHJcbiAgICBcclxuICAgICAgICAvL1RPLURPIENIRUNLQk9YXHJcbiAgICAgICAgbGV0IHRvRG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vdW5jaGVja2VkLnBuZycpXHJcbiAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWF4LWhlaWdodDogMjBweDsgbWF4LXdpZHRoOiAyMHB4OyBhbGlnbi1zZWxmOiBjZW50ZXInKVxyXG4gICAgICAgIHRvRG9DaGVjay5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSlcclxuICAgICAgICB0b0RvQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRvRG9DaGVjay5nZXRBdHRyaWJ1dGUoJ3NyYycpID09ICcuL3VuY2hlY2tlZC5wbmcnKXtcclxuICAgICAgICAgICAgICAgIHRvRG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2NoZWNrZWQucG5nJylcclxuICAgICAgICAgICAgICAgIG5ld1RvRG8uc3RhdHVzID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCdzcmMnLCAnLi91bmNoZWNrZWQucG5nJylcclxuICAgICAgICAgICAgICAgIG5ld1RvRG8uc3RhdHVzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9UTy1ETyBOQU1FIEVMRU1FTlRcclxuICAgICAgICBsZXQgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSBuZXdUb0RvLm5hbWU7IFxyXG5cclxuICAgICAgICAvL1RPLURPIE5PVEVTIEVMRU1FTlRcclxuICAgICAgICBsZXQgdG9Eb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgIHRvRG9Ob3Rlcy50ZXh0Q29udGVudCA9IG5ld1RvRG8ubm90ZXM7XHJcbiAgICAgICAgdG9Eb05hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PnsgLy9vbiBjbGlja2luZyB0aGUgcCBlbGVtZW50LCB0aGUgbm90ZXMgc2VjdGlvbiB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBib3R0b20gb2YgdGhlIHRvLWRvXHJcbiAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJURVhUQVJFQVwiICYmIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJESVZcIiAmJiBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRk9STVwiKXsgLy9jaGVjayBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgbm90ZXMgc2VjdGlvbiwgbm8gZHVwbGljYXRlc1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbnNlcnRCZWZvcmUodG9Eb05vdGVzLCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lID09PSBcIlRFWFRBUkVBXCIpeyAvL2lmIHRoZXJlIGlzIGFscmVhZHkgYSBub3RlcyBzZWN0aW9uLCByZW1vdmUgaXRcclxuICAgICAgICAgICAgICAgIHRvRG9Ob3Rlcy5yZW1vdmUoKVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vVE8tRE8gREFURSBFTEVNRU5UXHJcbiAgICAgICAgbGV0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBuZXdUb0RvLmR1ZURhdGU7XHJcblxyXG4gICAgICAgIC8vQk9SREVSIEZPUiBUTy1ETywgQ0hBTkdFUyBCQVNFRCBPRkYgUFJJT1JJVFlcclxuICAgICAgICBsZXQgYm9yZGVyU3R5bGUgPSAnYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCc7XHJcbiAgICAgICAgaWYgKG5ld1RvRG8ucHJpb3JpdHkgPT0gJ1llcycpIHtcclxuICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgcmVkOyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgYmxhY2s7JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vMyBET1RTIEFUIEVORCBPRiBUTy1ET1xyXG4gICAgICAgIGxldCB0b0RvTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHRvRG9NZW51LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uLzMtZG90cy5wbmcnKSBcclxuICAgICAgICB0b0RvTWVudS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21heC1oZWlnaHQ6IDIwcHg7IG1heC13aWR0aDogMjBweCcpXHJcbiAgICAgICAgdG9Eb01lbnUuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpXHJcbiAgICAgICAgdG9Eb01lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJGT1JNXCIgJiYgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkRJVlwiKXsgLy9DSEVDS1MgRk9SIERVUExJQ0FURVNcclxuICAgICAgICAgICAgICAgIGxldCB0b0RvQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vZGl2IHdoaWNoIHdpbGwgY29udGFpbiBhbGwgMyBtZW51IGJ0bnMgZm9yIHRvLWRvXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NvZGUnLCBpKVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDsnKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vVVBEQVRFIFRPLURPIEJVVFRPTlxyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgXHJcbiAgICAgICAgICAgICAgICB0b0RvRWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiXHJcbiAgICAgICAgICAgICAgICB0b0RvRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyB8fCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRk9STVwiKXsgLy9jaGVja3MgdG8gc2VlIGlmIHRoZSBuZXh0IGVsZW1lbnQgYWZ0ZXIgY29udGFpbmVyIGlzIGEgZm9ybS4gaWYgbm90IGl0IGFwcGVuZHMgdGhlIHRvLWRvIHVwZGF0ZSBmb3JtIHRvIHRoZSBib3R0b20gb2YgdGhlIHRvLWRvIGNvbnRlbnQgY29udGFpbmVyIGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKS8vZm9ybSB0aGF0IHdpbGwgdGFrZSBpbnB1dCBhbmQgcmVwbGFjZSB0by1kbyBpdGVtIGluZm9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1OYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2V0IE5ldyBUYXNrIE5hbWUgSGVyZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByb2plY3QudGV4dENvbnRlbnQgPSAnSXMgdGhpcyBwYXJ0IG9mIGEgcHJvamVjdD8nXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcm9qZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uPjwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxvcHRpb24+UHJpb3JpdHk8L29wdGlvbj4gPG9wdGlvbj5Ob3QgYSBQcmlvcml0eTwvb3B0aW9uPidcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybU5vdGVzLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2V0IE5ldyBUYXNrIE5vdGVzIEhlcmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybUNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vVE8tRE8gVVBEQVRFIEZPUk1cclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybU5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1EYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtUHJpb3JpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Qcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtTm90ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1TdWJtaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1DYW5jZWwpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ0hBTkdJTkcgT0JKRUNUIFZBTFVFU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLm5hbWUgPSB0b0RvRm9ybU5hbWUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5kdWVEYXRlID0gdG9Eb0Zvcm1EYXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRvRG9Gb3JtUHJpb3JpdHkudmFsdWUgPT0gXCJOb3QgYSBQcmlvcml0eVwiKXsgLy9jaGVja3MgaWYgdXNlciBzZWxlY3RlZCBOb3QgcHJpb3JpdHkgb3IgcHJpb3JpdHkgYW5kIHVzZXMgaWYgc3RhdG1lbnQgdG8gc2V0IHByaW9pcnR5IHN0YXR1cyB0byB0cnVlIG9yIGZhbHNlbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ucHJpb3JpdHkgPSAnTm8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLnByaW9yaXR5ID0gJ1llcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5wcm9qUGFyZW50ID0gdG9Eb0Zvcm1Qcm9qZWN0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ubm90ZXMgPSB0b0RvRm9ybU5vdGVzLnZhbHVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1VTSU5HIE5FVyBPQkpFQ1QgVkFMVUVTIFRPIENIQU5HRSBET00gVkFMVUVTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gbmV3VG9Eby5kdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IG5ld1RvRG8ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvcmRlclN0eWxlID0gJ2JvcmRlcjogNXB4IHNvbGlkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1RvRG8ucHJpb3JpdHkgPT0gJ1llcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZSArPSAnIHJlZDsnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgYmxhY2s7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0b0RvRm9ybU5vdGVzLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9Ob3Rlcy50ZXh0Q29udGVudCA9IG5ld1RvRG8ubm90ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAke2JvcmRlclN0eWxlfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy88bGk+IGJvcmRlciB0byBpbmRpY2F0ZSBwcmlvcml0eSBsZXZlbC4gV2lsbCBkbyB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYnkgY2hlY2tpbmcgb2JqZWN0cyBwcmlvcml0eSBzdGF0dXMgYW5kIGFkZGluZyBjc3MgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0ucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbnNlcnRCZWZvcmUoZWRpdEZvcm0sIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9maW5pc2hlZCB3aWxsIGJlIGEgc3BlY2lhbCBjYXNlIGJlY2F1c2UgaXQgZG9lcyBub3QgbmVlZCB0byBiZSByZWZsZWN0ZWRcclxuXHJcbiAgICAgICAgICAgICAgICAvL0RFTEVURSBCVVRUT05cclxuICAgICAgICAgICAgICAgIGxldCB0b0RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgLy9kZWxldGUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0b0RvRGVsZXRlLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICAgICAgICAgICAgICAgIHRvRG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpc3Quc3BsaWNlKGksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbY29kZT1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltjb2RlPVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vQ0FOQ0VMIEJVVFRPTlxyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgdG9Eb0NhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnXHJcbiAgICAgICAgICAgICAgICB0b0RvQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vMyBET1RTIE1FTlVcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9FZGl0KVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuYXBwZW5kQ2hpbGQodG9Eb0RlbGV0ZSlcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9DYW5jZWwpXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmluc2VydEJlZm9yZSh0b0RvQnRuc0RpdiwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQodG9Eb0NoZWNrKTtcclxuICAgICAgICBjb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKHRvRG9OYW1lKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQodG9Eb0RhdGUpXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQodG9Eb01lbnUpO1xyXG5cclxuICAgICAgICAvL3RoaXMgYmxvY2sgaXMgZm9yIG1haW50YWluaW5nIHRoZSB0by1kbydzIGNyb3NzZWQgb3V0IGlmIHRoZXkgYXJlIGFscmVhZHkgZmluaXNoZWQsIHdoZW4gYWRkaW5nIGEgbmV3XHJcbiAgICAgICAgLy90by1kby5cclxuICAgICAgICBpZihuZXdUb0RvLnN0YXR1cyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdG9Eb0NoZWNrLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1RvRG8uc3RhdHVzID0gZmFsc2VcclxuICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckxlZnQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJSaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgJHtib3JkZXJTdHlsZX0gYCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9EbzsiLCJpbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9jcmVhdGUtdG8tZG9cIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcclxuXHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IHRhc2tMaXN0ID0gW107XHJcbmxldCBwcm9qZWN0c1RhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c1RhYicpIC8vc2lkZWJhclxyXG5sZXQgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpIFxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0b0RvKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qUGFyZW50LCBzdGF0dXMsIG5vdGVzKXsgLy90by1kbyBvYmplY3RcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIHByb2pQYXJlbnQgLCBcclxuICAgICAgICBzdGF0dXMsIFxyXG4gICAgICAgIG5vdGVzXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAgICAgICAgIC8vcHJvamVjdCBmb3JtXHJcbmxldCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7IC8vcHJvamVjdCBuYW1lIGlucHV0XHJcbnByb2pOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lJylcclxuXHJcbmxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSAvL3N1Ym1pdHMgbmV3IHByb2plY3RcclxuYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcblxyXG5sZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vY2FuY2VscyBuZXcgcHJvamVjdFxyXG5jYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXHJcbmNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgZm9ybS5yZW1vdmUoKTtcclxufSlcclxuXHJcbmxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyAgLy9jcmVhdGVzIHByb2plY3QgZm9ybVxyXG5mb3JtLmFwcGVuZENoaWxkKHByb2pOYW1lKTtcclxuZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG5mb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcblxyXG5sZXQgcHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnRuJykgLy9hZGQgcHJvamVjdCBidG4gKGluc2lkZSBodG1sKVxyXG5wcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvL3doZW4gYnRuIGlzIGNsaWNrZWQsIHByb2plY3QgZm9ybSBhcHBlYXJzXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGZvcm0pO1xyXG59KVxyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHsvL3N1Ym1pdCBwcm9qZWN0IGJ1dHRvblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcclxuICAgIHByb2plY3RzLnB1c2gocHJvak5hbWUudmFsdWUpO1xyXG4gICAgY3JlYXRlUHJvamVjdCgpXHJcbn0pXHJcblxyXG4gICAgICAgICAgICAvL3RvLWRvIGZvcm1cclxubGV0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpICAvL3RvLWRvIG5hbWUgaW5wdXRcclxudGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUYXNrIE5hbWVcIik7XHJcbnRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbmxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSAvL3RvLWRvIHByaW9yaXR5IGNoZWNrYm94XHJcbnRhc2tQcmlvcml0eS5pbm5lckhUTUwgPSAnPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlByaW9yaXR5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm90IEEgUHJpb3JpdHk8L29wdGlvbj4nXHJcbnRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWNoZWNrJylcclxudGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcclxuXHJcbmxldCB0YXNrUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vbGFiZWwgZm9yIHByaW9yaXR5IGNoZWNrYm94XHJcbnRhc2tQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LWNoZWNrJylcclxudGFza1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIklzIHRoaXMgYSBwcmlvcml0eSB0YXNrP1wiXHJcblxyXG5sZXQgdG9Eb0Zvcm1Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnRvRG9Gb3JtUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5TGFiZWwpXHJcbnRvRG9Gb3JtUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KVxyXG5cclxuXHJcbmxldCB0YXNrRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgLy90by1kbyBjYWxlbmRlciBzZWxlY3RvclxyXG50YXNrRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXHJcbnRhc2tEdWVkYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcclxuXHJcbmxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAvL2xhYmVsIGZvciBjYWxlbmRlclxyXG5kdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIldoZW4gaXMgdGhpcyBkdWU/XCJcclxuXHJcbmxldCB0b0RvRm9ybUR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG50b0RvRm9ybUR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKVxyXG50b0RvRm9ybUR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZWRhdGUpXHJcblxyXG5sZXQgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSAvL3RvLWRvIHByb2plY3Qgc2VsZWN0b3JcclxubGV0IHRhc2tQcm9qZWN0bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG50YXNrUHJvamVjdGxhYmVsLnRleHRDb250ZW50ID0gXCJEb2VzIHRoaXMgYmVsb25nIGluIGEgcHJvamVjdD9cIlxyXG5cclxubGV0IHRvRG9Gb3JtUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnRvRG9Gb3JtUHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdGxhYmVsKVxyXG50b0RvRm9ybVByb2plY3REaXYuYXBwZW5kQ2hpbGQodGFza1Byb2plY3QpXHJcblxyXG5sZXQgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvL3N1Ym1pdCB0by1kbyBidG5cclxudGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbnRhc2tTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBUYXNrXCJcclxuXHJcbmxldCB0YXNrQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vdG8tZG8gY2FuY2VsXHJcbnRhc2tDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcbnRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0YXNrRm9ybS5yZW1vdmUoKVxyXG59KVxyXG5cclxubGV0IHRvRG9Gb3JtU3VibWl0Q2FuY2VsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxudG9Eb0Zvcm1TdWJtaXRDYW5jZWxEaXYuYXBwZW5kQ2hpbGQodGFza1N1Ym1pdClcclxudG9Eb0Zvcm1TdWJtaXRDYW5jZWxEaXYuYXBwZW5kQ2hpbGQodGFza0NhbmNlbClcclxuXHJcbmxldCB0YXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIC8vdG9kbyBkZXNjcmlwdGlvbiBhcmVhXHJcbnRhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXHJcbnRhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1B1dCB5b3VyIGRlc2NyaXB0aW9uIGhlcmUuJylcclxuXHJcblxyXG5sZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykgLy90by1kbyBmb3JtIGlzIGFzc2VtYmxlZFxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVByaW9yaXR5RGl2KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybUR1ZURhdGVEaXYpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtUHJvamVjdERpdilcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza05vdGVzKVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVN1Ym1pdENhbmNlbERpdilcclxuXHJcblxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvL3B1dHMgdG8tZG8gZm9ybSBpbiB0aGUgRE9NXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKHRhc2tGb3JtKVxyXG4gICAgdGFza0Zvcm0uc3R5bGUuanVzdGlmeVNlbGYgPSAnY2VudGVyJ1xyXG59KVxyXG5cclxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoZXZlbnQpPT4geyAvL3N1Ym1pdCB0by1kbyBcclxuICAgIGxldCBzdGF0dXMgPSBcIlBlbmRpbmdcIlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1RvRG8gPSB0b0RvKHRhc2tOYW1lSW5wdXQudmFsdWUsIHRhc2tEdWVkYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUsIHRhc2tQcm9qZWN0LnZhbHVlLCBzdGF0dXMsIHRhc2tOb3Rlcy52YWx1ZSlcclxuICAgIHRhc2tMaXN0LnB1c2gobmV3VG9Ebyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICAvL3VzZSBsaXN0IHRvIGNyZWF0ZSBET00gdG8tZG8gZWxlbWVudHNcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpXHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3RbaV0pXHJcbiAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpXHJcblxyXG5cclxuICAgIHRhc2tGb3JtLnJlbW92ZSgpXHJcbn0pXHJcblxyXG5cclxuLy93aGVuIHBhZ2UgbG9hZHMsIHRvLWRvcyBhcmUgbG9hZGVkXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7IFxyXG4gICAgLy90by1kbyBwYXJ0XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgbGV0IHN0b3JlZFRvRG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0Jyk7IC8vcmV0cmlldmVzIHRvLWRvIGxpc3QgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgICBpZiAoc3RvcmVkVG9Eb3MpIHsgLy9jaGVja3MgaWYgdG8tZG8gbGlzdCBpcyBub3QgZW1wdHlcclxuICAgIGxldCBsaXN0T2ZUb0RvcyA9IEpTT04ucGFyc2Uoc3RvcmVkVG9Eb3MpOyAvL3BhcnNlcyB0by1kbyBsaXN0XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCIgLy9nZXRzIHJpZCBvZiB0aGUgZGVmYXVsdCB0ZXh0XHJcbiAgICBjb25zb2xlLmxvZyhsaXN0T2ZUb0RvcylcclxuICAgIGxpc3RPZlRvRG9zLmZvckVhY2godG9EbyA9PiB7XHJcbiAgICAgICAgY3JlYXRlVG9Ebyh0b0RvLCBsaXN0T2ZUb0Rvcy5pbmRleE9mKHRvRG8pKVxyXG4gICAgfSlcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZygnbm8gdG8tZG9zJylcclxuICAgIH0gIFxyXG59XHJcblxyXG4gICAgLy9wcm9qZWN0IHBhcnRcclxuICAgIC8vbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgIGxldCBzdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpOyAvL3JldHJpZXZlcyBwcm9qZWN0IGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgaWYgKHN0b3JlZFByb2plY3RzKSB7XHJcbiAgICBsZXQgbGlzdE9mUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzKTsgLy9wYXJzZXMgcHJvamVjdFxyXG4gICAgbGlzdE9mUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpIC8vcHV0dGluZyBsb2NhbFN0b3JhZ2UgcHJvamVjdHMgaW50byBwcm9qZWN0cyBhcnJheVxyXG4gICAgfSkgIFxyXG4gICAgY3JlYXRlUHJvamVjdCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdubyBwcm9qZWN0cycpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvL1RvZGF5IHRhYlxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlUYWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0WzBdKVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7ICBcclxuICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBuZXcgRGF0ZSh0YXNrTGlzdFtpXS5kdWVEYXRlKTtcclxuICAgICAgICBjb25zdCB0aW1lRGlmZiA9IE1hdGguYWJzKHRvZGF5LmdldFRpbWUoKSAtIGlucHV0RGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGNvbnN0IGRheUluTWlsbGlzZWNvbmRzID0gMjQgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgICBpZih0aW1lRGlmZiA8PSBkYXlJbk1pbGxpc2Vjb25kcyl7IC8vY2hlY2tzIGlmIHRoZSBkaWZmZXJlbmNlIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBvbmUgZGF5XHJcbiAgICAgICAgICAgIC8vYXBwZW5kIGFsbCB0by1kbydzIHdpdGhpbiAgYSBkYXkgdG8gdGhlIGNvbnRlbnQgZGl2XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldKVxyXG4gICAgICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2ldLCBpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbiAgICAgICAgLy9hbGwgdGFiXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxUYWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdGFza0xpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vYXBwZW5kIGFsbCB0by1kbydzIHdpdGhpbiBhIGRheSB0byB0aGUgY29udGVudCBkaXZcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSlcclxuICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2ldLCBpKVxyXG4gICAgfVxyXG59KVxyXG5cclxuICAgICAgICAvL3RoaXMgd2VlayB0YWJcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXNXZWVrVGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFswXSlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdGFza0xpc3QubGVuZ3RoOyBpKyspeyAgXHJcbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gbmV3IERhdGUodGFza0xpc3RbaV0uZHVlRGF0ZSk7XHJcbiAgICAgICAgY29uc3QgdGltZURpZmYgPSBNYXRoLmFicyh0b2RheS5nZXRUaW1lKCkgLSBpbnB1dERhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICBjb25zdCB3ZWVrSW5NaWxsaXNlY29uZHMgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgICBpZih0aW1lRGlmZiA8PSB3ZWVrSW5NaWxsaXNlY29uZHMpeyAvL2NoZWNrcyBpZiB0aGUgZGlmZmVyZW5jZSBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gb25lIHdlZWsgICAgIFxyXG4gICAgICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2ldLCBpKSAvL2FwcGVuZCBhbGwgdG8tZG8ncyB3aXRoaW4gIGEgd2VlayB0byB0aGUgY29udGVudCBkaXZcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG4gICAgICAgIC8vcHJpb3JpdHkgdGFiXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVRhYicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3RbaV0ucHJpb3JpdHkpXHJcbiAgICAgICAgaWYodGFza0xpc3RbaV0ucHJpb3JpdHkgPT0gJ1llcycpe1xyXG4gICAgICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2ldLCBpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tMaXN0XHJcbmV4cG9ydCB7cHJvamVjdHMsIGFkZFRhc2ssIHByb2pOYW1lLCB0YXNrUHJvamVjdCwgZm9ybSwgdGFza0xpc3R9XHJcblxyXG5cclxuLy9JIGhhdmUgYSBuZXcgcHJvYmxlbS4gSG93IGRvIEkgcmV0cmlldmUgcHJvamVjdHMgZnJvbSBsb2NhbHN0b3JhZ2UgYW5kIFxyXG4vL2FkZCB0aGVtIHRvIHRoZSBET00/XHJcblxyXG4vL0kgaGF2ZSBpdCBmaWd1cmVkIG91dCBmb3IgdG8tZG8ncywgcHJvamVjdHMgYXJlIGRpZmZlcmVudCB0aG91Z2guXHJcbi8vVGhlIGlzc3VlIGNvbWVzIGZyb20gaG93IHRoZSBjcmVhdGUtcHJvamVjdCBmdW5jdGlvbiB3b3Jrcy5cclxuLy9jcmVhdGVQcm9qZWN0KCkgaGFzIG5vIHBhcmFtZXRlcnMuIFRoZSBjb2RlIGluc2lkZSBhY2Nlc3NlcyB0aGUgcHJvamVjdHMgYXJyYXlcclxuLy9hbmQgbG9vcHMgdGhyb3VnaCBpdCBjcmVhdGluZyBwcm9qZWN0cyBhbmQgYXBwZW5kaW5nIHRoZW0gdG8gdGhlIERPTVxyXG4vL0hvd2V2ZXIgYmVmb3JlIGFueSBvZiB0aGF0IGNyZWF0aW9uIGl0IGZpcnN0IHRha2VzIHRoZSB2YWx1ZSBvZiB0aGUgcHJvak5hbWUgaW5wdXQgZmllbGQuXHJcbi8vVGhpcyBpcyBubyBpc3N1ZSB3aGVuIHRoZSBzdWJtaXQgcHJvamVjdCBidXR0b24gaXMgY2xpY2tlZCBiZWNhdXNlIHdoZW4gaXQgaXMgY2xpY2tlZCB0aGUgXHJcbi8vcHJvak5hbWUgaW5wdXQgZmllbGQgd2lsbCBhbHdheXMgYmUgZmlsbGVkLiBId29ldmVyIEkgYW0gYXR0ZW1wdGluZyB0byBjcmVhdGUgcHJvamVjdHMgd2hlbiB0aGVcclxuLy93aW5kb3cgaW4gbG9hZGluZyBmb3IgdGhlIGZpcnN0IHRpbWUgKG9ubG9hZCkgdGhpcyBjcmVhdGVzIGEgcHJvYmxlbSBiZWNhdXNlIGF0IHRoaXMgdGltZSB0aGVcclxuLy9pbnB1dCBmaWVsZCAncHJvak5hbWUnIGhhcyBhIHZhbHVlIG9mIFwiXCIgd2hpY2ggdGhlIGNyZWF0ZVByb2plY3QoKSBmdW5jdGlvbiB0YWtlcyBhbmQgdXNlcyB0b1xyXG4vL2NyZWF0ZSBhbiBlbXB0eSBwcm9qZWN0LCByZXN1bHRpbmcgaW4gdGhlc2UgYmxhbmsgPGxpPiBlbGVtZW50cyB3aGljaCBJIGhhdmUgYmVlbiBzZWVpbmcuXHJcbi8vSSBhdHRlbXB0ZWQgdG8gc29sdmUgdGhpcyBieSBpbnNlcnRpbmcgYW4gaWYgc3RhdGVtZW50IGluIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGZ1bmN0aW9uIHdoaWNoIFxyXG4vL3JlYWQgKGlmIHByb2pOYW1lLnZhbHVlID09IFwiXCIpe3JldHVybn0uIFRoaXMgd291bGQgc3RvcCB0aGUgY3JlYXRpb24gb2YgYW55IHByb2plY3RzIHdpdGggXHJcbi8vYW4gZW1wdHkgdGl0bGUsIGhvd2V2ZXIgdGhpcyBhbHNvIGNyZWF0ZWQgYW5vdGhlciBwcm9ibGVtLiBOb3cgdGhlcmUgYXJlIG5vIHByb2plY3RzIGJlaW5nIGNyZWF0ZWRcclxuLy9hdCBhbGwuIE9uY2UgdGhlIGNvbmRpdGlvbiBvZiB0aGUgaWYgc3RhdGVtZW50IGlzIG1ldCwgdGhlIHJlc3Qgb2YgdGhlIGZ1bmN0aW9uIHdpbGwgbm90IHJ1biwgbWVhbmluZ1xyXG4vLyB0aGF0IGl0IHdpbGwgbm90IGxvb3AgdGhydSB0aGUgcHJvamVjdHMgYXJyYXkgYW5kIGNyZWF0ZSBhbnkgcHJvamVjdHMgaW4gdGhlIERPTS4gSSB0aGl1Z2h0IG9mIFxyXG4vL2NvdW50ZXJpbmcgdGhpcyBieSByZXdyaXRpbmcgdGhlIGNyZWF0ZVByb2plY3QoKSBmdW5jdGlvbiB0byBtaW1pYyBob3cgdGhlIGNyZWF0dG9kbygpIGZ1bmN0aW9uXHJcbi8vd29ya3MuIEJ1dCBJIGRvbnQga25vdyBpZiB0aGF0cyB0aGUgcmlnaHQgd2F5IHRvIGRvIGl0LiBUaGUgdG8tZG9zIGFyZSB3b3JraW5nIGZpbmUuIEFsbCB0b2RvcyBzdG9yZWRcclxuLy8gaW4gbG9jYWxzdG9yYWdlIGFyZSBiZWluZyBjcmVhdGVkLlxyXG5cclxuLy9ob3dldmVyIHRvZG9zIGFyZSBvYmplY3RzIGFuZCBwcm9qZWN0cyBhcmUgYXJyYXlzLiBcclxuXHJcbi8vSSBuZWVkIHRvIGZpZ3VyZSBvdXQgaG93IHRvIG1ha2UgdGhlIHByb2plY3RzIHRoYXQgaGF2ZSBhIHRpdGxlLCB3aGlsZSBhbHNvIHNraXBwaW5nIHRoZSBvbmVzIHdpdGggXCJcIiBhc1xyXG4vL3RoZSB0aXRsZS4gTWF5YmUgYSBmb3IgbG9vcCB3b3VsZCB3b3JrPy4gZm9yKGl0ZW0gaW4gcHJvamVjdHMpeyBpZihpdGVtLnRpdGxlID09IFwiXCIpe2NyZWF0ZSBwcm9qZWN0fWVsc2V7XHJcbi8vcmV0dXJufSBJbnN0ZWFkIG9mIGRvaW5nIGZvcihwcm9qZWN0cy5sZW5ndGgpIGFkZCBhbiBpZiBzdGF0bWVudCBhZnRlciB0aGF0IHNraXBzIHRoZSBvbmVzIHdpdGggXCJcIiBhcyB0aGUgdGl0bGUuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=