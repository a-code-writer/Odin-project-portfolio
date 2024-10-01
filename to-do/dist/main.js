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
        projLi.setAttribute('class', 'active-tab')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1wcm9qLy4vc3JjL2NyZWF0ZS10by1kby5qcyIsIndlYnBhY2s6Ly90by1kby1wcm9qLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRhc2tMaXN0IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVRvRG8gPSAobmV3VG9EbywgaSkgPT4geyBcclxuICAgIC8vaSB3YXMga2VwdCBhcyBhIG4gYXJndW1lbnQgdG8gdXNlIGFzIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIGVhY2ggdG8tZG8uXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSAvL2NvbnRhaW5lciBkaXYgZm9yIHRvLWRvXHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29kZScsIGkpIFxyXG4gICAgICAgIGxldCBjb250YWluZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb250YWluZXJMZWZ0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgZ2FwOiA1cHg7IG1hcmdpbi1sZWZ0OiA1cHgnKVxyXG4gICAgICAgIGxldCBjb250YWluZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyJylcclxuICAgIFxyXG4gICAgICAgIC8vVE8tRE8gQ0hFQ0tCT1hcclxuICAgICAgICBsZXQgdG9Eb0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCdzcmMnLCAnLi91bmNoZWNrZWQucG5nJylcclxuICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXgtaGVpZ2h0OiAyMHB4OyBtYXgtd2lkdGg6IDIwcHg7IGFsaWduLXNlbGY6IGNlbnRlcicpXHJcbiAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKVxyXG4gICAgICAgIHRvRG9DaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodG9Eb0NoZWNrLmdldEF0dHJpYnV0ZSgnc3JjJykgPT0gJy4vdW5jaGVja2VkLnBuZycpe1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vY2hlY2tlZC5wbmcnKVxyXG4gICAgICAgICAgICAgICAgbmV3VG9Eby5zdGF0dXMgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvRG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL3VuY2hlY2tlZC5wbmcnKVxyXG4gICAgICAgICAgICAgICAgbmV3VG9Eby5zdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvL1RPLURPIE5BTUUgRUxFTUVOVFxyXG4gICAgICAgIGxldCB0b0RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IG5ld1RvRG8ubmFtZTsgXHJcblxyXG4gICAgICAgIC8vVE8tRE8gTk9URVMgRUxFTUVOVFxyXG4gICAgICAgIGxldCB0b0RvTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgICAgICAgdG9Eb05vdGVzLnRleHRDb250ZW50ID0gbmV3VG9Eby5ub3RlcztcclxuICAgICAgICB0b0RvTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+eyAvL29uIGNsaWNraW5nIHRoZSBwIGVsZW1lbnQsIHRoZSBub3RlcyBzZWN0aW9uIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdG8tZG9cclxuICAgICAgICAgICAgaWYoIWNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcgfHwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIlRFWFRBUkVBXCIgJiYgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkRJVlwiICYmIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJGT1JNXCIpeyAvL2NoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBub3RlcyBzZWN0aW9uLCBubyBkdXBsaWNhdGVzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkaW5nIG5vdGVzJylcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5zZXJ0QmVmb3JlKHRvRG9Ob3RlcywgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSA9PT0gXCJURVhUQVJFQVwiKXsgLy9pZiB0aGVyZSBpcyBhbHJlYWR5IGEgbm90ZXMgc2VjdGlvbiwgcmVtb3ZlIGl0XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3Zpbmcgbm90ZXMnKVxyXG4gICAgICAgICAgICAgICAgdG9Eb05vdGVzLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy9UTy1ETyBEQVRFIEVMRU1FTlRcclxuICAgICAgICBsZXQgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0b0RvRGF0ZS50ZXh0Q29udGVudCA9IG5ld1RvRG8uZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgLy9CT1JERVIgRk9SIFRPLURPLCBDSEFOR0VTIEJBU0VEIE9GRiBQUklPUklUWVxyXG4gICAgICAgIGxldCBib3JkZXJTdHlsZSA9ICdib3JkZXItbGVmdDogNXB4IHNvbGlkJztcclxuICAgICAgICBpZiAobmV3VG9Eby5wcmlvcml0eSA9PSAnWWVzJykge1xyXG4gICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyByZWQ7JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyBibGFjazsnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8zIERPVFMgQVQgRU5EIE9GIFRPLURPXHJcbiAgICAgICAgbGV0IHRvRG9NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgdG9Eb01lbnUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vMy1kb3RzLnBuZycpIFxyXG4gICAgICAgIHRvRG9NZW51LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWF4LWhlaWdodDogMjBweDsgbWF4LXdpZHRoOiAyMHB4JylcclxuICAgICAgICB0b0RvTWVudS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSlcclxuICAgICAgICB0b0RvTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYoIWNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcgfHwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkZPUk1cIiAmJiBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRElWXCIpeyAvL0NIRUNLUyBGT1IgRFVQTElDQVRFU1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9CdG5zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgLy9kaXYgd2hpY2ggd2lsbCBjb250YWluIGFsbCAzIG1lbnUgYnRucyBmb3IgdG8tZG9cclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LnNldEF0dHJpYnV0ZSgnY29kZScsIGkpXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogZW5kOycpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9VUERBVEUgVE8tRE8gQlVUVE9OXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9Eb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSBcclxuICAgICAgICAgICAgICAgIHRvRG9FZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCJcclxuICAgICAgICAgICAgICAgIHRvRG9FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJGT1JNXCIpeyAvL2NoZWNrcyB0byBzZWUgaWYgdGhlIG5leHQgZWxlbWVudCBhZnRlciBjb250YWluZXIgaXMgYSBmb3JtLiBpZiBub3QgaXQgYXBwZW5kcyB0aGUgdG8tZG8gdXBkYXRlIGZvcm0gdG8gdGhlIGJvdHRvbSBvZiB0aGUgdG8tZG8gY29udGVudCBjb250YWluZXIgZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpLy9mb3JtIHRoYXQgd2lsbCB0YWtlIGlucHV0IGFuZCByZXBsYWNlIHRvLWRvIGl0ZW0gaW5mb1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybU5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZXQgTmV3IFRhc2sgTmFtZSBIZXJlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJvamVjdC50ZXh0Q29udGVudCA9ICdJcyB0aGlzIHBhcnQgb2YgYSBwcm9qZWN0PydcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByb2plY3QuaW5uZXJIVE1MID0gJzxvcHRpb24+PC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcmlvcml0eS5pbm5lckhUTUwgPSAnPG9wdGlvbj5Qcmlvcml0eTwvb3B0aW9uPiA8b3B0aW9uPk5vdCBhIFByaW9yaXR5PC9vcHRpb24+J1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1EYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybU5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtTm90ZXMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZXQgTmV3IFRhc2sgTm90ZXMgSGVyZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtU3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybUNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9UTy1ETyBVUERBVEUgRk9STVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybURhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Qcmlvcml0eSlcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVByb2plY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Ob3RlcylcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVN1Ym1pdClcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybUNhbmNlbClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9DSEFOR0lORyBPQkpFQ1QgVkFMVUVTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ubmFtZSA9IHRvRG9Gb3JtTmFtZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLmR1ZURhdGUgPSB0b0RvRm9ybURhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9Eb0Zvcm1Qcmlvcml0eS52YWx1ZSA9PSBcIk5vdCBhIFByaW9yaXR5XCIpeyAvL2NoZWNrcyBpZiB1c2VyIHNlbGVjdGVkIE5vdCBwcmlvcml0eSBvciBwcmlvcml0eSBhbmQgdXNlcyBpZiBzdGF0bWVudCB0byBzZXQgcHJpb2lydHkgc3RhdHVzIHRvIHRydWUgb3IgZmFsc2VseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5wcmlvcml0eSA9ICdObyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ucHJpb3JpdHkgPSAnWWVzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLnByb2pQYXJlbnQgPSB0b0RvRm9ybVByb2plY3QudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5ub3RlcyA9IHRvRG9Gb3JtTm90ZXMudmFsdWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVVNJTkcgTkVXIE9CSkVDVCBWQUxVRVMgVE8gQ0hBTkdFIERPTSBWQUxVRVNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBuZXdUb0RvLmR1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9OYW1lLnRleHRDb250ZW50ID0gbmV3VG9Eby5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9yZGVyU3R5bGUgPSAnYm9yZGVyOiA1cHggc29saWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VG9Eby5wcmlvcml0eSA9PSAnWWVzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgcmVkOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyBibGFjazsnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRvRG9Gb3JtTm90ZXMudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb05vdGVzLnRleHRDb250ZW50ID0gbmV3VG9Eby5ub3RlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYCR7Ym9yZGVyU3R5bGV9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAvLzxsaT4gYm9yZGVyIHRvIGluZGljYXRlIHByaW9yaXR5IGxldmVsLiBXaWxsIGRvIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9ieSBjaGVja2luZyBvYmplY3RzIHByaW9yaXR5IHN0YXR1cyBhbmQgYWRkaW5nIGNzcyAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmluc2VydEJlZm9yZShlZGl0Rm9ybSwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZpbmlzaGVkIHdpbGwgYmUgYSBzcGVjaWFsIGNhc2UgYmVjYXVzZSBpdCBkb2VzIG5vdCBuZWVkIHRvIGJlIHJlZmxlY3RlZFxyXG5cclxuICAgICAgICAgICAgICAgIC8vREVMRVRFIEJVVFRPTlxyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSAvL2RlbGV0ZSBidXR0b25cclxuICAgICAgICAgICAgICAgIHRvRG9EZWxldGUudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdC5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtjb2RlPVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2NvZGU9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9DQU5DRUwgQlVUVE9OXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9Eb0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICB0b0RvQ2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcclxuICAgICAgICAgICAgICAgIHRvRG9DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8zIERPVFMgTUVOVVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuYXBwZW5kQ2hpbGQodG9Eb0VkaXQpXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRGVsZXRlKVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuYXBwZW5kQ2hpbGQodG9Eb0NhbmNlbClcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5zZXJ0QmVmb3JlKHRvRG9CdG5zRGl2LCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZCh0b0RvQ2hlY2spO1xyXG4gICAgICAgIGNvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQodG9Eb05hbWUpO1xyXG5cclxuICAgICAgICBjb250YWluZXJSaWdodC5hcHBlbmRDaGlsZCh0b0RvRGF0ZSlcclxuICAgICAgICBjb250YWluZXJSaWdodC5hcHBlbmRDaGlsZCh0b0RvTWVudSk7XHJcblxyXG4gICAgICAgIC8vdGhpcyBibG9jayBpcyBmb3IgbWFpbnRhaW5pbmcgdGhlIHRvLWRvJ3MgY3Jvc3NlZCBvdXQgaWYgdGhleSBhcmUgYWxyZWFkeSBmaW5pc2hlZCwgd2hlbiBhZGRpbmcgYSBuZXdcclxuICAgICAgICAvL3RvLWRvLlxyXG4gICAgICAgIGlmKG5ld1RvRG8uc3RhdHVzID09IHRydWUpe1xyXG4gICAgICAgICAgICB0b0RvQ2hlY2suY2hlY2tlZCA9IHRydWVcclxuICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3VG9Eby5zdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyTGVmdCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lclJpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAke2JvcmRlclN0eWxlfSBgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjb250YWluZXIpIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb0RvOyIsImltcG9ydCBjcmVhdGVUb0RvIGZyb20gXCIuL2NyZWF0ZS10by1kb1wiO1xyXG5cclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5sZXQgdGFza0xpc3QgPSBbXTtcclxubGV0IHByb2plY3RzVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzVGFiJykgLy9zaWRlYmFyXHJcbmxldCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJykgXHJcblxyXG5mdW5jdGlvbiB0b0RvKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qUGFyZW50LCBzdGF0dXMsIG5vdGVzKXsgLy90by1kbyBvYmplY3RcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIHByb2pQYXJlbnQgLCBcclxuICAgICAgICBzdGF0dXMsIFxyXG4gICAgICAgIG5vdGVzXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAgICAgICAgIC8vcHJvamVjdCBmb3JtXHJcbmxldCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7IC8vcHJvamVjdCBuYW1lIGlucHV0XHJcbnByb2pOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lJylcclxuXHJcbmxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSAvL3N1Ym1pdHMgbmV3IHByb2plY3RcclxuYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcblxyXG5sZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vY2FuY2VscyBuZXcgcHJvamVjdFxyXG5jYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXHJcbmNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgZm9ybS5yZW1vdmUoKTtcclxufSlcclxuXHJcbmxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyAgLy9jcmVhdGVzIHByb2plY3QgZm9ybVxyXG5mb3JtLmFwcGVuZENoaWxkKHByb2pOYW1lKTtcclxuZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG5mb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcblxyXG5sZXQgcHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnRuJykgLy9hZGQgcHJvamVjdCBidG4gKGluc2lkZSBodG1sKVxyXG5wcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvL3doZW4gYnRuIGlzIGNsaWNrZWQsIHByb2plY3QgZm9ybSBhcHBlYXJzXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGZvcm0pO1xyXG59KVxyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHsvL3N1Ym1pdCBwcm9qZWN0IGJ1dHRvblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHByb2plY3RzLnB1c2gocHJvak5hbWUudmFsdWUpOyAvL2FkZCBpbnB1dCB0byBsaXN0XHJcbiAgICBwcm9qZWN0c1RhYi5pbm5lckhUTUwgPSBcIlwiOyAvL3Jlc2V0cyBzaWRlYmFyIGNvbnRlbnRcclxuICAgIFxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7IC8vYWRkcyBhbGwgY3VycmVudCBwcm9qZWN0cyBpbiBhcnJheSB0byBzaWRlYmFyXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHByb2pMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykgXHJcbiAgICAgICAgcHJvakxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlLXRhYicpXHJcbiAgICAgICAgcHJvakxpLmlubmVyVGV4dCA9IHByb2plY3RzW2ldIFxyXG4gICAgICAgIHByb2pMaS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSk7IC8vSG93IEkgd2lsbCBiZSBhYmxlIHRvIGNob29zZSBhbmQgZWRpdCBzcGVjaWZpYyBwcm9qZWN0c1xyXG5cclxuICAgICAgICBwcm9qTGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7ICAvL2NsaWNraW5nIG9uIHByb2pMaSB3aWxsIHNob3cgYWxsIHRhc2tzIHRoYXQgYXJlIHJlbGF0ZWQgd2l0aCB0aGF0IHByb2plY3RcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFycyBjb250ZW50XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGFza0xpc3QubGVuZ3RoOyBqKyspeyAgIC8vbG9vcHMgdGhyb3VnaCB0YXNrTGlzdCB0byBmaW5kIHRhc2tzIHRoYXQgYXJlIHJlbGF0ZWQgdG8gdGhlIGNsaWNrZWQgcHJvakxpXHJcbiAgICAgICAgICAgICAgICBpZih0YXNrTGlzdFtqXS5wcm9qUGFyZW50ID09IHByb2pMaS5pbm5lclRleHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRvRG8odGFza0xpc3Rbal0sIGkpXHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IC8vMyBkb3RzIGF0IGVuZCBvZiBwcm9qZWN0IGRpdlxyXG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vMy1kb3RzLnBuZycpXHJcbiAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSkgLy9tYWtpbmcgc3VyZSBlYWNoIG1lbnUgYnV0dG9uIGNvcnJlc3BvbmRzIHRvIGl0cyBtYXRjaGluZyBwcm9qZWN0XHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFkakxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbaW5kZXg9XCIke2l9XCJdYCkvL2FkakxpIGlzIHRoZSBjb3JyZXNwb25kaW5nIHByb2plY3RcclxuICAgICAgICAgICAgaWYoIWFkakxpLm5leHRFbGVtZW50U2libGluZyB8fCBhZGpMaS5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJESVZcIil7IC8vY2hlY2tzIGlmIHByb2pMaSBoYXMgZGl2IHNpYmxpbmcgYWxyZWFkeVxyXG4gICAgICAgICAgICAgICAgbGV0IG1lbnVCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7Ly8gYWxsIGJ1dHRvbnMgd2lsbCBiZSBzdG9yZWQgaW4gYSBzZXBlcmF0ZSBkaXZcclxuICAgICAgICAgICAgICAgIG1lbnVCdG5zLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vaW5zaWRlIG1lbnUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xyXG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdFByb2pGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYW5jZWxOYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnRuLnRleHRDb250ZW50ID0gXCJVcGRhdGVcIjtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbE5hbWVCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vYnV0dG9uIGluc2lkZSBvZiBFZGl0IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbE5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pbnNpZGUgb2YgZWRpdCBidXR0b24sIHdpbGwgY2hhbmdlIHRoZSBwcm9qZWN0cyBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiVXBkYXRlZCBuYW1lXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hcHBlbmRDaGlsZCh1cGRhdGVCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxOYW1lQnRuKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0uYXBwZW5kQ2hpbGQodXBkYXRlTmFtZUlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldID0gdXBkYXRlTmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGpMaS50ZXh0Q29udGVudCA9IHVwZGF0ZU5hbWVJbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qTGkuYXBwZW5kQ2hpbGQobWVudSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVCdG5zLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNUYWIuaW5zZXJ0QmVmb3JlKGVkaXRQcm9qRm9ybSwgYWRqTGkubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2luc2lkZSBvZiBtZW51IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uaW5uZXJUZXh0ID0gJ0RlbGV0ZSc7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGkpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbaW5kZXg9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbaW5kZXg9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9pbnNpZGUgb2YgbWVudSBidXR0b25cclxuICAgICAgICAgICAgICAgIGxldCBjYW5jZWxidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIGNhbmNlbGJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJ1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2luZGV4PVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vYnV0dG9ucyBwdXQgaW5zaWRlIG9mIGRpdlxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcclxuICAgICAgICAgICAgICAgIG1lbnVCdG5zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcclxuICAgICAgICAgICAgICAgIG1lbnVCdG5zLmFwcGVuZENoaWxkKGNhbmNlbGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vYnV0dG9uIGRpdiBpcyBhZGRlZCBiZWZvcmUgY3VycmVudCBwcm9qZWN0cyBuZXh0IHNpYmxpbmcgaWU6IHJpZ2h0IGFmdGVyIGl0ICAgXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1RhYi5pbnNlcnRCZWZvcmUobWVudUJ0bnMsIGFkakxpLm5leHRTaWJsaW5nKSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHByb2pMaS5hcHBlbmRDaGlsZChtZW51KVxyXG4gICAgICAgIHByb2plY3RzVGFiLmFwcGVuZENoaWxkKHByb2pMaSlcclxuICAgIH1cclxuXHJcbiAgICAvL2FkZGluZyBwcm9qZWN0IG9wdGlvbnMgdG8gdGhlIHRvLWRvIGZvcm0oZHJvcGRvd24gbWVudSlcclxuICAgIHRhc2tQcm9qZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uPjwvb3B0aW9uPic7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdDtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRhc2tQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KVxyXG5cclxuICAgIGZvcm0ucmVtb3ZlKClcclxufSlcclxuXHJcbiAgICAgICAgICAgIC8vdG8tZG8gZm9ybVxyXG5sZXQgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgIC8vdG8tZG8gbmFtZSBpbnB1dFxyXG50YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlRhc2sgTmFtZVwiKTtcclxudGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cclxubGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpIC8vdG8tZG8gcHJpb3JpdHkgY2hlY2tib3hcclxudGFza1ByaW9yaXR5LmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiWWVzXCI+UHJpb3JpdHk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiTm9cIj5Ob3QgQSBQcmlvcml0eTwvb3B0aW9uPidcclxudGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktY2hlY2snKVxyXG50YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKVxyXG5cclxubGV0IHRhc2tQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy9sYWJlbCBmb3IgcHJpb3JpdHkgY2hlY2tib3hcclxudGFza1ByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHktY2hlY2snKVxyXG50YXNrUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSXMgdGhpcyBhIHByaW9yaXR5IHRhc2s/XCJcclxuXHJcbmxldCB0b0RvRm9ybVByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxudG9Eb0Zvcm1Qcmlvcml0eURpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlMYWJlbClcclxudG9Eb0Zvcm1Qcmlvcml0eURpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpXHJcblxyXG5cclxubGV0IHRhc2tEdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSAvL3RvLWRvIGNhbGVuZGVyIHNlbGVjdG9yXHJcbnRhc2tEdWVkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcclxudGFza0R1ZWRhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKVxyXG5cclxubGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vbGFiZWwgZm9yIGNhbGVuZGVyXHJcbmR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiV2hlbiBpcyB0aGlzIGR1ZT9cIlxyXG5cclxubGV0IHRvRG9Gb3JtRHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnRvRG9Gb3JtRHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpXHJcbnRvRG9Gb3JtRHVlRGF0ZURpdi5hcHBlbmRDaGlsZCh0YXNrRHVlZGF0ZSlcclxuXHJcbmxldCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpIC8vdG8tZG8gcHJvamVjdCBzZWxlY3RvclxyXG5sZXQgdGFza1Byb2plY3RsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbnRhc2tQcm9qZWN0bGFiZWwudGV4dENvbnRlbnQgPSBcIkRvZXMgdGhpcyBiZWxvbmcgaW4gYSBwcm9qZWN0P1wiXHJcblxyXG5sZXQgdG9Eb0Zvcm1Qcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxudG9Eb0Zvcm1Qcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0bGFiZWwpXHJcbnRvRG9Gb3JtUHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdClcclxuXHJcbmxldCB0YXNrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vc3VibWl0IHRvLWRvIGJ0blxyXG50YXNrU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxudGFza1N1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0IFRhc2tcIlxyXG5cclxubGV0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgLy90by1kbyBjYW5jZWxcclxudGFza0NhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxudGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRhc2tGb3JtLnJlbW92ZSgpXHJcbn0pXHJcblxyXG5sZXQgdG9Eb0Zvcm1TdWJtaXRDYW5jZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG50b0RvRm9ybVN1Ym1pdENhbmNlbERpdi5hcHBlbmRDaGlsZCh0YXNrU3VibWl0KVxyXG50b0RvRm9ybVN1Ym1pdENhbmNlbERpdi5hcHBlbmRDaGlsZCh0YXNrQ2FuY2VsKVxyXG5cclxubGV0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgLy90b2RvIGRlc2NyaXB0aW9uIGFyZWFcclxudGFza05vdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxudGFza05vdGVzLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHV0IHlvdXIgZGVzY3JpcHRpb24gaGVyZS4nKVxyXG5cclxuXHJcbmxldCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSAvL3RvLWRvIGZvcm0gaXMgYXNzZW1ibGVkXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtUHJpb3JpdHlEaXYpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtRHVlRGF0ZURpdilcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Qcm9qZWN0RGl2KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTm90ZXMpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtU3VibWl0Q2FuY2VsRGl2KVxyXG5cclxuXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IC8vcHV0cyB0by1kbyBmb3JtIGluIHRoZSBET01cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGFza0Zvcm0pXHJcbiAgICB0YXNrRm9ybS5zdHlsZS5qdXN0aWZ5U2VsZiA9ICdjZW50ZXInXHJcbn0pXHJcblxyXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChldmVudCk9PiB7IC8vc3VibWl0IHRvLWRvIFxyXG4gICAgbGV0IHN0YXR1cyA9IFwiUGVuZGluZ1wiXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3VG9EbyA9IHRvRG8odGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0R1ZWRhdGUudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSwgdGFza1Byb2plY3QudmFsdWUsIHN0YXR1cywgdGFza05vdGVzLnZhbHVlKVxyXG4gICAgdGFza0xpc3QucHVzaChuZXdUb0RvKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIC8vdXNlIGxpc3QgdG8gY3JlYXRlIERPTSB0by1kbyBlbGVtZW50c1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSlcclxuICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2ldLCBpKVxyXG4gICAgfVxyXG5cclxuICAgIHRhc2tGb3JtLnJlbW92ZSgpXHJcbn0pXHJcblxyXG5cclxuICAgICAgICAvL1RvZGF5IHRhYlxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlUYWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0WzBdKVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7ICBcclxuICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBuZXcgRGF0ZSh0YXNrTGlzdFtpXS5kdWVEYXRlKTtcclxuICAgICAgICBjb25zdCB0aW1lRGlmZiA9IE1hdGguYWJzKHRvZGF5LmdldFRpbWUoKSAtIGlucHV0RGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGNvbnN0IGRheUluTWlsbGlzZWNvbmRzID0gMjQgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgICBpZih0aW1lRGlmZiA8PSBkYXlJbk1pbGxpc2Vjb25kcyl7IC8vY2hlY2tzIGlmIHRoZSBkaWZmZXJlbmNlIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byBvbmUgZGF5XHJcbiAgICAgICAgICAgIC8vYXBwZW5kIGFsbCB0by1kbydzIHdpdGhpbiAgYSBkYXkgdG8gdGhlIGNvbnRlbnQgZGl2XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldKVxyXG4gICAgICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2ldLCBpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbiAgICAgICAgLy9hbGwgdGFiXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxUYWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdGFza0xpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vYXBwZW5kIGFsbCB0by1kbydzIHdpdGhpbiBhIGRheSB0byB0aGUgY29udGVudCBkaXZcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSlcclxuICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2ldLCBpKVxyXG4gICAgfVxyXG59KVxyXG5cclxuICAgICAgICAvL3RoaXMgd2VlayB0YWJcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXNXZWVrVGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFswXSlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdGFza0xpc3QubGVuZ3RoOyBpKyspeyAgXHJcbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gbmV3IERhdGUodGFza0xpc3RbaV0uZHVlRGF0ZSk7XHJcbiAgICAgICAgY29uc3QgdGltZURpZmYgPSBNYXRoLmFicyh0b2RheS5nZXRUaW1lKCkgLSBpbnB1dERhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICBjb25zdCB3ZWVrSW5NaWxsaXNlY29uZHMgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgICBpZih0aW1lRGlmZiA8PSB3ZWVrSW5NaWxsaXNlY29uZHMpeyAvL2NoZWNrcyBpZiB0aGUgZGlmZmVyZW5jZSBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gb25lIHdlZWsgICAgIFxyXG4gICAgICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2ldLCBpKSAvL2FwcGVuZCBhbGwgdG8tZG8ncyB3aXRoaW4gIGEgd2VlayB0byB0aGUgY29udGVudCBkaXZcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG4gICAgICAgIC8vcHJpb3JpdHkgdGFiXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVRhYicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3RbaV0ucHJpb3JpdHkpXHJcbiAgICAgICAgaWYodGFza0xpc3RbaV0ucHJpb3JpdHkgPT0gJ1llcycpe1xyXG4gICAgICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2ldLCBpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tMaXN0XHJcbmV4cG9ydCB7cHJvamVjdHN9XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9