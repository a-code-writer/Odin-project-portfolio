/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
                console.log('adding notes')
                document.getElementById('content').insertBefore(toDoNotes, container.nextElementSibling)
            } else if(container.nextElementSibling.tagName === "TEXTAREA"){ //if there is already a notes section, remove it
                console.log('removing notes')
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do */ "./src/create-to-do.js");



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
    projects.push(projName.value); //add input to list
    projectsTab.innerHTML = ""; //resets sidebar content
    

    for(let i = 0; i < projects.length; i++){ //adds all current projects in array to sidebar
        
        let projLi = document.createElement('li') 
        projLi.innerText = projects[i] 
        projLi.setAttribute('index', i); //How I will be able to choose and edit specific projects

        projLi.addEventListener('click', () => {  //clicking on projLi will show all tasks that are related with that project
            document.getElementById('content').innerHTML = ""; //clears content
            
            for(let j = 0; j < taskList.length; j++){   //loops through taskList to find tasks that are related to the clicked projLi
                if(taskList[j].projParent == projLi.innerText){
                    (0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[j], i)
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
                        projects[i] = updateNameInput.value;
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
                    projects.splice(i)
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
    taskProject.innerHTML = '<option></option>';
    projects.forEach(project => {
        const option = document.createElement('option');
        option.text = project;
        option.value = project;
        taskProject.appendChild(option);
    })

    form.remove()
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
        console.log(taskList[i])
        ;(0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[i], i)
    }

    taskForm.remove()
})


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tcHJvai8uL3NyYy9jcmVhdGUtdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0YXNrTGlzdCBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBjcmVhdGVUb0RvID0gKG5ld1RvRG8sIGkpID0+IHsgXHJcbiAgICAvL2kgd2FzIGtlcHQgYXMgYSBuIGFyZ3VtZW50IHRvIHVzZSBhcyBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIHRvLWRvLlxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykgLy9jb250YWluZXIgZGl2IGZvciB0by1kb1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvZGUnLCBpKSBcclxuICAgICAgICBsZXQgY29udGFpbmVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29udGFpbmVyTGVmdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGdhcDogNXB4OyBtYXJnaW4tbGVmdDogNXB4JylcclxuICAgICAgICBsZXQgY29udGFpbmVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnRhaW5lclJpZ2h0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcicpXHJcbiAgICBcclxuICAgICAgICAvL1RPLURPIENIRUNLQk9YXHJcbiAgICAgICAgbGV0IHRvRG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vdW5jaGVja2VkLnBuZycpXHJcbiAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWF4LWhlaWdodDogMjBweDsgbWF4LXdpZHRoOiAyMHB4OyBhbGlnbi1zZWxmOiBjZW50ZXInKVxyXG4gICAgICAgIHRvRG9DaGVjay5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSlcclxuICAgICAgICB0b0RvQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRvRG9DaGVjay5nZXRBdHRyaWJ1dGUoJ3NyYycpID09ICcuL3VuY2hlY2tlZC5wbmcnKXtcclxuICAgICAgICAgICAgICAgIHRvRG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2NoZWNrZWQucG5nJylcclxuICAgICAgICAgICAgICAgIG5ld1RvRG8uc3RhdHVzID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCdzcmMnLCAnLi91bmNoZWNrZWQucG5nJylcclxuICAgICAgICAgICAgICAgIG5ld1RvRG8uc3RhdHVzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9UTy1ETyBOQU1FIEVMRU1FTlRcclxuICAgICAgICBsZXQgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSBuZXdUb0RvLm5hbWU7IFxyXG5cclxuICAgICAgICAvL1RPLURPIE5PVEVTIEVMRU1FTlRcclxuICAgICAgICBsZXQgdG9Eb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgIHRvRG9Ob3Rlcy50ZXh0Q29udGVudCA9IG5ld1RvRG8ubm90ZXM7XHJcbiAgICAgICAgdG9Eb05hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PnsgLy9vbiBjbGlja2luZyB0aGUgcCBlbGVtZW50LCB0aGUgbm90ZXMgc2VjdGlvbiB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBib3R0b20gb2YgdGhlIHRvLWRvXHJcbiAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJURVhUQVJFQVwiICYmIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJESVZcIiAmJiBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRk9STVwiKXsgLy9jaGVjayBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgbm90ZXMgc2VjdGlvbiwgbm8gZHVwbGljYXRlc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZGluZyBub3RlcycpXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmluc2VydEJlZm9yZSh0b0RvTm90ZXMsIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIil7IC8vaWYgdGhlcmUgaXMgYWxyZWFkeSBhIG5vdGVzIHNlY3Rpb24sIHJlbW92ZSBpdFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nIG5vdGVzJylcclxuICAgICAgICAgICAgICAgIHRvRG9Ob3Rlcy5yZW1vdmUoKVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vVE8tRE8gREFURSBFTEVNRU5UXHJcbiAgICAgICAgbGV0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBuZXdUb0RvLmR1ZURhdGU7XHJcblxyXG4gICAgICAgIC8vQk9SREVSIEZPUiBUTy1ETywgQ0hBTkdFUyBCQVNFRCBPRkYgUFJJT1JJVFlcclxuICAgICAgICBsZXQgYm9yZGVyU3R5bGUgPSAnYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCc7XHJcbiAgICAgICAgaWYgKG5ld1RvRG8ucHJpb3JpdHkgPT0gJ1llcycpIHtcclxuICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgcmVkOyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgYmxhY2s7JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vMyBET1RTIEFUIEVORCBPRiBUTy1ET1xyXG4gICAgICAgIGxldCB0b0RvTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHRvRG9NZW51LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uLzMtZG90cy5wbmcnKSBcclxuICAgICAgICB0b0RvTWVudS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21heC1oZWlnaHQ6IDIwcHg7IG1heC13aWR0aDogMjBweCcpXHJcbiAgICAgICAgdG9Eb01lbnUuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpXHJcbiAgICAgICAgdG9Eb01lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJGT1JNXCIgJiYgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkRJVlwiKXsgLy9DSEVDS1MgRk9SIERVUExJQ0FURVNcclxuICAgICAgICAgICAgICAgIGxldCB0b0RvQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vZGl2IHdoaWNoIHdpbGwgY29udGFpbiBhbGwgMyBtZW51IGJ0bnMgZm9yIHRvLWRvXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NvZGUnLCBpKVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDsnKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vVVBEQVRFIFRPLURPIEJVVFRPTlxyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgXHJcbiAgICAgICAgICAgICAgICB0b0RvRWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiXHJcbiAgICAgICAgICAgICAgICB0b0RvRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyB8fCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRk9STVwiKXsgLy9jaGVja3MgdG8gc2VlIGlmIHRoZSBuZXh0IGVsZW1lbnQgYWZ0ZXIgY29udGFpbmVyIGlzIGEgZm9ybS4gaWYgbm90IGl0IGFwcGVuZHMgdGhlIHRvLWRvIHVwZGF0ZSBmb3JtIHRvIHRoZSBib3R0b20gb2YgdGhlIHRvLWRvIGNvbnRlbnQgY29udGFpbmVyIGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKS8vZm9ybSB0aGF0IHdpbGwgdGFrZSBpbnB1dCBhbmQgcmVwbGFjZSB0by1kbyBpdGVtIGluZm9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1OYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2V0IE5ldyBUYXNrIE5hbWUgSGVyZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByb2plY3QudGV4dENvbnRlbnQgPSAnSXMgdGhpcyBwYXJ0IG9mIGEgcHJvamVjdD8nXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcm9qZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uPjwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxvcHRpb24+UHJpb3JpdHk8L29wdGlvbj4gPG9wdGlvbj5Ob3QgYSBQcmlvcml0eTwvb3B0aW9uPidcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybU5vdGVzLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2V0IE5ldyBUYXNrIE5vdGVzIEhlcmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybUNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vVE8tRE8gVVBEQVRFIEZPUk1cclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybU5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1EYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtUHJpb3JpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Qcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtTm90ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1TdWJtaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1DYW5jZWwpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ0hBTkdJTkcgT0JKRUNUIFZBTFVFU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLm5hbWUgPSB0b0RvRm9ybU5hbWUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5kdWVEYXRlID0gdG9Eb0Zvcm1EYXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRvRG9Gb3JtUHJpb3JpdHkudmFsdWUgPT0gXCJOb3QgYSBQcmlvcml0eVwiKXsgLy9jaGVja3MgaWYgdXNlciBzZWxlY3RlZCBOb3QgcHJpb3JpdHkgb3IgcHJpb3JpdHkgYW5kIHVzZXMgaWYgc3RhdG1lbnQgdG8gc2V0IHByaW9pcnR5IHN0YXR1cyB0byB0cnVlIG9yIGZhbHNlbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ucHJpb3JpdHkgPSAnTm8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLnByaW9yaXR5ID0gJ1llcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5wcm9qUGFyZW50ID0gdG9Eb0Zvcm1Qcm9qZWN0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ubm90ZXMgPSB0b0RvRm9ybU5vdGVzLnZhbHVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1VTSU5HIE5FVyBPQkpFQ1QgVkFMVUVTIFRPIENIQU5HRSBET00gVkFMVUVTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gbmV3VG9Eby5kdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IG5ld1RvRG8ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvcmRlclN0eWxlID0gJ2JvcmRlcjogNXB4IHNvbGlkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1RvRG8ucHJpb3JpdHkgPT0gJ1llcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZSArPSAnIHJlZDsnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgYmxhY2s7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0b0RvRm9ybU5vdGVzLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9Ob3Rlcy50ZXh0Q29udGVudCA9IG5ld1RvRG8ubm90ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAke2JvcmRlclN0eWxlfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy88bGk+IGJvcmRlciB0byBpbmRpY2F0ZSBwcmlvcml0eSBsZXZlbC4gV2lsbCBkbyB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYnkgY2hlY2tpbmcgb2JqZWN0cyBwcmlvcml0eSBzdGF0dXMgYW5kIGFkZGluZyBjc3MgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0ucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbnNlcnRCZWZvcmUoZWRpdEZvcm0sIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9maW5pc2hlZCB3aWxsIGJlIGEgc3BlY2lhbCBjYXNlIGJlY2F1c2UgaXQgZG9lcyBub3QgbmVlZCB0byBiZSByZWZsZWN0ZWRcclxuXHJcbiAgICAgICAgICAgICAgICAvL0RFTEVURSBCVVRUT05cclxuICAgICAgICAgICAgICAgIGxldCB0b0RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgLy9kZWxldGUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0b0RvRGVsZXRlLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICAgICAgICAgICAgICAgIHRvRG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpc3Quc3BsaWNlKGksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbY29kZT1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltjb2RlPVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vQ0FOQ0VMIEJVVFRPTlxyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgdG9Eb0NhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnXHJcbiAgICAgICAgICAgICAgICB0b0RvQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vMyBET1RTIE1FTlVcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9FZGl0KVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuYXBwZW5kQ2hpbGQodG9Eb0RlbGV0ZSlcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9DYW5jZWwpXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmluc2VydEJlZm9yZSh0b0RvQnRuc0RpdiwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQodG9Eb0NoZWNrKTtcclxuICAgICAgICBjb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKHRvRG9OYW1lKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQodG9Eb0RhdGUpXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQodG9Eb01lbnUpO1xyXG5cclxuICAgICAgICAvL3RoaXMgYmxvY2sgaXMgZm9yIG1haW50YWluaW5nIHRoZSB0by1kbydzIGNyb3NzZWQgb3V0IGlmIHRoZXkgYXJlIGFscmVhZHkgZmluaXNoZWQsIHdoZW4gYWRkaW5nIGEgbmV3XHJcbiAgICAgICAgLy90by1kby5cclxuICAgICAgICBpZihuZXdUb0RvLnN0YXR1cyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdG9Eb0NoZWNrLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1RvRG8uc3RhdHVzID0gZmFsc2VcclxuICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckxlZnQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJSaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgJHtib3JkZXJTdHlsZX0gYCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9EbzsiLCJpbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9jcmVhdGUtdG8tZG9cIjtcclxuXHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IHRhc2tMaXN0ID0gW107XHJcbmxldCBwcm9qZWN0c1RhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c1RhYicpIC8vc2lkZWJhclxyXG5sZXQgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpIFxyXG5cclxuZnVuY3Rpb24gdG9EbyhuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvalBhcmVudCwgc3RhdHVzLCBub3Rlcyl7IC8vdG8tZG8gb2JqZWN0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBwcm9qUGFyZW50ICwgXHJcbiAgICAgICAgc3RhdHVzLCBcclxuICAgICAgICBub3Rlc1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgICAgICAgICAvL3Byb2plY3QgZm9ybVxyXG5sZXQgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyAvL3Byb2plY3QgbmFtZSBpbnB1dFxyXG5wcm9qTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgTmFtZScpXHJcblxyXG5sZXQgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgLy9zdWJtaXRzIG5ldyBwcm9qZWN0XHJcbmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbmFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG5cclxubGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvL2NhbmNlbHMgbmV3IHByb2plY3RcclxuY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxyXG5jYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgIGZvcm0ucmVtb3ZlKCk7XHJcbn0pXHJcblxyXG5sZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTsgIC8vY3JlYXRlcyBwcm9qZWN0IGZvcm1cclxuZm9ybS5hcHBlbmRDaGlsZChwcm9qTmFtZSk7XHJcbmZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG5cclxubGV0IHByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ0bicpIC8vYWRkIHByb2plY3QgYnRuIChpbnNpZGUgaHRtbClcclxucHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgLy93aGVuIGJ0biBpcyBjbGlja2VkLCBwcm9qZWN0IGZvcm0gYXBwZWFyc1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChmb3JtKTtcclxufSlcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7Ly9zdWJtaXQgcHJvamVjdCBidXR0b25cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKHByb2pOYW1lLnZhbHVlKTsgLy9hZGQgaW5wdXQgdG8gbGlzdFxyXG4gICAgcHJvamVjdHNUYWIuaW5uZXJIVE1MID0gXCJcIjsgLy9yZXNldHMgc2lkZWJhciBjb250ZW50XHJcbiAgICBcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspeyAvL2FkZHMgYWxsIGN1cnJlbnQgcHJvamVjdHMgaW4gYXJyYXkgdG8gc2lkZWJhclxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwcm9qTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpIFxyXG4gICAgICAgIHByb2pMaS5pbm5lclRleHQgPSBwcm9qZWN0c1tpXSBcclxuICAgICAgICBwcm9qTGkuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpOyAvL0hvdyBJIHdpbGwgYmUgYWJsZSB0byBjaG9vc2UgYW5kIGVkaXQgc3BlY2lmaWMgcHJvamVjdHNcclxuXHJcbiAgICAgICAgcHJvakxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAgLy9jbGlja2luZyBvbiBwcm9qTGkgd2lsbCBzaG93IGFsbCB0YXNrcyB0aGF0IGFyZSByZWxhdGVkIHdpdGggdGhhdCBwcm9qZWN0XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjsgLy9jbGVhcnMgY29udGVudFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRhc2tMaXN0Lmxlbmd0aDsgaisrKXsgICAvL2xvb3BzIHRocm91Z2ggdGFza0xpc3QgdG8gZmluZCB0YXNrcyB0aGF0IGFyZSByZWxhdGVkIHRvIHRoZSBjbGlja2VkIHByb2pMaVxyXG4gICAgICAgICAgICAgICAgaWYodGFza0xpc3Rbal0ucHJvalBhcmVudCA9PSBwcm9qTGkuaW5uZXJUZXh0KXtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2pdLCBpKVxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyAvLzMgZG90cyBhdCBlbmQgb2YgcHJvamVjdCBkaXZcclxuICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uLzMtZG90cy5wbmcnKVxyXG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpIC8vbWFraW5nIHN1cmUgZWFjaCBtZW51IGJ1dHRvbiBjb3JyZXNwb25kcyB0byBpdHMgbWF0Y2hpbmcgcHJvamVjdFxyXG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhZGpMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2luZGV4PVwiJHtpfVwiXWApLy9hZGpMaSBpcyB0aGUgY29ycmVzcG9uZGluZyBwcm9qZWN0XHJcbiAgICAgICAgICAgIGlmKCFhZGpMaS5uZXh0RWxlbWVudFNpYmxpbmcgfHwgYWRqTGkubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRElWXCIpeyAvL2NoZWNrcyBpZiBwcm9qTGkgaGFzIGRpdiBzaWJsaW5nIGFscmVhZHlcclxuICAgICAgICAgICAgICAgIGxldCBtZW51QnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOy8vIGFsbCBidXR0b25zIHdpbGwgYmUgc3RvcmVkIGluIGEgc2VwZXJhdGUgZGl2XHJcbiAgICAgICAgICAgICAgICBtZW51QnRucy5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2luc2lkZSBtZW51IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIkVkaXRcIjtcclxuICAgICAgICAgICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRQcm9qRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FuY2VsTmFtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiVXBkYXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxOYW1lQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2J1dHRvbiBpbnNpZGUgb2YgRWRpdCBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxOYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaW5zaWRlIG9mIGVkaXQgYnV0dG9uLCB3aWxsIGNoYW5nZSB0aGUgcHJvamVjdHMgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlVwZGF0ZWQgbmFtZVwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0uYXBwZW5kQ2hpbGQodXBkYXRlQnRuKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsTmFtZUJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFwcGVuZENoaWxkKHVwZGF0ZU5hbWVJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXSA9IHVwZGF0ZU5hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRqTGkudGV4dENvbnRlbnQgPSB1cGRhdGVOYW1lSW5wdXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvakxpLmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBtZW51QnRucy5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzVGFiLmluc2VydEJlZm9yZShlZGl0UHJvakZvcm0sIGFkakxpLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9pbnNpZGUgb2YgbWVudSBidXR0b25cclxuICAgICAgICAgICAgICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmlubmVyVGV4dCA9ICdEZWxldGUnO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2luZGV4PVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2luZGV4PVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vaW5zaWRlIG9mIG1lbnUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FuY2VsYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxidXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCdcclxuICAgICAgICAgICAgICAgIGNhbmNlbGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltpbmRleD1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2J1dHRvbnMgcHV0IGluc2lkZSBvZiBkaXZcclxuICAgICAgICAgICAgICAgIG1lbnVCdG5zLmFwcGVuZENoaWxkKGVkaXRCdG4pXHJcbiAgICAgICAgICAgICAgICBtZW51QnRucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pXHJcbiAgICAgICAgICAgICAgICBtZW51QnRucy5hcHBlbmRDaGlsZChjYW5jZWxidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2J1dHRvbiBkaXYgaXMgYWRkZWQgYmVmb3JlIGN1cnJlbnQgcHJvamVjdHMgbmV4dCBzaWJsaW5nIGllOiByaWdodCBhZnRlciBpdCAgIFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNUYWIuaW5zZXJ0QmVmb3JlKG1lbnVCdG5zLCBhZGpMaS5uZXh0U2libGluZykgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBwcm9qTGkuYXBwZW5kQ2hpbGQobWVudSlcclxuICAgICAgICBwcm9qZWN0c1RhYi5hcHBlbmRDaGlsZChwcm9qTGkpXHJcbiAgICB9XHJcblxyXG4gICAgLy9hZGRpbmcgcHJvamVjdCBvcHRpb25zIHRvIHRoZSB0by1kbyBmb3JtKGRyb3Bkb3duIG1lbnUpXHJcbiAgICB0YXNrUHJvamVjdC5pbm5lckhUTUwgPSAnPG9wdGlvbj48L29wdGlvbj4nO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udGV4dCA9IHByb2plY3Q7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcclxuICAgICAgICB0YXNrUHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSlcclxuXHJcbiAgICBmb3JtLnJlbW92ZSgpXHJcbn0pXHJcblxyXG4gICAgICAgICAgICAvL3RvLWRvIGZvcm1cclxubGV0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpICAvL3RvLWRvIG5hbWUgaW5wdXRcclxudGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUYXNrIE5hbWVcIik7XHJcbnRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuXHJcbmxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSAvL3RvLWRvIHByaW9yaXR5IGNoZWNrYm94XHJcbnRhc2tQcmlvcml0eS5pbm5lckhUTUwgPSAnPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlByaW9yaXR5PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm90IEEgUHJpb3JpdHk8L29wdGlvbj4nXHJcbnRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWNoZWNrJylcclxudGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcclxuXHJcbmxldCB0YXNrUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vbGFiZWwgZm9yIHByaW9yaXR5IGNoZWNrYm94XHJcbnRhc2tQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LWNoZWNrJylcclxudGFza1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIklzIHRoaXMgYSBwcmlvcml0eSB0YXNrP1wiXHJcblxyXG5sZXQgdG9Eb0Zvcm1Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnRvRG9Gb3JtUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5TGFiZWwpXHJcbnRvRG9Gb3JtUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KVxyXG5cclxuXHJcbmxldCB0YXNrRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgLy90by1kbyBjYWxlbmRlciBzZWxlY3RvclxyXG50YXNrRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXHJcbnRhc2tEdWVkYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcclxuXHJcbmxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAvL2xhYmVsIGZvciBjYWxlbmRlclxyXG5kdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIldoZW4gaXMgdGhpcyBkdWU/XCJcclxuXHJcbmxldCB0b0RvRm9ybUR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG50b0RvRm9ybUR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKVxyXG50b0RvRm9ybUR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZWRhdGUpXHJcblxyXG5sZXQgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSAvL3RvLWRvIHByb2plY3Qgc2VsZWN0b3JcclxubGV0IHRhc2tQcm9qZWN0bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG50YXNrUHJvamVjdGxhYmVsLnRleHRDb250ZW50ID0gXCJEb2VzIHRoaXMgYmVsb25nIGluIGEgcHJvamVjdD9cIlxyXG5cclxubGV0IHRvRG9Gb3JtUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnRvRG9Gb3JtUHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdGxhYmVsKVxyXG50b0RvRm9ybVByb2plY3REaXYuYXBwZW5kQ2hpbGQodGFza1Byb2plY3QpXHJcblxyXG5sZXQgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvL3N1Ym1pdCB0by1kbyBidG5cclxudGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbnRhc2tTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBUYXNrXCJcclxuXHJcbmxldCB0YXNrQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vdG8tZG8gY2FuY2VsXHJcbnRhc2tDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcbnRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0YXNrRm9ybS5yZW1vdmUoKVxyXG59KVxyXG5cclxubGV0IHRvRG9Gb3JtU3VibWl0Q2FuY2VsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxudG9Eb0Zvcm1TdWJtaXRDYW5jZWxEaXYuYXBwZW5kQ2hpbGQodGFza1N1Ym1pdClcclxudG9Eb0Zvcm1TdWJtaXRDYW5jZWxEaXYuYXBwZW5kQ2hpbGQodGFza0NhbmNlbClcclxuXHJcbmxldCB0YXNrTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIC8vdG9kbyBkZXNjcmlwdGlvbiBhcmVhXHJcbnRhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXHJcbnRhc2tOb3Rlcy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1B1dCB5b3VyIGRlc2NyaXB0aW9uIGhlcmUuJylcclxuXHJcblxyXG5sZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykgLy90by1kbyBmb3JtIGlzIGFzc2VtYmxlZFxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVByaW9yaXR5RGl2KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybUR1ZURhdGVEaXYpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtUHJvamVjdERpdilcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza05vdGVzKVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVN1Ym1pdENhbmNlbERpdilcclxuXHJcblxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvL3B1dHMgdG8tZG8gZm9ybSBpbiB0aGUgRE9NXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKHRhc2tGb3JtKVxyXG4gICAgdGFza0Zvcm0uc3R5bGUuanVzdGlmeVNlbGYgPSAnY2VudGVyJ1xyXG59KVxyXG5cclxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoZXZlbnQpPT4geyAvL3N1Ym1pdCB0by1kbyBcclxuICAgIGxldCBzdGF0dXMgPSBcIlBlbmRpbmdcIlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1RvRG8gPSB0b0RvKHRhc2tOYW1lSW5wdXQudmFsdWUsIHRhc2tEdWVkYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUsIHRhc2tQcm9qZWN0LnZhbHVlLCBzdGF0dXMsIHRhc2tOb3Rlcy52YWx1ZSlcclxuICAgIHRhc2tMaXN0LnB1c2gobmV3VG9Ebyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICAvL3VzZSBsaXN0IHRvIGNyZWF0ZSBET00gdG8tZG8gZWxlbWVudHNcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3RbaV0pXHJcbiAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgIH1cclxuXHJcbiAgICB0YXNrRm9ybS5yZW1vdmUoKVxyXG59KVxyXG5cclxuXHJcbiAgICAgICAgLy9Ub2RheSB0YWJcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5VGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFswXSlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdGFza0xpc3QubGVuZ3RoOyBpKyspeyAgXHJcbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gbmV3IERhdGUodGFza0xpc3RbaV0uZHVlRGF0ZSk7XHJcbiAgICAgICAgY29uc3QgdGltZURpZmYgPSBNYXRoLmFicyh0b2RheS5nZXRUaW1lKCkgLSBpbnB1dERhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICBjb25zdCBkYXlJbk1pbGxpc2Vjb25kcyA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgaWYodGltZURpZmYgPD0gZGF5SW5NaWxsaXNlY29uZHMpeyAvL2NoZWNrcyBpZiB0aGUgZGlmZmVyZW5jZSBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gb25lIGRheVxyXG4gICAgICAgICAgICAvL2FwcGVuZCBhbGwgdG8tZG8ncyB3aXRoaW4gIGEgZGF5IHRvIHRoZSBjb250ZW50IGRpdlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSlcclxuICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG4gICAgICAgIC8vYWxsIHRhYlxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsVGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAvL2FwcGVuZCBhbGwgdG8tZG8ncyB3aXRoaW4gYSBkYXkgdG8gdGhlIGNvbnRlbnQgZGl2XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3RbaV0pXHJcbiAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgIH1cclxufSlcclxuXHJcbiAgICAgICAgLy90aGlzIHdlZWsgdGFiXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzV2Vla1RhYicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc29sZS5sb2codGFza0xpc3RbMF0pXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IG5ldyBEYXRlKHRhc2tMaXN0W2ldLmR1ZURhdGUpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVEaWZmID0gTWF0aC5hYnModG9kYXkuZ2V0VGltZSgpIC0gaW5wdXREYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgY29uc3Qgd2Vla0luTWlsbGlzZWNvbmRzID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgaWYodGltZURpZmYgPD0gd2Vla0luTWlsbGlzZWNvbmRzKXsgLy9jaGVja3MgaWYgdGhlIGRpZmZlcmVuY2UgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIG9uZSB3ZWVrICAgICBcclxuICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSkgLy9hcHBlbmQgYWxsIHRvLWRvJ3Mgd2l0aGluICBhIHdlZWsgdG8gdGhlIGNvbnRlbnQgZGl2XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuICAgICAgICAvL3ByaW9yaXR5IHRhYlxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlUYWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdGFza0xpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldLnByaW9yaXR5KVxyXG4gICAgICAgIGlmKHRhc2tMaXN0W2ldLnByaW9yaXR5ID09ICdZZXMnKXtcclxuICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrTGlzdFxyXG5leHBvcnQge3Byb2plY3RzfVxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==