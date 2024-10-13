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
/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-to-do */ "./src/create-to-do.js");



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
                    (0,_create_to_do__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_js__WEBPACK_IMPORTED_MODULE_0__.taskList[j], i)
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
        for (let i = 0; i < listOfToDos.length; i++) { taskList.push(listOfToDos[i]) } //adds to-do list to taskList
        document.getElementById('content').innerHTML = "" //gets rid of the default text
        console.log(listOfToDos)
        console.log(taskList)
        taskList.forEach(toDo => {
            ;(0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(toDo, taskList.indexOf(toDo))
        })
    } else{
        console.log('no to-dos')
    }  
}

    //project part
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
    for(let i = 0; i < taskList.length; i++){  
        console.log(taskList[i].dueDate)
        console.log(taskList[i])
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
    for(let i = 0; i < taskList.length; i++){
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
    for(let i = 0; i < taskList.length; i++){  
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
    for(let i = 0; i < taskList.length; i++){
        console.log(taskList[i].priority)
        if(taskList[i].priority == 'Yes'){
            (0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[i], i)
        }
    }
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskList);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFO0FBQ3JDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsbUJBQW1CLElBQUksK0NBQVEsU0FBUyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQ0FBUTtBQUNuQyx5Q0FBeUM7QUFDekM7QUFDQSxrREFBa0Q7QUFDbEQsK0RBQStEO0FBQy9EO0FBQ0EsMkJBQTJCLElBQUksK0NBQVEsU0FBUyxRQUFRO0FBQ3hELG1CQUFtQiwrQ0FBUTtBQUMzQixvQkFBb0IseURBQVUsQ0FBQywrQ0FBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsNERBQTRELEVBQUU7QUFDOUQseUZBQXlGO0FBQ3pGLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFRO0FBQ2hDO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFRO0FBQzVCLHdEQUF3RCxFQUFFO0FBQzFELHlEQUF5RCxFQUFFO0FBQzNELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELEVBQUU7QUFDM0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFXO0FBQ2YsSUFBSSwrQ0FBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVc7QUFDbkIsS0FBSztBQUNMO0FBQ0EscURBQXFELCtDQUFRO0FBQzdEO0FBQ0EsSUFBSSwyQ0FBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ25IbUI7QUFDSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsVUFBVTtBQUN0RTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxpQkFBaUI7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsMk1BQTJNO0FBQzNNO0FBQ0EsY0FBYyw4REFBOEQ7QUFDNUU7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLFVBQVU7QUFDVixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0Esb0pBQW9KO0FBQ3BKO0FBQ0E7QUFDQSxrRUFBa0UscUJBQXFCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwR0FBMEc7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MsMEJBQTBCO0FBQzFCLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsWUFBWTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFRO0FBQzVCLHVEQUF1RCxFQUFFO0FBQ3pELHdEQUF3RCxFQUFFO0FBQzFELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsZ0NBQWdDLEVBQUUsYUFBYTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TmM7QUFDSztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLENBQUM7QUFDRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFhO0FBQ2pCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBLFFBQVEsMERBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCx1QkFBdUI7QUFDdkIsbURBQW1EO0FBQ25ELHdCQUF3Qix3QkFBd0IsT0FBTyxnQ0FBZ0M7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFVO0FBQ3RCLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksNERBQWE7QUFDakIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLFlBQVksMERBQVU7QUFDdEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBLFFBQVEsMERBQVU7QUFDbEI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsWUFBWSx5REFBVTtBQUN0QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0EsWUFBWSx5REFBVTtBQUN0QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsUUFBUTtBQUMwQzs7Ozs7OztVQzVPakU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1wcm9qLy4vc3JjL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLXByb2ovLi9zcmMvY3JlYXRlLXRvLWRvLmpzIiwid2VicGFjazovL3RvLWRvLXByb2ovLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0cywgcHJvak5hbWUsIHRhc2tQcm9qZWN0LCBmb3JtLCB0YXNrTGlzdCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCBjcmVhdGVUb0RvIGZyb20gXCIuL2NyZWF0ZS10by1kb1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHsgXHJcbiAgICAgLy9hZGQgaW5wdXQgdG8gbGlzdFxyXG4gICAgcHJvamVjdHNUYWIuaW5uZXJIVE1MID0gXCJcIjsgLy9yZXNldHMgc2lkZWJhciBjb250ZW50XHJcbiAgICBcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspeyAvL2FkZHMgYWxsIGN1cnJlbnQgcHJvamVjdHMgaW4gYXJyYXkgdG8gc2lkZWJhclxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwcm9qTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpIFxyXG4gICAgICAgIHByb2pMaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FjdGl2ZS10YWInKVxyXG4gICAgICAgIHByb2pMaS5pbm5lclRleHQgPSBwcm9qZWN0c1tpXSBcclxuICAgICAgICBwcm9qTGkuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpOyAvL0hvdyBJIHdpbGwgYmUgYWJsZSB0byBjaG9vc2UgYW5kIGVkaXQgc3BlY2lmaWMgcHJvamVjdHNcclxuXHJcbiAgICAgICAgcHJvakxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAgLy9jbGlja2luZyBvbiBwcm9qTGkgd2lsbCBzaG93IGFsbCB0YXNrcyB0aGF0IGFyZSByZWxhdGVkIHdpdGggdGhhdCBwcm9qZWN0XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjsgLy9jbGVhcnMgY29udGVudFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRhc2tMaXN0Lmxlbmd0aDsgaisrKXsgICAvL2xvb3BzIHRocm91Z2ggdGFza0xpc3QgdG8gZmluZCB0YXNrcyB0aGF0IGFyZSByZWxhdGVkIHRvIHRoZSBjbGlja2VkIHByb2pMaVxyXG4gICAgICAgICAgICAgICAgaWYodGFza0xpc3Rbal0ucHJvalBhcmVudCA9PSBwcm9qTGkuaW5uZXJUZXh0KXtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2pdLCBpKVxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyAvLzMgZG90cyBhdCBlbmQgb2YgcHJvamVjdCBkaXZcclxuICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uLzMtZG90cy5wbmcnKVxyXG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpIC8vbWFraW5nIHN1cmUgZWFjaCBtZW51IGJ1dHRvbiBjb3JyZXNwb25kcyB0byBpdHMgbWF0Y2hpbmcgcHJvamVjdFxyXG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhZGpMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2luZGV4PVwiJHtpfVwiXWApLy9hZGpMaSBpcyB0aGUgY29ycmVzcG9uZGluZyBwcm9qZWN0XHJcbiAgICAgICAgICAgIGlmKCFhZGpMaS5uZXh0RWxlbWVudFNpYmxpbmcgfHwgYWRqTGkubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRElWXCIpeyAvL2NoZWNrcyBpZiBwcm9qTGkgaGFzIGRpdiBzaWJsaW5nIGFscmVhZHlcclxuICAgICAgICAgICAgICAgIGxldCBtZW51QnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOy8vIGFsbCBidXR0b25zIHdpbGwgYmUgc3RvcmVkIGluIGEgc2VwZXJhdGUgZGl2XHJcbiAgICAgICAgICAgICAgICBtZW51QnRucy5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2luc2lkZSBtZW51IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIkVkaXRcIjtcclxuICAgICAgICAgICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRQcm9qRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FuY2VsTmFtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiVXBkYXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxOYW1lQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2J1dHRvbiBpbnNpZGUgb2YgRWRpdCBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxOYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaW5zaWRlIG9mIGVkaXQgYnV0dG9uLCB3aWxsIGNoYW5nZSB0aGUgcHJvamVjdHMgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlVwZGF0ZWQgbmFtZVwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0uYXBwZW5kQ2hpbGQodXBkYXRlQnRuKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsTmFtZUJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFwcGVuZENoaWxkKHVwZGF0ZU5hbWVJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXSA9IHVwZGF0ZU5hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRqTGkudGV4dENvbnRlbnQgPSB1cGRhdGVOYW1lSW5wdXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvakxpLmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBtZW51QnRucy5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzVGFiLmluc2VydEJlZm9yZShlZGl0UHJvakZvcm0sIGFkakxpLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9pbnNpZGUgb2YgbWVudSBidXR0b25cclxuICAgICAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmlubmVyVGV4dCA9ICdEZWxldGUnO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2luZGV4PVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2luZGV4PVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vaW5zaWRlIG9mIG1lbnUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FuY2VsYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxidXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCdcclxuICAgICAgICAgICAgICAgIGNhbmNlbGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltpbmRleD1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2J1dHRvbnMgcHV0IGluc2lkZSBvZiBkaXZcclxuICAgICAgICAgICAgICAgIG1lbnVCdG5zLmFwcGVuZENoaWxkKGVkaXRCdG4pXHJcbiAgICAgICAgICAgICAgICBtZW51QnRucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXHJcbiAgICAgICAgICAgICAgICBtZW51QnRucy5hcHBlbmRDaGlsZChjYW5jZWxidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2J1dHRvbiBkaXYgaXMgYWRkZWQgYmVmb3JlIGN1cnJlbnQgcHJvamVjdHMgbmV4dCBzaWJsaW5nIGllOiByaWdodCBhZnRlciBpdCAgIFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNUYWIuaW5zZXJ0QmVmb3JlKG1lbnVCdG5zLCBhZGpMaS5uZXh0U2libGluZykgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBwcm9qTGkuYXBwZW5kQ2hpbGQobWVudSlcclxuICAgICAgICBwcm9qZWN0c1RhYi5hcHBlbmRDaGlsZChwcm9qTGkpXHJcbiAgICB9XHJcblxyXG4gICAgLy9hZGRpbmcgcHJvamVjdCBvcHRpb25zIHRvIHRoZSB0by1kbyBmb3JtKGRyb3Bkb3duIG1lbnUpXHJcbiAgICB0YXNrUHJvamVjdC5pbm5lckhUTUwgPSAnPG9wdGlvbj48L29wdGlvbj4nO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udGV4dCA9IHByb2plY3Q7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcclxuICAgICAgICB0YXNrUHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSlcclxuXHJcbiAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTsgXHJcblxyXG4gICAgZm9ybS5yZW1vdmUoKVxyXG59XHJcblxyXG4gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0IiwiaW1wb3J0IHRhc2tMaXN0IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVRvRG8gPSAobmV3VG9EbywgaSkgPT4geyBcclxuICAgIC8vaSB3YXMga2VwdCBhcyBhIG4gYXJndW1lbnQgdG8gdXNlIGFzIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIGVhY2ggdG8tZG8uXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSAvL2NvbnRhaW5lciBkaXYgZm9yIHRvLWRvXHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29kZScsIGkpIFxyXG4gICAgICAgIGxldCBjb250YWluZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb250YWluZXJMZWZ0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgZ2FwOiA1cHg7IG1hcmdpbi1sZWZ0OiA1cHgnKVxyXG4gICAgICAgIGxldCBjb250YWluZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyJylcclxuICAgIFxyXG4gICAgICAgIC8vVE8tRE8gQ0hFQ0tCT1hcclxuICAgICAgICBsZXQgdG9Eb0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCdzcmMnLCAnLi91bmNoZWNrZWQucG5nJylcclxuICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXgtaGVpZ2h0OiAyMHB4OyBtYXgtd2lkdGg6IDIwcHg7IGFsaWduLXNlbGY6IGNlbnRlcicpXHJcbiAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKVxyXG4gICAgICAgIHRvRG9DaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodG9Eb0NoZWNrLmdldEF0dHJpYnV0ZSgnc3JjJykgPT0gJy4vdW5jaGVja2VkLnBuZycpe1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vY2hlY2tlZC5wbmcnKVxyXG4gICAgICAgICAgICAgICAgbmV3VG9Eby5zdGF0dXMgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvRG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL3VuY2hlY2tlZC5wbmcnKVxyXG4gICAgICAgICAgICAgICAgbmV3VG9Eby5zdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvL1RPLURPIE5BTUUgRUxFTUVOVFxyXG4gICAgICAgIGxldCB0b0RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IG5ld1RvRG8ubmFtZTsgXHJcblxyXG4gICAgICAgIC8vVE8tRE8gTk9URVMgRUxFTUVOVFxyXG4gICAgICAgIGxldCB0b0RvTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgICAgICAgdG9Eb05vdGVzLnRleHRDb250ZW50ID0gbmV3VG9Eby5ub3RlcztcclxuICAgICAgICB0b0RvTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+eyAvL29uIGNsaWNraW5nIHRoZSBwIGVsZW1lbnQsIHRoZSBub3RlcyBzZWN0aW9uIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdG8tZG9cclxuICAgICAgICAgICAgaWYoIWNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcgfHwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIlRFWFRBUkVBXCIgJiYgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkRJVlwiICYmIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJGT1JNXCIpeyAvL2NoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBub3RlcyBzZWN0aW9uLCBubyBkdXBsaWNhdGVzXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmluc2VydEJlZm9yZSh0b0RvTm90ZXMsIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIil7IC8vaWYgdGhlcmUgaXMgYWxyZWFkeSBhIG5vdGVzIHNlY3Rpb24sIHJlbW92ZSBpdFxyXG4gICAgICAgICAgICAgICAgdG9Eb05vdGVzLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy9UTy1ETyBEQVRFIEVMRU1FTlRcclxuICAgICAgICBsZXQgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0b0RvRGF0ZS50ZXh0Q29udGVudCA9IG5ld1RvRG8uZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgLy9CT1JERVIgRk9SIFRPLURPLCBDSEFOR0VTIEJBU0VEIE9GRiBQUklPUklUWVxyXG4gICAgICAgIGxldCBib3JkZXJTdHlsZSA9ICdib3JkZXItbGVmdDogNXB4IHNvbGlkJztcclxuICAgICAgICBpZiAobmV3VG9Eby5wcmlvcml0eSA9PSAnWWVzJykge1xyXG4gICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyByZWQ7JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyBibGFjazsnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8zIERPVFMgQVQgRU5EIE9GIFRPLURPXHJcbiAgICAgICAgbGV0IHRvRG9NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgdG9Eb01lbnUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vMy1kb3RzLnBuZycpIFxyXG4gICAgICAgIHRvRG9NZW51LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWF4LWhlaWdodDogMjBweDsgbWF4LXdpZHRoOiAyMHB4JylcclxuICAgICAgICB0b0RvTWVudS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSlcclxuICAgICAgICB0b0RvTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYoIWNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcgfHwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkZPUk1cIiAmJiBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRElWXCIpeyAvL0NIRUNLUyBGT1IgRFVQTElDQVRFU1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9CdG5zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgLy9kaXYgd2hpY2ggd2lsbCBjb250YWluIGFsbCAzIG1lbnUgYnRucyBmb3IgdG8tZG9cclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LnNldEF0dHJpYnV0ZSgnY29kZScsIGkpXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZW5kOycpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9VUERBVEUgVE8tRE8gQlVUVE9OXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9Eb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSBcclxuICAgICAgICAgICAgICAgIHRvRG9FZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCJcclxuICAgICAgICAgICAgICAgIHRvRG9FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJGT1JNXCIpeyAvL2NoZWNrcyB0byBzZWUgaWYgdGhlIG5leHQgZWxlbWVudCBhZnRlciBjb250YWluZXIgaXMgYSBmb3JtLiBpZiBub3QgaXQgYXBwZW5kcyB0aGUgdG8tZG8gdXBkYXRlIGZvcm0gdG8gdGhlIGJvdHRvbSBvZiB0aGUgdG8tZG8gY29udGVudCBjb250YWluZXIgZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpLy9mb3JtIHRoYXQgd2lsbCB0YWtlIGlucHV0IGFuZCByZXBsYWNlIHRvLWRvIGl0ZW0gaW5mb1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybU5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZXQgTmV3IFRhc2sgTmFtZSBIZXJlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJvamVjdC50ZXh0Q29udGVudCA9ICdJcyB0aGlzIHBhcnQgb2YgYSBwcm9qZWN0PydcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByb2plY3QuaW5uZXJIVE1MID0gJzxvcHRpb24+PC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcmlvcml0eS5pbm5lckhUTUwgPSAnPG9wdGlvbj5Qcmlvcml0eTwvb3B0aW9uPiA8b3B0aW9uPk5vdCBhIFByaW9yaXR5PC9vcHRpb24+J1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1EYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybU5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtTm90ZXMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZXQgTmV3IFRhc2sgTm90ZXMgSGVyZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtU3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybUNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9UTy1ETyBVUERBVEUgRk9STVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybURhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Qcmlvcml0eSlcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVByb2plY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Ob3RlcylcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVN1Ym1pdClcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybUNhbmNlbClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9DSEFOR0lORyBPQkpFQ1QgVkFMVUVTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ubmFtZSA9IHRvRG9Gb3JtTmFtZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLmR1ZURhdGUgPSB0b0RvRm9ybURhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9Eb0Zvcm1Qcmlvcml0eS52YWx1ZSA9PSBcIk5vdCBhIFByaW9yaXR5XCIpeyAvL2NoZWNrcyBpZiB1c2VyIHNlbGVjdGVkIE5vdCBwcmlvcml0eSBvciBwcmlvcml0eSBhbmQgdXNlcyBpZiBzdGF0bWVudCB0byBzZXQgcHJpb2lydHkgc3RhdHVzIHRvIHRydWUgb3IgZmFsc2VseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5wcmlvcml0eSA9ICdObyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ucHJpb3JpdHkgPSAnWWVzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLnByb2pQYXJlbnQgPSB0b0RvRm9ybVByb2plY3QudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5ub3RlcyA9IHRvRG9Gb3JtTm90ZXMudmFsdWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVVNJTkcgTkVXIE9CSkVDVCBWQUxVRVMgVE8gQ0hBTkdFIERPTSBWQUxVRVNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBuZXdUb0RvLmR1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9OYW1lLnRleHRDb250ZW50ID0gbmV3VG9Eby5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9yZGVyU3R5bGUgPSAnYm9yZGVyOiA1cHggc29saWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VG9Eby5wcmlvcml0eSA9PSAnWWVzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgcmVkOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyBibGFjazsnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRvRG9Gb3JtTm90ZXMudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb05vdGVzLnRleHRDb250ZW50ID0gbmV3VG9Eby5ub3RlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYCR7Ym9yZGVyU3R5bGV9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAvLzxsaT4gYm9yZGVyIHRvIGluZGljYXRlIHByaW9yaXR5IGxldmVsLiBXaWxsIGRvIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9ieSBjaGVja2luZyBvYmplY3RzIHByaW9yaXR5IHN0YXR1cyBhbmQgYWRkaW5nIGNzcyAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmluc2VydEJlZm9yZShlZGl0Rm9ybSwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZpbmlzaGVkIHdpbGwgYmUgYSBzcGVjaWFsIGNhc2UgYmVjYXVzZSBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIHJlZmxlY3RlZFxyXG5cclxuICAgICAgICAgICAgICAgIC8vREVMRVRFIEJVVFRPTlxyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSAvL2RlbGV0ZSBidXR0b25cclxuICAgICAgICAgICAgICAgIHRvRG9EZWxldGUudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdC5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtjb2RlPVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2NvZGU9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9DQU5DRUwgQlVUVE9OXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9Eb0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICB0b0RvQ2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcclxuICAgICAgICAgICAgICAgIHRvRG9DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8zIERPVFMgTUVOVVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuYXBwZW5kQ2hpbGQodG9Eb0VkaXQpXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRGVsZXRlKVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuYXBwZW5kQ2hpbGQodG9Eb0NhbmNlbClcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5zZXJ0QmVmb3JlKHRvRG9CdG5zRGl2LCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZCh0b0RvQ2hlY2spO1xyXG4gICAgICAgIGNvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQodG9Eb05hbWUpO1xyXG5cclxuICAgICAgICBjb250YWluZXJSaWdodC5hcHBlbmRDaGlsZCh0b0RvRGF0ZSlcclxuICAgICAgICBjb250YWluZXJSaWdodC5hcHBlbmRDaGlsZCh0b0RvTWVudSk7XHJcblxyXG4gICAgICAgIC8vdGhpcyBibG9jayBpcyBmb3IgbWFpbnRhaW5pbmcgdGhlIHRvLWRvJ3MgY3Jvc3NlZCBvdXQgaWYgdGhleSBhcmUgYWxyZWFkeSBmaW5pc2hlZCwgd2hlbiBhZGRpbmcgYSBuZXdcclxuICAgICAgICAvL3RvLWRvLlxyXG4gICAgICAgIGlmKG5ld1RvRG8uc3RhdHVzID09IHRydWUpe1xyXG4gICAgICAgICAgICB0b0RvQ2hlY2suY2hlY2tlZCA9IHRydWVcclxuICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3VG9Eby5zdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyTGVmdCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lclJpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAke2JvcmRlclN0eWxlfSBgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjb250YWluZXIpIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb0RvO1xyXG4iLCJpbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9jcmVhdGUtdG8tZG9cIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcclxuXHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IHRhc2tMaXN0ID0gW107XHJcbmxldCBwcm9qZWN0c1RhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c1RhYicpIC8vc2lkZWJhclxyXG5sZXQgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpIFxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0b0RvKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qUGFyZW50LCBzdGF0dXMsIG5vdGVzKXsgLy90by1kbyBvYmplY3RcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIHByb2pQYXJlbnQgLCBcclxuICAgICAgICBzdGF0dXMsIFxyXG4gICAgICAgIG5vdGVzXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAgICAgICAgIC8vcHJvamVjdCBmb3JtXHJcbmxldCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7IC8vcHJvamVjdCBuYW1lIGlucHV0XHJcbnByb2pOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lJylcclxuXHJcbmxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSAvL3N1Ym1pdHMgbmV3IHByb2plY3RcclxuYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcblxyXG5sZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vY2FuY2VscyBuZXcgcHJvamVjdFxyXG5jYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXHJcbmNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgZm9ybS5yZW1vdmUoKTtcclxufSlcclxuXHJcbmxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyAgLy9jcmVhdGVzIHByb2plY3QgZm9ybVxyXG5mb3JtLmFwcGVuZENoaWxkKHByb2pOYW1lKTtcclxuZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG5mb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcblxyXG5sZXQgcHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnRuJykgLy9hZGQgcHJvamVjdCBidG4gKGluc2lkZSBodG1sKVxyXG5wcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvL3doZW4gYnRuIGlzIGNsaWNrZWQsIHByb2plY3QgZm9ybSBhcHBlYXJzXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGZvcm0pO1xyXG59KVxyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHsvL3N1Ym1pdCBwcm9qZWN0IGJ1dHRvblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcclxuICAgIHByb2plY3RzLnB1c2gocHJvak5hbWUudmFsdWUpO1xyXG4gICAgY3JlYXRlUHJvamVjdCgpXHJcbn0pXHJcblxyXG4gICAgICAgICAgICAvL3RvLWRvIGZvcm1cclxubGV0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpICAvL3RvLWRvIG5hbWUgaW5wdXRcclxudGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUYXNrIE5hbWVcIik7XHJcbnRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbmxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSAvL3RvLWRvIHByaW9yaXR5IGNoZWNrYm94XHJcbnRhc2tQcmlvcml0eS5pbm5lckhUTUwgPSAnPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlByaW9yaXR5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm90IEEgUHJpb3JpdHk8L29wdGlvbj4nXHJcbnRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWNoZWNrJylcclxudGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcclxuXHJcbmxldCB0YXNrUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vbGFiZWwgZm9yIHByaW9yaXR5IGNoZWNrYm94XHJcbnRhc2tQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LWNoZWNrJylcclxudGFza1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIklzIHRoaXMgYSBwcmlvcml0eSB0YXNrP1wiXHJcblxyXG5sZXQgdG9Eb0Zvcm1Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnRvRG9Gb3JtUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5TGFiZWwpXHJcbnRvRG9Gb3JtUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KVxyXG5cclxuXHJcbmxldCB0YXNrRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgLy90by1kbyBjYWxlbmRlciBzZWxlY3RvclxyXG50YXNrRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXHJcbnRhc2tEdWVkYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcclxuXHJcbmxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAvL2xhYmVsIGZvciBjYWxlbmRlclxyXG5kdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIldoZW4gaXMgdGhpcyBkdWU/XCJcclxuXHJcbmxldCB0b0RvRm9ybUR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG50b0RvRm9ybUR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKVxyXG50b0RvRm9ybUR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZWRhdGUpXHJcblxyXG5sZXQgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSAvL3RvLWRvIHByb2plY3Qgc2VsZWN0b3JcclxubGV0IHRhc2tQcm9qZWN0bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG50YXNrUHJvamVjdGxhYmVsLnRleHRDb250ZW50ID0gXCJEb2VzIHRoaXMgYmVsb25nIGluIGEgcHJvamVjdD9cIlxyXG5cclxubGV0IHRvRG9Gb3JtUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnRvRG9Gb3JtUHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdGxhYmVsKVxyXG50b0RvRm9ybVByb2plY3REaXYuYXBwZW5kQ2hpbGQodGFza1Byb2plY3QpXHJcblxyXG5sZXQgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvL3N1Ym1pdCB0by1kbyBidG5cclxudGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbnRhc2tTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBUYXNrXCJcclxuXHJcbmxldCB0YXNrQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vdG8tZG8gY2FuY2VsXHJcbnRhc2tDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcbnRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0YXNrRm9ybS5yZW1vdmUoKVxyXG59KVxyXG5cclxubGV0IHRvRG9Gb3JtU3VibWl0Q2FuY2VsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxudG9Eb0Zvcm1TdWJtaXRDYW5jZWxEaXYuYXBwZW5kQ2hpbGQodGFza1N1Ym1pdClcclxudG9Eb0Zvcm1TdWJtaXRDYW5jZWxEaXYuYXBwZW5kQ2hpbGQodGFza0NhbmNlbClcclxuXHJcbmxldCB0YXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIC8vdG9kbyBkZXNjcmlwdGlvbiBhcmVhXHJcbnRhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXHJcbnRhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1B1dCB5b3VyIGRlc2NyaXB0aW9uIGhlcmUuJylcclxuXHJcblxyXG5sZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykgLy90by1kbyBmb3JtIGlzIGFzc2VtYmxlZFxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVByaW9yaXR5RGl2KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybUR1ZURhdGVEaXYpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtUHJvamVjdERpdilcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza05vdGVzKVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVN1Ym1pdENhbmNlbERpdilcclxuXHJcblxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvL3B1dHMgdG8tZG8gZm9ybSBpbiB0aGUgRE9NXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKHRhc2tGb3JtKVxyXG4gICAgdGFza0Zvcm0uc3R5bGUuanVzdGlmeVNlbGYgPSAnY2VudGVyJ1xyXG59KVxyXG5cclxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoZXZlbnQpPT4geyAvL3N1Ym1pdCB0by1kbyBcclxuICAgIGxldCBzdGF0dXMgPSBcIlBlbmRpbmdcIlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1RvRG8gPSB0b0RvKHRhc2tOYW1lSW5wdXQudmFsdWUsIHRhc2tEdWVkYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUsIHRhc2tQcm9qZWN0LnZhbHVlLCBzdGF0dXMsIHRhc2tOb3Rlcy52YWx1ZSlcclxuICAgIHRhc2tMaXN0LnB1c2gobmV3VG9Ebyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICAvL3VzZSBsaXN0IHRvIGNyZWF0ZSBET00gdG8tZG8gZWxlbWVudHNcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpXHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3RbaV0pXHJcbiAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpXHJcblxyXG5cclxuICAgIHRhc2tGb3JtLnJlbW92ZSgpXHJcbn0pXHJcblxyXG5cclxuLy93aGVuIHBhZ2UgbG9hZHMsIHRvLWRvcyBhcmUgbG9hZGVkXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7IFxyXG4gICAgLy90by1kbyBwYXJ0XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgbGV0IHN0b3JlZFRvRG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0Jyk7IC8vcmV0cmlldmVzIHRvLWRvIGxpc3QgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgICBpZiAoc3RvcmVkVG9Eb3MpIHsgLy9jaGVja3MgaWYgdG8tZG8gbGlzdCBpcyBub3QgZW1wdHlcclxuICAgICAgICBsZXQgbGlzdE9mVG9Eb3MgPSBKU09OLnBhcnNlKHN0b3JlZFRvRG9zKTsgLy9wYXJzZXMgdG8tZG8gbGlzdFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdE9mVG9Eb3MubGVuZ3RoOyBpKyspIHsgdGFza0xpc3QucHVzaChsaXN0T2ZUb0Rvc1tpXSkgfSAvL2FkZHMgdG8tZG8gbGlzdCB0byB0YXNrTGlzdFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIiAvL2dldHMgcmlkIG9mIHRoZSBkZWZhdWx0IHRleHRcclxuICAgICAgICBjb25zb2xlLmxvZyhsaXN0T2ZUb0RvcylcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdClcclxuICAgICAgICB0YXNrTGlzdC5mb3JFYWNoKHRvRG8gPT4ge1xyXG4gICAgICAgICAgICBjcmVhdGVUb0RvKHRvRG8sIHRhc2tMaXN0LmluZGV4T2YodG9EbykpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZXtcclxuICAgICAgICBjb25zb2xlLmxvZygnbm8gdG8tZG9zJylcclxuICAgIH0gIFxyXG59XHJcblxyXG4gICAgLy9wcm9qZWN0IHBhcnRcclxuICAgIGxldCBzdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpOyAvL3JldHJpZXZlcyBwcm9qZWN0IGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgaWYgKHN0b3JlZFByb2plY3RzKSB7XHJcbiAgICBsZXQgbGlzdE9mUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzKTsgLy9wYXJzZXMgcHJvamVjdFxyXG4gICAgbGlzdE9mUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpIC8vcHV0dGluZyBsb2NhbFN0b3JhZ2UgcHJvamVjdHMgaW50byBwcm9qZWN0cyBhcnJheVxyXG4gICAgfSkgIFxyXG4gICAgY3JlYXRlUHJvamVjdCgpICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHByb2plY3RzJylcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vVG9kYXkgdGFiXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVRhYicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldLmR1ZURhdGUpXHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3RbaV0pXHJcbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gbmV3IERhdGUodGFza0xpc3RbaV0uZHVlRGF0ZSk7XHJcbiAgICAgICAgY29uc3QgdGltZURpZmYgPSBNYXRoLmFicyh0b2RheS5nZXRUaW1lKCkgLSBpbnB1dERhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICBjb25zdCBkYXlJbk1pbGxpc2Vjb25kcyA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgaWYodGltZURpZmYgPD0gZGF5SW5NaWxsaXNlY29uZHMpeyAvL2NoZWNrcyBpZiB0aGUgZGlmZmVyZW5jZSBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gb25lIGRheVxyXG4gICAgICAgICAgICAvL2FwcGVuZCBhbGwgdG8tZG8ncyB3aXRoaW4gIGEgZGF5IHRvIHRoZSBjb250ZW50IGRpdlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSlcclxuICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG4gICAgICAgIC8vYWxsIHRhYlxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsVGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vYXBwZW5kIGFsbCB0by1kbydzIHdpdGhpbiBhIGRheSB0byB0aGUgY29udGVudCBkaXZcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSlcclxuICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2ldLCBpKVxyXG4gICAgfVxyXG59KVxyXG5cclxuICAgICAgICAvL3RoaXMgd2VlayB0YWJcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXNXZWVrVGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFswXSlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7ICBcclxuICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBuZXcgRGF0ZSh0YXNrTGlzdFtpXS5kdWVEYXRlKTtcclxuICAgICAgICBjb25zdCB0aW1lRGlmZiA9IE1hdGguYWJzKHRvZGF5LmdldFRpbWUoKSAtIGlucHV0RGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGNvbnN0IHdlZWtJbk1pbGxpc2Vjb25kcyA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgICAgIGlmKHRpbWVEaWZmIDw9IHdlZWtJbk1pbGxpc2Vjb25kcyl7IC8vY2hlY2tzIGlmIHRoZSBkaWZmZXJlbmNlIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBvbmUgd2VlayAgICAgXHJcbiAgICAgICAgICAgIGNyZWF0ZVRvRG8odGFza0xpc3RbaV0sIGkpIC8vYXBwZW5kIGFsbCB0by1kbydzIHdpdGhpbiAgYSB3ZWVrIHRvIHRoZSBjb250ZW50IGRpdlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbiAgICAgICAgLy9wcmlvcml0eSB0YWJcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5VGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldLnByaW9yaXR5KVxyXG4gICAgICAgIGlmKHRhc2tMaXN0W2ldLnByaW9yaXR5ID09ICdZZXMnKXtcclxuICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrTGlzdFxyXG5leHBvcnQge3Byb2plY3RzLCBhZGRUYXNrLCBwcm9qTmFtZSwgdGFza1Byb2plY3QsIGZvcm0sIHRhc2tMaXN0fVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9