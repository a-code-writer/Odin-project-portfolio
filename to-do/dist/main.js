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
const createToDo = () => {
console.log('hello')    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToDo);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do */ "./src/create-to-do.js");


function hello() {
    console.log('hello')
}

hello()

let projects = [];
let taskList = [];
let projectsTab = document.getElementById('projectsTab') //sidebar
let addTask = document.getElementById('add-task') 

function toDo(name, dueDate, priority, projParent){ //to-do object
    return {
        name,
        dueDate,
        priority,
        projParent 
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
            document.getElementById('content').innerHTML = "";
            
            for(let j = 0; j < taskList.length; j++){
                if(projLi.innerText = taskList[j].projParent){
                    console.log('step1')
                    document.getElementById('content').appendChild(document.querySelector(`li[code="${i}"]`))
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
                   projects.forEach(project => {
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
                        taskList[i].name = toDoFormName.value
                        taskList[i].dueDate = toDoFormDate.value
                        if(toDoFormPriority.value == "Not a Priority"){ //checks if user selected Not priority or priority and uses if statment to set prioirty status to true or falsely
                            taskList[i].priority = false;
                        } else{
                            taskList[i].priority = true;
                        }
                        taskList[i].projParent = toDoFormProject.value

                        //code to change the DOM values
                        toDoDate.textContent = taskList[i].dueDate;
                        toDoName.textContent = taskList[i].name;
                        let borderStyle = 'border: 5px solid';
                        if (taskList[i].priority == true) {
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
                   // document.querySelector(`li[code="${i}"]`).appendChild(editForm) //selects to-do item li element which will have the edit form appended at the bottom
                })



                let toDoDelete = document.createElement('button') //delete button
                toDoDelete.textContent = "Delete";
                toDoDelete.addEventListener('click', () => {
                    taskList.splice(i, 1)
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

        container.appendChild(containerLeft);
        container.appendChild(containerRight);
        
        container.setAttribute('style', ` display: flex; justify-content: space-between; ${borderStyle} `);

        document.getElementById('content').appendChild(container)
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxnQ0FBZ0MsRUFBRSxhQUFhO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsY0FBYztBQUNkLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGdDQUFnQyxFQUFFLGFBQWE7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tcHJvai8uL3NyYy9jcmVhdGUtdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLXByb2ovLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlVG9EbyA9ICgpID0+IHtcclxuY29uc29sZS5sb2coJ2hlbGxvJykgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvRG87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9jcmVhdGUtdG8tZG9cIjtcclxuXHJcbmZ1bmN0aW9uIGhlbGxvKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2hlbGxvJylcclxufVxyXG5cclxuaGVsbG8oKVxyXG5cclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCB0YXNrTGlzdCA9IFtdO1xyXG5sZXQgcHJvamVjdHNUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNUYWInKSAvL3NpZGViYXJcclxubGV0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKSBcclxuXHJcbmZ1bmN0aW9uIHRvRG8obmFtZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2pQYXJlbnQpeyAvL3RvLWRvIG9iamVjdFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgcHJvalBhcmVudCBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vcHJvamVjdCBmb3JtXHJcbmxldCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnByb2pOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lJylcclxuXHJcbmxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5hZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG5hZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcclxuXHJcbmxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxyXG5jYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG5cclxuLy9BcHBlbmRzIHRvIHByb2plY3QgZm9ybSB0byBET01cclxubGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7IFxyXG5mb3JtLmFwcGVuZENoaWxkKHByb2pOYW1lKTtcclxuZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG5mb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcblxyXG4vL2FkZCBwcm9qZWN0IGJ0blxyXG5sZXQgcHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnRuJylcclxucHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgIFxyXG59KVxyXG5cclxuXHJcblxyXG4vL2NhbmNlbCBidXR0b25cclxuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICBmb3JtLnJlbW92ZSgpO1xyXG59KVxyXG5cclxuXHJcblxyXG4vL1RvLWRvIE5hbWVcclxubGV0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIFxyXG50YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlRhc2sgTmFtZVwiKTtcclxuXHJcbi8vc3VibWl0IHRvLWRvIGJ0blxyXG5sZXQgdGFza1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG50YXNrU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxudGFza1N1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0IFRhc2tcIlxyXG5cclxuLy90by1kbyBjYW5jZWxcclxubGV0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxudGFza0NhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxudGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRhc2tGb3JtLnJlbW92ZSgpXHJcbn0pXHJcblxyXG4vL3RvLWRvIHByaW9yaXR5IGNoZWNrYm94XHJcbmxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbnRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG50YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1jaGVjaycpXHJcblxyXG4vL2xhYmVsIGZvciBwcmlvcml0eSBjaGVja2JveFxyXG5sZXQgdGFza1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG50YXNrUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eS1jaGVjaycpXHJcbnRhc2tQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJJcyB0aGlzIGEgcHJpb3JpdHkgdGFzaz9cIlxyXG5cclxuLy90by1kbyBjYWxlbmRlciBzZWxlY3RvclxyXG5sZXQgdGFza0R1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbnRhc2tEdWVkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcclxuXHJcbmxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5kdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIldoZW4gaXMgdGhpcyBkdWU/XCJcclxuXHJcbmxldCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXHJcbmxldCB0YXNrUHJvamVjdGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxudGFza1Byb2plY3RsYWJlbC50ZXh0Q29udGVudCA9IFwiRG9lcyB0aGlzIGJlbG9uZyBpbiBhIHByb2plY3Q/XCJcclxuXHJcblxyXG4vL3RvLWRvIGZvcm0gaXMgYXNzZW1ibGVkXHJcbmxldCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUxhYmVsKVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRHVlZGF0ZSlcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdClcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1Byb2plY3RsYWJlbClcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1N1Ym1pdClcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0NhbmNlbClcclxuXHJcbi8vYWRkIHRhc2sgYnRuIChhZGRzIHRvLWRvIGZvcm0gdG8gRE9NKVxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZCh0YXNrRm9ybSlcclxufSlcclxuXHJcbi8vc3VibWl0IHByb2plY3QgYnV0dG9uXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcHJvamVjdHMucHVzaChwcm9qTmFtZS52YWx1ZSk7IC8vYWRkIGlucHV0IHRvIGxpc3RcclxuICAgIHByb2plY3RzVGFiLmlubmVySFRNTCA9IFwiXCI7IC8vcmVzZXRzIHNpZGViYXIgY29udGVudFxyXG4gICAgXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXsgLy9hZGRzIGFsbCBjdXJyZW50IHByb2plY3RzIGluIGFycmF5IHRvIHNpZGViYXJcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcHJvakxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSBcclxuICAgICAgICBwcm9qTGkuaW5uZXJUZXh0ID0gcHJvamVjdHNbaV0gXHJcbiAgICAgICAgcHJvakxpLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKTsgLy9Ib3cgSSB3aWxsIGJlIGFibGUgdG8gY2hvb3NlIGFuZCBlZGl0IHNwZWNpZmljIHByb2plY3RzXHJcblxyXG4gICAgICAgIHByb2pMaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgIC8vY2xpY2tpbmcgb24gcHJvakxpIHdpbGwgc2hvdyBhbGwgdGFza3MgdGhhdCBhcmUgcmVsYXRlZCB3aXRoIHRoYXQgcHJvamVjdFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RlcCcpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0YXNrTGlzdC5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBpZihwcm9qTGkuaW5uZXJUZXh0ID0gdGFza0xpc3Rbal0ucHJvalBhcmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0ZXAxJylcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2NvZGU9XCIke2l9XCJdYCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgLy8zIGRvdHMgYXQgZW5kIG9mIHByb2plY3QgZGl2XHJcbiAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi8zLWRvdHMucG5nJylcclxuICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKSAvL21ha2luZyBzdXJlIGVhY2ggbWVudSBidXR0b24gY29ycmVzcG9uZHMgdG8gaXRzIG1hdGNoaW5nIHByb2plY3RcclxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWRqTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtpbmRleD1cIiR7aX1cIl1gKS8vYWRqTGkgaXMgdGhlIGNvcnJlc3BvbmRpbmcgcHJvamVjdFxyXG4gICAgICAgICAgICBpZighYWRqTGkubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGFkakxpLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkRJVlwiKXsgLy9jaGVja3MgaWYgcHJvakxpIGhhcyBkaXYgc2libGluZyBhbHJlYWR5XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVudUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvLyBhbGwgYnV0dG9ucyB3aWxsIGJlIHN0b3JlZCBpbiBhIHNlcGVyYXRlIGRpdlxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9pbnNpZGUgbWVudSBidXR0b25cclxuICAgICAgICAgICAgICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCJFZGl0XCI7XHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0UHJvakZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbmNlbE5hbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdG4udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsTmFtZUJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9idXR0b24gaW5zaWRlIG9mIEVkaXQgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsTmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0ucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2luc2lkZSBvZiBlZGl0IGJ1dHRvbiwgd2lsbCBjaGFuZ2UgdGhlIHByb2plY3RzIE5hbWVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJVcGRhdGVkIG5hbWVcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFwcGVuZENoaWxkKHVwZGF0ZUJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFwcGVuZENoaWxkKGNhbmNlbE5hbWVCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hcHBlbmRDaGlsZCh1cGRhdGVOYW1lSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0gPSB1cGRhdGVOYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkakxpLnRleHRDb250ZW50ID0gdXBkYXRlTmFtZUlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2pMaS5hcHBlbmRDaGlsZChtZW51KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUJ0bnMucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1RhYi5pbnNlcnRCZWZvcmUoZWRpdFByb2pGb3JtLCBhZGpMaS5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vaW5zaWRlIG9mIG1lbnUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSAnRGVsZXRlJztcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtpbmRleD1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltpbmRleD1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2luc2lkZSBvZiBtZW51IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGV0IGNhbmNlbGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsYnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbaW5kZXg9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9idXR0b25zIHB1dCBpbnNpZGUgb2YgZGl2XHJcbiAgICAgICAgICAgICAgICBtZW51QnRucy5hcHBlbmRDaGlsZChlZGl0QnRuKVxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuYXBwZW5kQ2hpbGQoY2FuY2VsYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9idXR0b24gZGl2IGlzIGFkZGVkIGJlZm9yZSBjdXJyZW50IHByb2plY3RzIG5leHQgc2libGluZyBpZTogcmlnaHQgYWZ0ZXIgaXQgICBcclxuICAgICAgICAgICAgICAgIHByb2plY3RzVGFiLmluc2VydEJlZm9yZShtZW51QnRucywgYWRqTGkubmV4dFNpYmxpbmcpIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcHJvakxpLmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgICAgICAgcHJvamVjdHNUYWIuYXBwZW5kQ2hpbGQocHJvakxpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkaW5nIHByb2plY3Qgb3B0aW9ucyB0byB0aGUgdG8tZG8gZm9ybShkcm9wZG93biBtZW51KVxyXG4gICAgdGFza1Byb2plY3QuaW5uZXJIVE1MID0gJzxvcHRpb24+PC9vcHRpb24+JztcclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XHJcbiAgICAgICAgdGFza1Byb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pXHJcblxyXG4gICAgZm9ybS5yZW1vdmUoKVxyXG59KVxyXG5cclxuLy9zdWJtaXQgdG8tZG8gYnV0dG9uXHJcbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGV2ZW50KT0+IHsgLy9zdWJtaXQgdG8tZG8gXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3VG9EbyA9IHRvRG8odGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0R1ZWRhdGUudmFsdWUsIHRhc2tQcmlvcml0eS5jaGVja2VkLCB0YXNrUHJvamVjdC52YWx1ZSlcclxuICAgIHRhc2tMaXN0LnB1c2gobmV3VG9Ebyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICAvL3VzZSBsaXN0IHRvIGNyZWF0ZSBET00gdG8tZG8gZWxlbWVudHNcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykgLy9jb250YWluZXIgZGl2IGZvciB0by1kb1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvZGUnLCBpKSBcclxuICAgICAgICBsZXQgY29udGFpbmVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29udGFpbmVyTGVmdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXgnKVxyXG4gICAgICAgIGxldCBjb250YWluZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyJylcclxuICAgIFxyXG4gICAgICAgIGxldCB0b0RvQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcblxyXG4gICAgICAgIGxldCB0b0RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IHRhc2tMaXN0W2ldLm5hbWU7XHJcblxyXG4gICAgICAgIGxldCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gdGFza0xpc3RbaV0uZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgbGV0IGJvcmRlclN0eWxlID0gJ2JvcmRlcjogNXB4IHNvbGlkJztcclxuICAgICAgICBpZiAodGFza0xpc3RbaV0ucHJpb3JpdHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyByZWQ7JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyBibGFjazsnO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCB0b0RvTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHRvRG9NZW51LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uLzMtZG90cy5wbmcnKSBcclxuICAgICAgICB0b0RvTWVudS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21heC1oZWlnaHQ6IDIwcHg7IG1heC13aWR0aDogMjBweCcpXHJcbiAgICAgICAgdG9Eb01lbnUuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpXHJcbiAgICAgICAgdG9Eb01lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJGT1JNXCIgJiYgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkRJVlwiKXtcclxuICAgICAgICAgICAgICAgIGxldCB0b0RvQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vZGl2IHdoaWNoIHdpbGwgY29udGFpbiBhbGwgMyBtZW51IGJ0bnMgZm9yIHRvLWRvXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NvZGUnLCBpKVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDsnKVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0b0RvRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpIC8vZWRpdCBidXR0b25cclxuICAgICAgICAgICAgICAgIHRvRG9FZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCJcclxuICAgICAgICAgICAgICAgIHRvRG9FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJGT1JNXCIpeyAvL2NoZWNrcyB0byBzZWUgaWYgdGhlIG5leHQgZWxlbWVudCBhZnRlciBjb250YWluZXIgaXMgYSBmb3JtLiBpZiBub3QgaXQgYXBwZW5kcyB0aGUgdG8tZG8gdXBkYXRlIGZvcm0gdG8gdGhlIGJvdHRvbSBvZiB0aGUgdG8tZG8gY29udGVudCBjb250YWluZXIgZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpLy9mb3JtIHRoYXQgd2lsbCB0YWtlIGlucHV0IGFuZCByZXBsYWNlIHRvLWRvIGl0ZW0gaW5mb1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybU5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdTZXQgTmV3IFRhc2sgTmFtZSBIZXJlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJvamVjdC50ZXh0Q29udGVudCA9ICdJcyB0aGlzIHBhcnQgb2YgYSBwcm9qZWN0PydcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByb2plY3QuaW5uZXJIVE1MID0gJzxvcHRpb24+PC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxvcHRpb24+UHJpb3JpdHk8L29wdGlvbj4gPG9wdGlvbj5Ob3QgYSBQcmlvcml0eTwvb3B0aW9uPidcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybUNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybURhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Qcmlvcml0eSlcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVByb2plY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1TdWJtaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1DYW5jZWwpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29kZSB0byBjaGFuZ2Ugb2JqZWN0J3MgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0W2ldLm5hbWUgPSB0b0RvRm9ybU5hbWUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0xpc3RbaV0uZHVlRGF0ZSA9IHRvRG9Gb3JtRGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0b0RvRm9ybVByaW9yaXR5LnZhbHVlID09IFwiTm90IGEgUHJpb3JpdHlcIil7IC8vY2hlY2tzIGlmIHVzZXIgc2VsZWN0ZWQgTm90IHByaW9yaXR5IG9yIHByaW9yaXR5IGFuZCB1c2VzIGlmIHN0YXRtZW50IHRvIHNldCBwcmlvaXJ0eSBzdGF0dXMgdG8gdHJ1ZSBvciBmYWxzZWx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdFtpXS5wcmlvcml0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdFtpXS5wcmlvcml0eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0xpc3RbaV0ucHJvalBhcmVudCA9IHRvRG9Gb3JtUHJvamVjdC52YWx1ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb2RlIHRvIGNoYW5nZSB0aGUgRE9NIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tMaXN0W2ldLmR1ZURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9OYW1lLnRleHRDb250ZW50ID0gdGFza0xpc3RbaV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvcmRlclN0eWxlID0gJ2JvcmRlcjogNXB4IHNvbGlkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tMaXN0W2ldLnByaW9yaXR5ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZSArPSAnIHJlZDsnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgYmxhY2s7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgJHtib3JkZXJTdHlsZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vPGxpPiBib3JkZXIgdG8gaW5kaWNhdGUgcHJpb3JpdHkgbGV2ZWwuIFdpbGwgZG8gdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2J5IGNoZWNraW5nIG9iamVjdHMgcHJpb3JpdHkgc3RhdHVzIGFuZCBhZGRpbmcgY3NzICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5zZXJ0QmVmb3JlKGVkaXRGb3JtLCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbY29kZT1cIiR7aX1cIl1gKS5hcHBlbmRDaGlsZChlZGl0Rm9ybSkgLy9zZWxlY3RzIHRvLWRvIGl0ZW0gbGkgZWxlbWVudCB3aGljaCB3aWxsIGhhdmUgdGhlIGVkaXQgZm9ybSBhcHBlbmRlZCBhdCB0aGUgYm90dG9tXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSAvL2RlbGV0ZSBidXR0b25cclxuICAgICAgICAgICAgICAgIHRvRG9EZWxldGUudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdC5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtjb2RlPVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2NvZGU9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0b0RvQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIHRvRG9DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9FZGl0KVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuYXBwZW5kQ2hpbGQodG9Eb0RlbGV0ZSlcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9DYW5jZWwpXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmluc2VydEJlZm9yZSh0b0RvQnRuc0RpdiwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQodG9Eb0NoZWNrKTtcclxuICAgICAgICBjb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKHRvRG9OYW1lKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQodG9Eb0RhdGUpXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQodG9Eb01lbnUpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyTGVmdCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lclJpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAke2JvcmRlclN0eWxlfSBgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcbn0gXHJcblxyXG4gICAgdGFza0Zvcm0ucmVtb3ZlKClcclxufSlcclxuXHJcblxyXG4vL3NldHRpbmcgdG9kYXlUYWJcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5VGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBuZXcgRGF0ZSh0YXNrTGlzdFtpXS5EYXRlKVxyXG4gICAgICAgIGNvbnN0IHRpbWVEaWZmID0gTWF0aC5hYnModG9kYXkuZ2V0VGltZSgpIC0gaW5wdXREYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgY29uc3QgZGF5SW5NaWxsaXNlY29uZHMgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgICAgIGlmKHRpbWVEaWZmIDw9IGRheUluTWlsbGlzZWNvbmRzKXtcclxuICAgICAgICAgICAgLy9hcHBlbmQgYWxsIHRvLWRvJ3Mgd2l0aGluIGEgZGF5IHRvIHRoZSBjb250ZW50IGRpdlxyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSAvL2NvbnRhaW5lciBkaXYgZm9yIHRvLWRvXHJcbiAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjb2RlJywgaSkgXHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgY29udGFpbmVyTGVmdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXgnKVxyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjb250YWluZXJSaWdodC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXInKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdG9Eb0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxuXHJcbiAgICAgICAgICAgIGxldCB0b0RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSB0YXNrTGlzdFtpXS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gdGFza0xpc3RbaV0uZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBib3JkZXJTdHlsZSA9ICdib3JkZXI6IDVweCBzb2xpZCc7XHJcbiAgICAgICAgICAgIGlmICh0YXNrTGlzdFtpXS5wcmlvcml0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgcmVkOyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgYmxhY2s7JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZCh0b0RvQ2hlY2spO1xyXG4gICAgICAgICAgICBjb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKHRvRG9OYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclJpZ2h0LmFwcGVuZENoaWxkKHRvRG9EYXRlKVxyXG4gICAgICAgICAgICBjb250YWluZXJSaWdodC5hcHBlbmRDaGlsZCh0b0RvTWVudSk7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyTGVmdCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJSaWdodCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAke2JvcmRlclN0eWxlfSBgKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9