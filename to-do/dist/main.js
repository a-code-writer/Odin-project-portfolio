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
const createToDo = (newToDo, i) => { 
    //i was kept as a n argument to use as a unique identifier for each to-do.

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
        //maybe get rid of the [i] part, and just use the value directly. 
        //The loop in the index file will take care of this. I used the [i] in the first place so that every to-do 
        //had it's own 'identifier', so that I could choose specific to-do/s. But now it doesn't make so much sense.
        // Do i need the [i] identifier? Maybe I should look at other peoples solutions. 

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
                        value[i].name = toDoFormName.value
                        value[i].dueDate = toDoFormDate.value
                        if(toDoFormPriority.value == "Not a Priority"){ //checks if user selected Not priority or priority and uses if statment to set prioirty status to true or falsely
                            value[i].priority = false;
                        } else{
                            value[i].priority = true;
                        }
                        value[i].projParent = toDoFormProject.value

                        //code to change the DOM values
                        toDoDate.textContent = value[i].dueDate;
                        toDoName.textContent = value[i].name;
                        let borderStyle = 'border: 5px solid';
                        if (value[i].priority == true) {
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
                    value.splice(i, 1)
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
        // console.log(taskList[i])
    }
    //createToDo needs just one arguments: the the object we want to create a to-do from. Not it's index or
    //array. Soley from the object, it can get the duedate, priority, parent, name. 

    //That just leaves the index. How do i mark each to-do so it's unique. This is key because it's how the
    //buttons will target what to-do to edit/delete. 

    //Do i put that code inside the createToDo function? 

    //maybe: on submit => clear DOM and delete all current todos => loop thru taskList => 
    // call createToDo on every object inside [createToDO has 3 arguments: the list ]=> create empty div => add index attribute to div =>
    //create DOM elements inside div and append them to div => fill empty elements with values from current object 
    // => append div to content div

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDLFFBQVEseURBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsY0FBYztBQUNkLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGdDQUFnQyxFQUFFLGFBQWE7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tcHJvai8uL3NyYy9jcmVhdGUtdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLXByb2ovLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlVG9EbyA9IChuZXdUb0RvLCBpKSA9PiB7IFxyXG4gICAgLy9pIHdhcyBrZXB0IGFzIGEgbiBhcmd1bWVudCB0byB1c2UgYXMgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB0by1kby5cclxuXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSAvL2NvbnRhaW5lciBkaXYgZm9yIHRvLWRvXHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29kZScsIGkpIFxyXG4gICAgICAgIGxldCBjb250YWluZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb250YWluZXJMZWZ0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleCcpXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb250YWluZXJSaWdodC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXInKVxyXG4gICAgXHJcbiAgICAgICAgbGV0IHRvRG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxuXHJcbiAgICAgICAgbGV0IHRvRG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRvRG9OYW1lLnRleHRDb250ZW50ID0gbmV3VG9Eby5uYW1lO1xyXG4gICAgICAgIC8vbWF5YmUgZ2V0IHJpZCBvZiB0aGUgW2ldIHBhcnQsIGFuZCBqdXN0IHVzZSB0aGUgdmFsdWUgZGlyZWN0bHkuIFxyXG4gICAgICAgIC8vVGhlIGxvb3AgaW4gdGhlIGluZGV4IGZpbGUgd2lsbCB0YWtlIGNhcmUgb2YgdGhpcy4gSSB1c2VkIHRoZSBbaV0gaW4gdGhlIGZpcnN0IHBsYWNlIHNvIHRoYXQgZXZlcnkgdG8tZG8gXHJcbiAgICAgICAgLy9oYWQgaXQncyBvd24gJ2lkZW50aWZpZXInLCBzbyB0aGF0IEkgY291bGQgY2hvb3NlIHNwZWNpZmljIHRvLWRvL3MuIEJ1dCBub3cgaXQgZG9lc24ndCBtYWtlIHNvIG11Y2ggc2Vuc2UuXHJcbiAgICAgICAgLy8gRG8gaSBuZWVkIHRoZSBbaV0gaWRlbnRpZmllcj8gTWF5YmUgSSBzaG91bGQgbG9vayBhdCBvdGhlciBwZW9wbGVzIHNvbHV0aW9ucy4gXHJcblxyXG4gICAgICAgIGxldCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gbmV3VG9Eby5kdWVEYXRlO1xyXG5cclxuICAgICAgICBsZXQgYm9yZGVyU3R5bGUgPSAnYm9yZGVyOiA1cHggc29saWQnO1xyXG4gICAgICAgIGlmIChuZXdUb0RvLnByaW9yaXR5ID09IHRydWUpIHtcclxuICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgcmVkOyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgYmxhY2s7JztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgdG9Eb01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICB0b0RvTWVudS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi8zLWRvdHMucG5nJykgXHJcbiAgICAgICAgdG9Eb01lbnUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXgtaGVpZ2h0OiAyMHB4OyBtYXgtd2lkdGg6IDIwcHgnKVxyXG4gICAgICAgIHRvRG9NZW51LnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKVxyXG4gICAgICAgIHRvRG9NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZighY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyB8fCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRk9STVwiICYmIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJESVZcIil7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9Eb0J0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSAvL2RpdiB3aGljaCB3aWxsIGNvbnRhaW4gYWxsIDMgbWVudSBidG5zIGZvciB0by1kb1xyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuc2V0QXR0cmlidXRlKCdjb2RlJywgaSlcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBlbmQ7JylcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9Eb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSAvL2VkaXQgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0b0RvRWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiXHJcbiAgICAgICAgICAgICAgICB0b0RvRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyB8fCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRk9STVwiKXsgLy9jaGVja3MgdG8gc2VlIGlmIHRoZSBuZXh0IGVsZW1lbnQgYWZ0ZXIgY29udGFpbmVyIGlzIGEgZm9ybS4gaWYgbm90IGl0IGFwcGVuZHMgdGhlIHRvLWRvIHVwZGF0ZSBmb3JtIHRvIHRoZSBib3R0b20gb2YgdGhlIHRvLWRvIGNvbnRlbnQgY29udGFpbmVyIGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKS8vZm9ybSB0aGF0IHdpbGwgdGFrZSBpbnB1dCBhbmQgcmVwbGFjZSB0by1kbyBpdGVtIGluZm9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1OYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2V0IE5ldyBUYXNrIE5hbWUgSGVyZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByb2plY3QudGV4dENvbnRlbnQgPSAnSXMgdGhpcyBwYXJ0IG9mIGEgcHJvamVjdD8nXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcm9qZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uPjwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdDtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByaW9yaXR5LmlubmVySFRNTCA9ICc8b3B0aW9uPlByaW9yaXR5PC9vcHRpb24+IDxvcHRpb24+Tm90IGEgUHJpb3JpdHk8L29wdGlvbj4nXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1EYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1TdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtQ2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybU5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1EYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtUHJpb3JpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Qcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtU3VibWl0KVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtQ2FuY2VsKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvZGUgdG8gY2hhbmdlIG9iamVjdCdzIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtpXS5uYW1lID0gdG9Eb0Zvcm1OYW1lLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2ldLmR1ZURhdGUgPSB0b0RvRm9ybURhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9Eb0Zvcm1Qcmlvcml0eS52YWx1ZSA9PSBcIk5vdCBhIFByaW9yaXR5XCIpeyAvL2NoZWNrcyBpZiB1c2VyIHNlbGVjdGVkIE5vdCBwcmlvcml0eSBvciBwcmlvcml0eSBhbmQgdXNlcyBpZiBzdGF0bWVudCB0byBzZXQgcHJpb2lydHkgc3RhdHVzIHRvIHRydWUgb3IgZmFsc2VseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaV0ucHJpb3JpdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaV0ucHJpb3JpdHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2ldLnByb2pQYXJlbnQgPSB0b0RvRm9ybVByb2plY3QudmFsdWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29kZSB0byBjaGFuZ2UgdGhlIERPTSB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSB2YWx1ZVtpXS5kdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IHZhbHVlW2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib3JkZXJTdHlsZSA9ICdib3JkZXI6IDVweCBzb2xpZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVtpXS5wcmlvcml0eSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyByZWQ7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZSArPSAnIGJsYWNrOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYCR7Ym9yZGVyU3R5bGV9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAvLzxsaT4gYm9yZGVyIHRvIGluZGljYXRlIHByaW9yaXR5IGxldmVsLiBXaWxsIGRvIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9ieSBjaGVja2luZyBvYmplY3RzIHByaW9yaXR5IHN0YXR1cyBhbmQgYWRkaW5nIGNzcyAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmluc2VydEJlZm9yZShlZGl0Rm9ybSwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2NvZGU9XCIke2l9XCJdYCkuYXBwZW5kQ2hpbGQoZWRpdEZvcm0pIC8vc2VsZWN0cyB0by1kbyBpdGVtIGxpIGVsZW1lbnQgd2hpY2ggd2lsbCBoYXZlIHRoZSBlZGl0IGZvcm0gYXBwZW5kZWQgYXQgdGhlIGJvdHRvbVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0b0RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgLy9kZWxldGUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0b0RvRGVsZXRlLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICAgICAgICAgICAgICAgIHRvRG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbY29kZT1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltjb2RlPVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9Eb0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICB0b0RvQ2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcclxuICAgICAgICAgICAgICAgIHRvRG9DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRWRpdClcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9EZWxldGUpXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5hcHBlbmRDaGlsZCh0b0RvQ2FuY2VsKVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbnNlcnRCZWZvcmUodG9Eb0J0bnNEaXYsIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKHRvRG9DaGVjayk7XHJcbiAgICAgICAgY29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZCh0b0RvTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lclJpZ2h0LmFwcGVuZENoaWxkKHRvRG9EYXRlKVxyXG4gICAgICAgIGNvbnRhaW5lclJpZ2h0LmFwcGVuZENoaWxkKHRvRG9NZW51KTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckxlZnQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJSaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgJHtib3JkZXJTdHlsZX0gYCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9EbzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVUb0RvIGZyb20gXCIuL2NyZWF0ZS10by1kb1wiO1xyXG5cclxuXHJcbmxldCBwcm9qZWN0cyA9IFtdO1xyXG5sZXQgdGFza0xpc3QgPSBbXTtcclxubGV0IHByb2plY3RzVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzVGFiJykgLy9zaWRlYmFyXHJcbmxldCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJykgXHJcblxyXG5mdW5jdGlvbiB0b0RvKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qUGFyZW50KXsgLy90by1kbyBvYmplY3RcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIHByb2pQYXJlbnQgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL3Byb2plY3QgZm9ybVxyXG5sZXQgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5wcm9qTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgTmFtZScpXHJcblxyXG5sZXQgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcblxyXG5sZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcclxuY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuXHJcbi8vQXBwZW5kcyB0byBwcm9qZWN0IGZvcm0gdG8gRE9NXHJcbmxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyBcclxuZm9ybS5hcHBlbmRDaGlsZChwcm9qTmFtZSk7XHJcbmZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG5cclxuLy9hZGQgcHJvamVjdCBidG5cclxubGV0IHByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ0bicpXHJcbnByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICBcclxufSlcclxuXHJcblxyXG5cclxuLy9jYW5jZWwgYnV0dG9uXHJcbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgZm9ybS5yZW1vdmUoKTtcclxufSlcclxuXHJcblxyXG5cclxuLy9Uby1kbyBOYW1lXHJcbmxldCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSBcclxudGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUYXNrIE5hbWVcIik7XHJcblxyXG4vL3N1Ym1pdCB0by1kbyBidG5cclxubGV0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxudGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbnRhc2tTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBUYXNrXCJcclxuXHJcbi8vdG8tZG8gY2FuY2VsXHJcbmxldCB0YXNrQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbnRhc2tDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcbnRhc2tDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0YXNrRm9ybS5yZW1vdmUoKVxyXG59KVxyXG5cclxuLy90by1kbyBwcmlvcml0eSBjaGVja2JveFxyXG5sZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG50YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxudGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktY2hlY2snKVxyXG5cclxuLy9sYWJlbCBmb3IgcHJpb3JpdHkgY2hlY2tib3hcclxubGV0IHRhc2tQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxudGFza1ByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHktY2hlY2snKVxyXG50YXNrUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSXMgdGhpcyBhIHByaW9yaXR5IHRhc2s/XCJcclxuXHJcbi8vdG8tZG8gY2FsZW5kZXIgc2VsZWN0b3JcclxubGV0IHRhc2tEdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG50YXNrRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXHJcblxyXG5sZXQgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJXaGVuIGlzIHRoaXMgZHVlP1wiXHJcblxyXG5sZXQgdGFza1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG5sZXQgdGFza1Byb2plY3RsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbnRhc2tQcm9qZWN0bGFiZWwudGV4dENvbnRlbnQgPSBcIkRvZXMgdGhpcyBiZWxvbmcgaW4gYSBwcm9qZWN0P1wiXHJcblxyXG5cclxuLy90by1kbyBmb3JtIGlzIGFzc2VtYmxlZFxyXG5sZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dClcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlMYWJlbClcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0R1ZWRhdGUpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbClcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1Byb2plY3QpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0bGFiZWwpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tTdWJtaXQpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tDYW5jZWwpXHJcblxyXG4vL2FkZCB0YXNrIGJ0biAoYWRkcyB0by1kbyBmb3JtIHRvIERPTSlcclxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGFza0Zvcm0pXHJcbn0pXHJcblxyXG4vL3N1Ym1pdCBwcm9qZWN0IGJ1dHRvblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHByb2plY3RzLnB1c2gocHJvak5hbWUudmFsdWUpOyAvL2FkZCBpbnB1dCB0byBsaXN0XHJcbiAgICBwcm9qZWN0c1RhYi5pbm5lckhUTUwgPSBcIlwiOyAvL3Jlc2V0cyBzaWRlYmFyIGNvbnRlbnRcclxuICAgIFxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7IC8vYWRkcyBhbGwgY3VycmVudCBwcm9qZWN0cyBpbiBhcnJheSB0byBzaWRlYmFyXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHByb2pMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykgXHJcbiAgICAgICAgcHJvakxpLmlubmVyVGV4dCA9IHByb2plY3RzW2ldIFxyXG4gICAgICAgIHByb2pMaS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSk7IC8vSG93IEkgd2lsbCBiZSBhYmxlIHRvIGNob29zZSBhbmQgZWRpdCBzcGVjaWZpYyBwcm9qZWN0c1xyXG5cclxuICAgICAgICBwcm9qTGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7ICAvL2NsaWNraW5nIG9uIHByb2pMaSB3aWxsIHNob3cgYWxsIHRhc2tzIHRoYXQgYXJlIHJlbGF0ZWQgd2l0aCB0aGF0IHByb2plY3RcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0ZXAnKVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7IC8vY2xlYXJzIGNvbnRlbnRcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0YXNrTGlzdC5sZW5ndGg7IGorKyl7ICAgICAgIC8vbG9vcHMgdGhyb3VnaCB0YXNrTGlzdCB0byBmaW5kIHRhc2tzIHRoYXQgYXJlIHJlbGF0ZWQgdG8gdGhlIGNsaWNrZWQgcHJvakxpXHJcbiAgICAgICAgICAgICAgICBpZihwcm9qTGkuaW5uZXJUZXh0ID0gdGFza0xpc3Rbal0ucHJvalBhcmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0ZXAxJylcclxuICAgICAgICAgICAgICAgICAgICAvL2hhdmUgdG8gY3JlYXRlIGEgbmV3IGxpIGZyb20gc2NyYXRjaCBmb3IgZWFjaCB0YXNrIHRoYXQgaXMgcmVsYXRlZCB0byB0aGUgY2xpY2tlZCBwcm9qZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy9vciBzdG9yZSB0aGUgZmlsdGVyZWQgdGFza3MgaW4gYW4gYXJyYXkgYW5kIHRoZW4gbG9vcCB0aHJvdWdoIGFycmF5IHRvIGNyZWF0ZSB0by1kb3NcclxuICAgICAgICAgICAgICAgICAgICAvL3N0b3JpbmcgaW4gYXJyYXkgbWlnaHQgYmUgZWFzaWVyIGJlY2F1c2UgSSBjYW4gdXNlIHRoZSBpbmRleCBhdHRyaWJ1dGVzIGFzIHBhcmFtZXRlcnMgZm9yIGNyZWF0ZXRvRG8gZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbY29kZT1cIiR7an1cIl1gKSkgLy9jbGVhcmluZyBpdCBiZWZvcmVoYW5kIHNvaXQgZG9lc24ndCBleGlzdCBhbnltb3JlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgLy8zIGRvdHMgYXQgZW5kIG9mIHByb2plY3QgZGl2XHJcbiAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi8zLWRvdHMucG5nJylcclxuICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKSAvL21ha2luZyBzdXJlIGVhY2ggbWVudSBidXR0b24gY29ycmVzcG9uZHMgdG8gaXRzIG1hdGNoaW5nIHByb2plY3RcclxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWRqTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtpbmRleD1cIiR7aX1cIl1gKS8vYWRqTGkgaXMgdGhlIGNvcnJlc3BvbmRpbmcgcHJvamVjdFxyXG4gICAgICAgICAgICBpZighYWRqTGkubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGFkakxpLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkRJVlwiKXsgLy9jaGVja3MgaWYgcHJvakxpIGhhcyBkaXYgc2libGluZyBhbHJlYWR5XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVudUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvLyBhbGwgYnV0dG9ucyB3aWxsIGJlIHN0b3JlZCBpbiBhIHNlcGVyYXRlIGRpdlxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9pbnNpZGUgbWVudSBidXR0b25cclxuICAgICAgICAgICAgICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCJFZGl0XCI7XHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0UHJvakZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbmNlbE5hbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdG4udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsTmFtZUJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9idXR0b24gaW5zaWRlIG9mIEVkaXQgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsTmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0ucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2luc2lkZSBvZiBlZGl0IGJ1dHRvbiwgd2lsbCBjaGFuZ2UgdGhlIHByb2plY3RzIE5hbWVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJVcGRhdGVkIG5hbWVcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFwcGVuZENoaWxkKHVwZGF0ZUJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFwcGVuZENoaWxkKGNhbmNlbE5hbWVCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hcHBlbmRDaGlsZCh1cGRhdGVOYW1lSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0gPSB1cGRhdGVOYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkakxpLnRleHRDb250ZW50ID0gdXBkYXRlTmFtZUlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2pMaS5hcHBlbmRDaGlsZChtZW51KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUJ0bnMucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1RhYi5pbnNlcnRCZWZvcmUoZWRpdFByb2pGb3JtLCBhZGpMaS5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vaW5zaWRlIG9mIG1lbnUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSAnRGVsZXRlJztcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtpbmRleD1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltpbmRleD1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2luc2lkZSBvZiBtZW51IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGV0IGNhbmNlbGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsYnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbaW5kZXg9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9idXR0b25zIHB1dCBpbnNpZGUgb2YgZGl2XHJcbiAgICAgICAgICAgICAgICBtZW51QnRucy5hcHBlbmRDaGlsZChlZGl0QnRuKVxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuYXBwZW5kQ2hpbGQoY2FuY2VsYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9idXR0b24gZGl2IGlzIGFkZGVkIGJlZm9yZSBjdXJyZW50IHByb2plY3RzIG5leHQgc2libGluZyBpZTogcmlnaHQgYWZ0ZXIgaXQgICBcclxuICAgICAgICAgICAgICAgIHByb2plY3RzVGFiLmluc2VydEJlZm9yZShtZW51QnRucywgYWRqTGkubmV4dFNpYmxpbmcpIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcHJvakxpLmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgICAgICAgcHJvamVjdHNUYWIuYXBwZW5kQ2hpbGQocHJvakxpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkaW5nIHByb2plY3Qgb3B0aW9ucyB0byB0aGUgdG8tZG8gZm9ybShkcm9wZG93biBtZW51KVxyXG4gICAgdGFza1Byb2plY3QuaW5uZXJIVE1MID0gJzxvcHRpb24+PC9vcHRpb24+JztcclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XHJcbiAgICAgICAgdGFza1Byb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pXHJcblxyXG4gICAgZm9ybS5yZW1vdmUoKVxyXG59KVxyXG5cclxuLy9zdWJtaXQgdG8tZG8gYnV0dG9uXHJcbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGV2ZW50KT0+IHsgLy9zdWJtaXQgdG8tZG8gXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3VG9EbyA9IHRvRG8odGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0R1ZWRhdGUudmFsdWUsIHRhc2tQcmlvcml0eS5jaGVja2VkLCB0YXNrUHJvamVjdC52YWx1ZSlcclxuICAgIHRhc2tMaXN0LnB1c2gobmV3VG9Ebyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICAvL3VzZSBsaXN0IHRvIGNyZWF0ZSBET00gdG8tZG8gZWxlbWVudHNcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSlcclxuICAgIH1cclxuICAgIC8vY3JlYXRlVG9EbyBuZWVkcyBqdXN0IG9uZSBhcmd1bWVudHM6IHRoZSB0aGUgb2JqZWN0IHdlIHdhbnQgdG8gY3JlYXRlIGEgdG8tZG8gZnJvbS4gTm90IGl0J3MgaW5kZXggb3JcclxuICAgIC8vYXJyYXkuIFNvbGV5IGZyb20gdGhlIG9iamVjdCwgaXQgY2FuIGdldCB0aGUgZHVlZGF0ZSwgcHJpb3JpdHksIHBhcmVudCwgbmFtZS4gXHJcblxyXG4gICAgLy9UaGF0IGp1c3QgbGVhdmVzIHRoZSBpbmRleC4gSG93IGRvIGkgbWFyayBlYWNoIHRvLWRvIHNvIGl0J3MgdW5pcXVlLiBUaGlzIGlzIGtleSBiZWNhdXNlIGl0J3MgaG93IHRoZVxyXG4gICAgLy9idXR0b25zIHdpbGwgdGFyZ2V0IHdoYXQgdG8tZG8gdG8gZWRpdC9kZWxldGUuIFxyXG5cclxuICAgIC8vRG8gaSBwdXQgdGhhdCBjb2RlIGluc2lkZSB0aGUgY3JlYXRlVG9EbyBmdW5jdGlvbj8gXHJcblxyXG4gICAgLy9tYXliZTogb24gc3VibWl0ID0+IGNsZWFyIERPTSBhbmQgZGVsZXRlIGFsbCBjdXJyZW50IHRvZG9zID0+IGxvb3AgdGhydSB0YXNrTGlzdCA9PiBcclxuICAgIC8vIGNhbGwgY3JlYXRlVG9EbyBvbiBldmVyeSBvYmplY3QgaW5zaWRlIFtjcmVhdGVUb0RPIGhhcyAzIGFyZ3VtZW50czogdGhlIGxpc3QgXT0+IGNyZWF0ZSBlbXB0eSBkaXYgPT4gYWRkIGluZGV4IGF0dHJpYnV0ZSB0byBkaXYgPT5cclxuICAgIC8vY3JlYXRlIERPTSBlbGVtZW50cyBpbnNpZGUgZGl2IGFuZCBhcHBlbmQgdGhlbSB0byBkaXYgPT4gZmlsbCBlbXB0eSBlbGVtZW50cyB3aXRoIHZhbHVlcyBmcm9tIGN1cnJlbnQgb2JqZWN0IFxyXG4gICAgLy8gPT4gYXBwZW5kIGRpdiB0byBjb250ZW50IGRpdlxyXG5cclxuICAgIHRhc2tGb3JtLnJlbW92ZSgpXHJcbn0pXHJcblxyXG5cclxuLy9zZXR0aW5nIHRvZGF5VGFiXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVRhYicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gbmV3IERhdGUodGFza0xpc3RbaV0uRGF0ZSlcclxuICAgICAgICBjb25zdCB0aW1lRGlmZiA9IE1hdGguYWJzKHRvZGF5LmdldFRpbWUoKSAtIGlucHV0RGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGNvbnN0IGRheUluTWlsbGlzZWNvbmRzID0gMjQgKiA2MCAqIDYwICogMTAwMDtcclxuICAgICAgICBpZih0aW1lRGlmZiA8PSBkYXlJbk1pbGxpc2Vjb25kcyl7XHJcbiAgICAgICAgICAgIC8vYXBwZW5kIGFsbCB0by1kbydzIHdpdGhpbiBhIGRheSB0byB0aGUgY29udGVudCBkaXZcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykgLy9jb250YWluZXIgZGl2IGZvciB0by1kb1xyXG4gICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY29kZScsIGkpIFxyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckxlZnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4JylcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgY29udGFpbmVyUmlnaHQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyJylcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHRvRG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcblxyXG4gICAgICAgICAgICBsZXQgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHRvRG9OYW1lLnRleHRDb250ZW50ID0gdGFza0xpc3RbaV0ubmFtZTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICB0b0RvRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tMaXN0W2ldLmR1ZURhdGU7XHJcblxyXG4gICAgICAgICAgICBsZXQgYm9yZGVyU3R5bGUgPSAnYm9yZGVyOiA1cHggc29saWQnO1xyXG4gICAgICAgICAgICBpZiAodGFza0xpc3RbaV0ucHJpb3JpdHkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBib3JkZXJTdHlsZSArPSAnIHJlZDsnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBib3JkZXJTdHlsZSArPSAnIGJsYWNrOyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQodG9Eb0NoZWNrKTtcclxuICAgICAgICAgICAgY29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZCh0b0RvTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXJSaWdodC5hcHBlbmRDaGlsZCh0b0RvRGF0ZSlcclxuICAgICAgICAgICAgY29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQodG9Eb01lbnUpO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckxlZnQpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyUmlnaHQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgJHtib3JkZXJTdHlsZX0gYCk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==