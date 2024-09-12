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
    console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])
    let container = document.createElement('li') //container div for to-do
        container.setAttribute('code', i) 
        let containerLeft = document.createElement('div')
        containerLeft.setAttribute('style', 'display: flex')
        let containerRight = document.createElement('div')
        containerRight.setAttribute('style', 'display: flex; align-items: center')
    
        let toDoCheck = document.createElement('input')
        toDoCheck.setAttribute('type', 'checkbox')
        
        let toDoName = document.createElement('p');
        toDoName.textContent = newToDo.name; 

        let toDoDate = document.createElement('p')
        toDoDate.textContent = newToDo.dueDate;

        let borderStyle = 'border: 5px solid';
        if (newToDo.priority == true) {
          borderStyle += ' red;';
        } else {
          borderStyle += ' black;';
        }


        let toDoMenu = document.createElement('img');
        toDoMenu.setAttribute('src', '../3-dots.png') 
        toDoMenu.setAttribute('style', 'max-height: 20px; max-width: 20px')
        toDoMenu.setAttribute('index', i)
        toDoMenu.addEventListener('click', () => {
            if(!container.nextElementSibling || container.nextElementSibling.tagName !== "FORM" && container.nextElementSibling.tagName !== "DIV"){
                let toDoBtnsDiv = document.createElement('div') //div which will contain all 3 menu btns for to-do
                toDoBtnsDiv.setAttribute('code', i)
                toDoBtnsDiv.setAttribute('style', 'display: flex; justify-content: end;')

                let toDoEdit = document.createElement('button') //edit button
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

                    let toDoFormSubmit = document.createElement('button')
                    toDoFormSubmit.textContent = 'Submit'
                    toDoFormSubmit.setAttribute('type', 'submit')

                    let toDoFormCancel = document.createElement('button')
                    toDoFormCancel.textContent = 'Cancel';
                    toDoFormCancel.addEventListener('click', () => {
                        editForm.remove();
                    });

                    editForm.appendChild(toDoFormName)
                    editForm.appendChild(toDoFormDate)
                    editForm.appendChild(toDoFormPriority)
                    editForm.appendChild(toDoFormProject)
                    editForm.appendChild(toDoFormSubmit)
                    editForm.appendChild(toDoFormCancel)

                    editForm.addEventListener('submit', (event) =>{
                        event.preventDefault();
                        //code to change object's values
                        newToDo.name = toDoFormName.value
                        newToDo.dueDate = toDoFormDate.value
                        if(toDoFormPriority.value == "Not a Priority"){ //checks if user selected Not priority or priority and uses if statment to set prioirty status to true or falsely
                            newToDo.priority = false;
                        } else{
                            newToDo.priority = true;
                        }
                        newToDo.projParent = toDoFormProject.value

                        //code to change the DOM values
                        toDoDate.textContent = newToDo.dueDate;
                        toDoName.textContent = newToDo.name;
                        let borderStyle = 'border: 5px solid';
                        if (newToDo.priority == true) {
                          borderStyle += ' red;';
                        } else {
                          borderStyle += ' black;';
                        }

                        container.setAttribute('style', `${borderStyle}`)
                       //<li> border to indicate priority level. Will do this
                        //by checking objects priority status and adding css  

                        editForm.remove()
                    })


                    document.getElementById('content').insertBefore(editForm, container.nextElementSibling)
                }
                   
                })
                //todo now has 5 attributes. Finished will be true or false. Same as priority. This 
                //attribute will be changed with the clicking of the todoCheck box. If clicked it will be
                //true and if it is not clicked it will be false. If obj is finished, the style will change
                // to crossed out. It will look like this: On todoCheck change => change obj finished status
                // => if status is true => change style to crossed out. if else => change style to normal. 

                //finished will be a special case because it does not need to be reflected


                let toDoDelete = document.createElement('button') //delete button
                toDoDelete.textContent = "Delete";
                toDoDelete.addEventListener('click', () => {
                    _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].splice(i, 1)
                    document.querySelector(`li[code="${i}"]`).remove()
                    document.querySelector(`div[code="${i}"]`).remove()
                })


                let toDoCancel = document.createElement('button')
                toDoCancel.textContent = 'Cancel'
                toDoCancel.addEventListener('click', () => {
                    toDoBtnsDiv.remove()
                })
                
                
                
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

        toDoCheck.addEventListener('change', () => {
            if(toDoCheck.checked){
                newToDo.status = true
                console.log(newToDo.status)
                if(newToDo.status == true){
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
        }})

        if(newToDo.status == true){
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

function toDo(name, dueDate, priority, projParent, status){ //to-do object
    return {
        name,
        dueDate,
        priority,
        projParent , 
        status
    }
}


//project form
let projName = document.createElement('input');
projName.setAttribute('placeholder', 'Project Name')

let addBtn = document.createElement('button')
addBtn.setAttribute('type', 'submit');
addBtn.textContent = 'Add';

let cancelBtn = document.createElement('button');
cancelBtn.setAttribute('type', 'button')
cancelBtn.textContent = "Cancel";

//Appends to project form to DOM
let form = document.createElement('form'); 
form.appendChild(projName);
form.appendChild(addBtn);
form.appendChild(cancelBtn);

//add project btn
let projBtn = document.getElementById('add-btn')
projBtn.addEventListener('click', () => {
    document.getElementById('content').appendChild(form);
   
})



//cancel button
cancelBtn.addEventListener('click', () =>{
    form.remove();
})



//To-do Name
let taskNameInput = document.createElement('input') 
taskNameInput.setAttribute('placeholder', "Task Name");

//submit to-do btn
let taskSubmit = document.createElement('button');
taskSubmit.setAttribute('type', 'submit');
taskSubmit.textContent = "Submit Task"

//to-do cancel
let taskCancel = document.createElement('button');
taskCancel.textContent = "Cancel"
taskCancel.addEventListener('click', () => {
    taskForm.remove()
})

//to-do priority checkbox
let taskPriority = document.createElement('input')
taskPriority.setAttribute('type', 'checkbox')
taskPriority.setAttribute('id', 'priority-check')

//label for priority checkbox
let taskPriorityLabel = document.createElement('label');
taskPriorityLabel.setAttribute('for', 'priority-check')
taskPriorityLabel.textContent = "Is this a priority task?"

//to-do calender selector
let taskDuedate = document.createElement('input')
taskDuedate.setAttribute('type', 'date')

let dueDateLabel = document.createElement('label');
dueDateLabel.textContent = "When is this due?"

let taskProject = document.createElement('select')
let taskProjectlabel = document.createElement('label');
taskProjectlabel.textContent = "Does this belong in a project?"


//to-do form is assembled
let taskForm = document.createElement('form')
taskForm.appendChild(taskNameInput)
taskForm.appendChild(taskPriority)
taskForm.appendChild(taskPriorityLabel)
taskForm.appendChild(taskDuedate)
taskForm.appendChild(dueDateLabel)
taskForm.appendChild(taskProject)
taskForm.appendChild(taskProjectlabel)
taskForm.appendChild(taskSubmit)
taskForm.appendChild(taskCancel)

//add task btn (adds to-do form to DOM)
addTask.addEventListener('click', () => {
    document.getElementById('content').appendChild(taskForm)
})

//submit project button
form.addEventListener('submit', (event) => {
    event.preventDefault();
    projects.push(projName.value); //add input to list
    projectsTab.innerHTML = ""; //resets sidebar content
    

    for(let i = 0; i < projects.length; i++){ //adds all current projects in array to sidebar
        
        let projLi = document.createElement('li') 
        projLi.innerText = projects[i] 
        projLi.setAttribute('index', i); //How I will be able to choose and edit specific projects

        projLi.addEventListener('click', () => {  //clicking on projLi will show all tasks that are related with that project
            console.log('step')
            document.getElementById('content').innerHTML = ""; //clears content
            
            for(let j = 0; j < taskList.length; j++){       //loops through taskList to find tasks that are related to the clicked projLi
                if(projLi.innerText = taskList[j].projParent){
                    console.log('step1')
                    //have to create a new li from scratch for each task that is related to the clicked project
                    //or store the filtered tasks in an array and then loop through array to create to-dos
                    //storing in array might be easier because I can use the index attributes as parameters for createtoDo function
                    //document.getElementById('content').appendChild(document.querySelector(`li[code="${j}"]`)) //clearing it beforehand soit doesn't exist anymore
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

//submit to-do button
taskForm.addEventListener('submit',(event)=> { //submit to-do 
    event.preventDefault();
    const newToDo = toDo(taskNameInput.value, taskDuedate.value, taskPriority.checked, taskProject.value)
    taskList.push(newToDo);
    document.getElementById('content').innerHTML = ""

    //use list to create DOM to-do elements
    for(let i = 0; i < taskList.length; i++){
        (0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList[i], i)
    }

    taskForm.remove()
})


//setting todayTab
document.getElementById('todayTab').addEventListener('click', () => {
    document.getElementById('content').innerHTML = "";
    const today = new Date();
    for(let i = 0; i <= taskList.length; i++){
        const inputDate = new Date(taskList[i].Date)
        const timeDiff = Math.abs(today.getTime() - inputDate.getTime());
        const dayInMilliseconds = 24 * 60 * 60 * 1000;
        if(timeDiff <= dayInMilliseconds){
            //append all to-do's within a day to the content div
            let container = document.createElement('li') //container div for to-do
             container.setAttribute('code', i) 
            let containerLeft = document.createElement('div')
            containerLeft.setAttribute('style', 'display: flex')
            let containerRight = document.createElement('div')
            containerRight.setAttribute('style', 'display: flex; align-items: center')
        
            let toDoCheck = document.createElement('input')
            toDoCheck.setAttribute('type', 'checkbox')

            let toDoName = document.createElement('p');
            toDoName.textContent = taskList[i].name;

            let toDoDate = document.createElement('p')
            toDoDate.textContent = taskList[i].dueDate;

            let borderStyle = 'border: 5px solid';
            if (taskList[i].priority == true) {
            borderStyle += ' red;';
            } else {
            borderStyle += ' black;';
            }

            containerLeft.appendChild(toDoCheck);
            containerLeft.appendChild(toDoName);

            containerRight.appendChild(toDoDate)
            containerRight.appendChild(toDoMenu);

            container.appendChild(containerLeft);
            container.appendChild(containerRight);
            
            container.setAttribute('style', ` display: flex; justify-content: space-between; ${borderStyle} `);

            document.getElementById('content').appendChild(container)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDRDtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEMsUUFBUSx5REFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsY0FBYztBQUNkLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGdDQUFnQyxFQUFFLGFBQWE7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxRQUFROzs7Ozs7O1VDL1J2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLXByb2ovLi9zcmMvY3JlYXRlLXRvLWRvLmpzIiwid2VicGFjazovL3RvLWRvLXByb2ovLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGFza0xpc3QgZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5cclxuY29uc3QgY3JlYXRlVG9EbyA9IChuZXdUb0RvLCBpKSA9PiB7IFxyXG4gICAgLy9pIHdhcyBrZXB0IGFzIGEgbiBhcmd1bWVudCB0byB1c2UgYXMgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB0by1kby5cclxuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KVxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykgLy9jb250YWluZXIgZGl2IGZvciB0by1kb1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvZGUnLCBpKSBcclxuICAgICAgICBsZXQgY29udGFpbmVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29udGFpbmVyTGVmdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXgnKVxyXG4gICAgICAgIGxldCBjb250YWluZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyJylcclxuICAgIFxyXG4gICAgICAgIGxldCB0b0RvQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHRvRG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRvRG9OYW1lLnRleHRDb250ZW50ID0gbmV3VG9Eby5uYW1lOyBcclxuXHJcbiAgICAgICAgbGV0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBuZXdUb0RvLmR1ZURhdGU7XHJcblxyXG4gICAgICAgIGxldCBib3JkZXJTdHlsZSA9ICdib3JkZXI6IDVweCBzb2xpZCc7XHJcbiAgICAgICAgaWYgKG5ld1RvRG8ucHJpb3JpdHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyByZWQ7JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyBibGFjazsnO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCB0b0RvTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHRvRG9NZW51LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uLzMtZG90cy5wbmcnKSBcclxuICAgICAgICB0b0RvTWVudS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21heC1oZWlnaHQ6IDIwcHg7IG1heC13aWR0aDogMjBweCcpXHJcbiAgICAgICAgdG9Eb01lbnUuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpXHJcbiAgICAgICAgdG9Eb01lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJGT1JNXCIgJiYgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkRJVlwiKXtcclxuICAgICAgICAgICAgICAgIGxldCB0b0RvQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vZGl2IHdoaWNoIHdpbGwgY29udGFpbiBhbGwgMyBtZW51IGJ0bnMgZm9yIHRvLWRvXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NvZGUnLCBpKVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDsnKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0b0RvRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpIC8vZWRpdCBidXR0b25cclxuICAgICAgICAgICAgICAgIHRvRG9FZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCJcclxuICAgICAgICAgICAgICAgIHRvRG9FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJGT1JNXCIpeyAvL2NoZWNrcyB0byBzZWUgaWYgdGhlIG5leHQgZWxlbWVudCBhZnRlciBjb250YWluZXIgaXMgYSBmb3JtLiBpZiBub3QgaXQgYXBwZW5kcyB0aGUgdG8tZG8gdXBkYXRlIGZvcm0gdG8gdGhlIGJvdHRvbSBvZiB0aGUgdG8tZG8gY29udGVudCBjb250YWluZXIgZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpLy9mb3JtIHRoYXQgd2lsbCB0YWtlIGlucHV0IGFuZCByZXBsYWNlIHRvLWRvIGl0ZW0gaW5mb1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybU5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZXQgTmV3IFRhc2sgTmFtZSBIZXJlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJvamVjdC50ZXh0Q29udGVudCA9ICdJcyB0aGlzIHBhcnQgb2YgYSBwcm9qZWN0PydcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByb2plY3QuaW5uZXJIVE1MID0gJzxvcHRpb24+PC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxvcHRpb24+UHJpb3JpdHk8L29wdGlvbj4gPG9wdGlvbj5Ob3QgYSBQcmlvcml0eTwvb3B0aW9uPidcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybUNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybURhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Qcmlvcml0eSlcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVByb2plY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1TdWJtaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1DYW5jZWwpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29kZSB0byBjaGFuZ2Ugb2JqZWN0J3MgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ubmFtZSA9IHRvRG9Gb3JtTmFtZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLmR1ZURhdGUgPSB0b0RvRm9ybURhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9Eb0Zvcm1Qcmlvcml0eS52YWx1ZSA9PSBcIk5vdCBhIFByaW9yaXR5XCIpeyAvL2NoZWNrcyBpZiB1c2VyIHNlbGVjdGVkIE5vdCBwcmlvcml0eSBvciBwcmlvcml0eSBhbmQgdXNlcyBpZiBzdGF0bWVudCB0byBzZXQgcHJpb2lydHkgc3RhdHVzIHRvIHRydWUgb3IgZmFsc2VseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5wcmlvcml0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLnByaW9yaXR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLnByb2pQYXJlbnQgPSB0b0RvRm9ybVByb2plY3QudmFsdWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29kZSB0byBjaGFuZ2UgdGhlIERPTSB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBuZXdUb0RvLmR1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9OYW1lLnRleHRDb250ZW50ID0gbmV3VG9Eby5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9yZGVyU3R5bGUgPSAnYm9yZGVyOiA1cHggc29saWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VG9Eby5wcmlvcml0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyByZWQ7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZSArPSAnIGJsYWNrOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYCR7Ym9yZGVyU3R5bGV9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAvLzxsaT4gYm9yZGVyIHRvIGluZGljYXRlIHByaW9yaXR5IGxldmVsLiBXaWxsIGRvIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9ieSBjaGVja2luZyBvYmplY3RzIHByaW9yaXR5IHN0YXR1cyBhbmQgYWRkaW5nIGNzcyAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmluc2VydEJlZm9yZShlZGl0Rm9ybSwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vdG9kbyBub3cgaGFzIDUgYXR0cmlidXRlcy4gRmluaXNoZWQgd2lsbCBiZSB0cnVlIG9yIGZhbHNlLiBTYW1lIGFzIHByaW9yaXR5LiBUaGlzIFxyXG4gICAgICAgICAgICAgICAgLy9hdHRyaWJ1dGUgd2lsbCBiZSBjaGFuZ2VkIHdpdGggdGhlIGNsaWNraW5nIG9mIHRoZSB0b2RvQ2hlY2sgYm94LiBJZiBjbGlja2VkIGl0IHdpbGwgYmVcclxuICAgICAgICAgICAgICAgIC8vdHJ1ZSBhbmQgaWYgaXQgaXMgbm90IGNsaWNrZWQgaXQgd2lsbCBiZSBmYWxzZS4gSWYgb2JqIGlzIGZpbmlzaGVkLCB0aGUgc3R5bGUgd2lsbCBjaGFuZ2VcclxuICAgICAgICAgICAgICAgIC8vIHRvIGNyb3NzZWQgb3V0LiBJdCB3aWxsIGxvb2sgbGlrZSB0aGlzOiBPbiB0b2RvQ2hlY2sgY2hhbmdlID0+IGNoYW5nZSBvYmogZmluaXNoZWQgc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAvLyA9PiBpZiBzdGF0dXMgaXMgdHJ1ZSA9PiBjaGFuZ2Ugc3R5bGUgdG8gY3Jvc3NlZCBvdXQuIGlmIGVsc2UgPT4gY2hhbmdlIHN0eWxlIHRvIG5vcm1hbC4gXHJcblxyXG4gICAgICAgICAgICAgICAgLy9maW5pc2hlZCB3aWxsIGJlIGEgc3BlY2lhbCBjYXNlIGJlY2F1c2UgaXQgZG9lcyBub3QgbmVlZCB0byBiZSByZWZsZWN0ZWRcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSAvL2RlbGV0ZSBidXR0b25cclxuICAgICAgICAgICAgICAgIHRvRG9EZWxldGUudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdC5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtjb2RlPVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2NvZGU9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0b0RvQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIHRvRG9DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9FZGl0KVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuYXBwZW5kQ2hpbGQodG9Eb0RlbGV0ZSlcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9DYW5jZWwpXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmluc2VydEJlZm9yZSh0b0RvQnRuc0RpdiwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQodG9Eb0NoZWNrKTtcclxuICAgICAgICBjb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKHRvRG9OYW1lKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQodG9Eb0RhdGUpXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQodG9Eb01lbnUpO1xyXG5cclxuICAgICAgICB0b0RvQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0b0RvQ2hlY2suY2hlY2tlZCl7XHJcbiAgICAgICAgICAgICAgICBuZXdUb0RvLnN0YXR1cyA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1RvRG8uc3RhdHVzKVxyXG4gICAgICAgICAgICAgICAgaWYobmV3VG9Eby5zdGF0dXMgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5ld1RvRG8uc3RhdHVzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH19KVxyXG5cclxuICAgICAgICBpZihuZXdUb0RvLnN0YXR1cyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3VG9Eby5zdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyTGVmdCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lclJpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAke2JvcmRlclN0eWxlfSBgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjb250YWluZXIpIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb0RvOyIsImltcG9ydCBjcmVhdGVUb0RvIGZyb20gXCIuL2NyZWF0ZS10by1kb1wiO1xyXG5cclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5sZXQgdGFza0xpc3QgPSBbXTtcclxubGV0IHByb2plY3RzVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzVGFiJykgLy9zaWRlYmFyXHJcbmxldCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJykgXHJcblxyXG5mdW5jdGlvbiB0b0RvKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qUGFyZW50LCBzdGF0dXMpeyAvL3RvLWRvIG9iamVjdFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgcHJvalBhcmVudCAsIFxyXG4gICAgICAgIHN0YXR1c1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9wcm9qZWN0IGZvcm1cclxubGV0IHByb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxucHJvak5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IE5hbWUnKVxyXG5cclxubGV0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbmFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG5cclxubGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5jYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXHJcbmNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcblxyXG4vL0FwcGVuZHMgdG8gcHJvamVjdCBmb3JtIHRvIERPTVxyXG5sZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTsgXHJcbmZvcm0uYXBwZW5kQ2hpbGQocHJvak5hbWUpO1xyXG5mb3JtLmFwcGVuZENoaWxkKGFkZEJ0bik7XHJcbmZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuXHJcbi8vYWRkIHByb2plY3QgYnRuXHJcbmxldCBwcm9qQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idG4nKVxyXG5wcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgXHJcbn0pXHJcblxyXG5cclxuXHJcbi8vY2FuY2VsIGJ1dHRvblxyXG5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgIGZvcm0ucmVtb3ZlKCk7XHJcbn0pXHJcblxyXG5cclxuXHJcbi8vVG8tZG8gTmFtZVxyXG5sZXQgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgXHJcbnRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiVGFzayBOYW1lXCIpO1xyXG5cclxuLy9zdWJtaXQgdG8tZG8gYnRuXHJcbmxldCB0YXNrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbnRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG50YXNrU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXQgVGFza1wiXHJcblxyXG4vL3RvLWRvIGNhbmNlbFxyXG5sZXQgdGFza0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG50YXNrQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxyXG50YXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdGFza0Zvcm0ucmVtb3ZlKClcclxufSlcclxuXHJcbi8vdG8tZG8gcHJpb3JpdHkgY2hlY2tib3hcclxubGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxudGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcbnRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5LWNoZWNrJylcclxuXHJcbi8vbGFiZWwgZm9yIHByaW9yaXR5IGNoZWNrYm94XHJcbmxldCB0YXNrUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbnRhc2tQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LWNoZWNrJylcclxudGFza1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIklzIHRoaXMgYSBwcmlvcml0eSB0YXNrP1wiXHJcblxyXG4vL3RvLWRvIGNhbGVuZGVyIHNlbGVjdG9yXHJcbmxldCB0YXNrRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxudGFza0R1ZWRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxyXG5cclxubGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiV2hlbiBpcyB0aGlzIGR1ZT9cIlxyXG5cclxubGV0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcclxubGV0IHRhc2tQcm9qZWN0bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG50YXNrUHJvamVjdGxhYmVsLnRleHRDb250ZW50ID0gXCJEb2VzIHRoaXMgYmVsb25nIGluIGEgcHJvamVjdD9cIlxyXG5cclxuXHJcbi8vdG8tZG8gZm9ybSBpcyBhc3NlbWJsZWRcclxubGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSlcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5TGFiZWwpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEdWVkYXRlKVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdGxhYmVsKVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrU3VibWl0KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrQ2FuY2VsKVxyXG5cclxuLy9hZGQgdGFzayBidG4gKGFkZHMgdG8tZG8gZm9ybSB0byBET00pXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKHRhc2tGb3JtKVxyXG59KVxyXG5cclxuLy9zdWJtaXQgcHJvamVjdCBidXR0b25cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKHByb2pOYW1lLnZhbHVlKTsgLy9hZGQgaW5wdXQgdG8gbGlzdFxyXG4gICAgcHJvamVjdHNUYWIuaW5uZXJIVE1MID0gXCJcIjsgLy9yZXNldHMgc2lkZWJhciBjb250ZW50XHJcbiAgICBcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspeyAvL2FkZHMgYWxsIGN1cnJlbnQgcHJvamVjdHMgaW4gYXJyYXkgdG8gc2lkZWJhclxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwcm9qTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpIFxyXG4gICAgICAgIHByb2pMaS5pbm5lclRleHQgPSBwcm9qZWN0c1tpXSBcclxuICAgICAgICBwcm9qTGkuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpOyAvL0hvdyBJIHdpbGwgYmUgYWJsZSB0byBjaG9vc2UgYW5kIGVkaXQgc3BlY2lmaWMgcHJvamVjdHNcclxuXHJcbiAgICAgICAgcHJvakxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAgLy9jbGlja2luZyBvbiBwcm9qTGkgd2lsbCBzaG93IGFsbCB0YXNrcyB0aGF0IGFyZSByZWxhdGVkIHdpdGggdGhhdCBwcm9qZWN0XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGVwJylcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFycyBjb250ZW50XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGFza0xpc3QubGVuZ3RoOyBqKyspeyAgICAgICAvL2xvb3BzIHRocm91Z2ggdGFza0xpc3QgdG8gZmluZCB0YXNrcyB0aGF0IGFyZSByZWxhdGVkIHRvIHRoZSBjbGlja2VkIHByb2pMaVxyXG4gICAgICAgICAgICAgICAgaWYocHJvakxpLmlubmVyVGV4dCA9IHRhc2tMaXN0W2pdLnByb2pQYXJlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGVwMScpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9oYXZlIHRvIGNyZWF0ZSBhIG5ldyBsaSBmcm9tIHNjcmF0Y2ggZm9yIGVhY2ggdGFzayB0aGF0IGlzIHJlbGF0ZWQgdG8gdGhlIGNsaWNrZWQgcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vb3Igc3RvcmUgdGhlIGZpbHRlcmVkIHRhc2tzIGluIGFuIGFycmF5IGFuZCB0aGVuIGxvb3AgdGhyb3VnaCBhcnJheSB0byBjcmVhdGUgdG8tZG9zXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zdG9yaW5nIGluIGFycmF5IG1pZ2h0IGJlIGVhc2llciBiZWNhdXNlIEkgY2FuIHVzZSB0aGUgaW5kZXggYXR0cmlidXRlcyBhcyBwYXJhbWV0ZXJzIGZvciBjcmVhdGV0b0RvIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2NvZGU9XCIke2p9XCJdYCkpIC8vY2xlYXJpbmcgaXQgYmVmb3JlaGFuZCBzb2l0IGRvZXNuJ3QgZXhpc3QgYW55bW9yZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IC8vMyBkb3RzIGF0IGVuZCBvZiBwcm9qZWN0IGRpdlxyXG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vMy1kb3RzLnBuZycpXHJcbiAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSkgLy9tYWtpbmcgc3VyZSBlYWNoIG1lbnUgYnV0dG9uIGNvcnJlc3BvbmRzIHRvIGl0cyBtYXRjaGluZyBwcm9qZWN0XHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFkakxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbaW5kZXg9XCIke2l9XCJdYCkvL2FkakxpIGlzIHRoZSBjb3JyZXNwb25kaW5nIHByb2plY3RcclxuICAgICAgICAgICAgaWYoIWFkakxpLm5leHRFbGVtZW50U2libGluZyB8fCBhZGpMaS5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJESVZcIil7IC8vY2hlY2tzIGlmIHByb2pMaSBoYXMgZGl2IHNpYmxpbmcgYWxyZWFkeVxyXG4gICAgICAgICAgICAgICAgbGV0IG1lbnVCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7Ly8gYWxsIGJ1dHRvbnMgd2lsbCBiZSBzdG9yZWQgaW4gYSBzZXBlcmF0ZSBkaXZcclxuICAgICAgICAgICAgICAgIG1lbnVCdG5zLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vaW5zaWRlIG1lbnUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xyXG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdFByb2pGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYW5jZWxOYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnRuLnRleHRDb250ZW50ID0gXCJVcGRhdGVcIjtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbE5hbWVCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vYnV0dG9uIGluc2lkZSBvZiBFZGl0IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbE5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pbnNpZGUgb2YgZWRpdCBidXR0b24sIHdpbGwgY2hhbmdlIHRoZSBwcm9qZWN0cyBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiVXBkYXRlZCBuYW1lXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hcHBlbmRDaGlsZCh1cGRhdGVCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxOYW1lQnRuKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0uYXBwZW5kQ2hpbGQodXBkYXRlTmFtZUlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldID0gdXBkYXRlTmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGpMaS50ZXh0Q29udGVudCA9IHVwZGF0ZU5hbWVJbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qTGkuYXBwZW5kQ2hpbGQobWVudSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVCdG5zLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNUYWIuaW5zZXJ0QmVmb3JlKGVkaXRQcm9qRm9ybSwgYWRqTGkubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2luc2lkZSBvZiBtZW51IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uaW5uZXJUZXh0ID0gJ0RlbGV0ZSc7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGkpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbaW5kZXg9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbaW5kZXg9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9pbnNpZGUgb2YgbWVudSBidXR0b25cclxuICAgICAgICAgICAgICAgIGxldCBjYW5jZWxidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIGNhbmNlbGJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJ1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2luZGV4PVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vYnV0dG9ucyBwdXQgaW5zaWRlIG9mIGRpdlxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcclxuICAgICAgICAgICAgICAgIG1lbnVCdG5zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcclxuICAgICAgICAgICAgICAgIG1lbnVCdG5zLmFwcGVuZENoaWxkKGNhbmNlbGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vYnV0dG9uIGRpdiBpcyBhZGRlZCBiZWZvcmUgY3VycmVudCBwcm9qZWN0cyBuZXh0IHNpYmxpbmcgaWU6IHJpZ2h0IGFmdGVyIGl0ICAgXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1RhYi5pbnNlcnRCZWZvcmUobWVudUJ0bnMsIGFkakxpLm5leHRTaWJsaW5nKSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHByb2pMaS5hcHBlbmRDaGlsZChtZW51KVxyXG4gICAgICAgIHByb2plY3RzVGFiLmFwcGVuZENoaWxkKHByb2pMaSlcclxuICAgIH1cclxuXHJcbiAgICAvL2FkZGluZyBwcm9qZWN0IG9wdGlvbnMgdG8gdGhlIHRvLWRvIGZvcm0oZHJvcGRvd24gbWVudSlcclxuICAgIHRhc2tQcm9qZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uPjwvb3B0aW9uPic7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdDtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRhc2tQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KVxyXG5cclxuICAgIGZvcm0ucmVtb3ZlKClcclxufSlcclxuXHJcbi8vc3VibWl0IHRvLWRvIGJ1dHRvblxyXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChldmVudCk9PiB7IC8vc3VibWl0IHRvLWRvIFxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1RvRG8gPSB0b0RvKHRhc2tOYW1lSW5wdXQudmFsdWUsIHRhc2tEdWVkYXRlLnZhbHVlLCB0YXNrUHJpb3JpdHkuY2hlY2tlZCwgdGFza1Byb2plY3QudmFsdWUpXHJcbiAgICB0YXNrTGlzdC5wdXNoKG5ld1RvRG8pO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgLy91c2UgbGlzdCB0byBjcmVhdGUgRE9NIHRvLWRvIGVsZW1lbnRzXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNyZWF0ZVRvRG8odGFza0xpc3RbaV0sIGkpXHJcbiAgICB9XHJcblxyXG4gICAgdGFza0Zvcm0ucmVtb3ZlKClcclxufSlcclxuXHJcblxyXG4vL3NldHRpbmcgdG9kYXlUYWJcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5VGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBuZXcgRGF0ZSh0YXNrTGlzdFtpXS5EYXRlKVxyXG4gICAgICAgIGNvbnN0IHRpbWVEaWZmID0gTWF0aC5hYnModG9kYXkuZ2V0VGltZSgpIC0gaW5wdXREYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgY29uc3QgZGF5SW5NaWxsaXNlY29uZHMgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgICAgIGlmKHRpbWVEaWZmIDw9IGRheUluTWlsbGlzZWNvbmRzKXtcclxuICAgICAgICAgICAgLy9hcHBlbmQgYWxsIHRvLWRvJ3Mgd2l0aGluIGEgZGF5IHRvIHRoZSBjb250ZW50IGRpdlxyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSAvL2NvbnRhaW5lciBkaXYgZm9yIHRvLWRvXHJcbiAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjb2RlJywgaSkgXHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgY29udGFpbmVyTGVmdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXgnKVxyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjb250YWluZXJSaWdodC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXInKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdG9Eb0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxuXHJcbiAgICAgICAgICAgIGxldCB0b0RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSB0YXNrTGlzdFtpXS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gdGFza0xpc3RbaV0uZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBib3JkZXJTdHlsZSA9ICdib3JkZXI6IDVweCBzb2xpZCc7XHJcbiAgICAgICAgICAgIGlmICh0YXNrTGlzdFtpXS5wcmlvcml0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgcmVkOyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgYmxhY2s7JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZCh0b0RvQ2hlY2spO1xyXG4gICAgICAgICAgICBjb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKHRvRG9OYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJpZ2h0LmFwcGVuZENoaWxkKHRvRG9EYXRlKVxyXG4gICAgICAgICAgICBjb250YWluZXJSaWdodC5hcHBlbmRDaGlsZCh0b0RvTWVudSk7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyTGVmdCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJSaWdodCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAke2JvcmRlclN0eWxlfSBgKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tMaXN0XHJcbmV4cG9ydCB7cHJvamVjdHN9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==