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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(_index_js__WEBPACK_IMPORTED_MODULE_0__.projName.value); //add input to list
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
    localStorage.setItem('projects', JSON.stringify(projects[0]))
    ;(0,_create_project__WEBPACK_IMPORTED_MODULE_1__["default"])()
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
        
        //clear localStorage 'tasklist'
        //foreach thru list -> setItem as 'object_X' using to-do.name as x -> key = json.stringify
    }

    taskList.forEach(function(todo) {
        localStorage.setItem('task_' + todo.name, JSON.stringify(todo))
    })


    taskForm.remove()
})


//when page loads, to-dos are loaded
window.onload = () => { 
    //to-do part
    localStorage.clear()
    let storedToDos = localStorage.getItem('taskList'); //retrieves to-do from local storage
    let listOfToDos = JSON.parse(storedToDos); //parses to-do
    let arrayOfToDos = []; //empty array for retrieved to-dos to be placed in
    arrayOfToDos.push(listOfToDos) //adds to-do to array
    
    if (localStorage.length == 0) {
        console.log('no to-dos')
    // }else{
    //     for(let i = 0; i < arrayOfToDos.length; i++){ //loops through to-do array using createToDo function
    //         createToDo(arrayOfToDos[i], i) 
    //         console.log('hello')
    // }
    
}

    //project part
    let storedProjects = localStorage.getItem('projects'); //retrieves project from local storage
    let listOfProjects = JSON.parse(storedProjects); //parses project
    let arrayOfProjects = []; //empty array for retrieved projects to be placed in
    arrayOfProjects.push(listOfProjects) //adds project to array
    
    for(let i = 0; i < arrayOfProjects.length; i++){ //loops through project array using createProject function
        (0,_create_project__WEBPACK_IMPORTED_MODULE_1__["default"])(arrayOfProjects[i], i) 
    }


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



//I have to create my todos and projs from localstorage only basically because if I don't the code
//is just going to clear the content and it will only create the to-do's that are made during the current
//session. The stored to-dos are populating only on the initial pageload, after creating a new one, the 
//content is cleared via createtodo.js and then the only todos being created are the ones in taskList.

//So either change my createToDo.js code to source from localstorage and on submit store the todos in local
//and create any new todos from there, or, I retroactively add any old todos already in localstorage from
//any previous sessions and add them to the taskList on submit if they;re not already there.

//I think that the second option is better. Adding to-dos from local to taskList, shouldnt be too bad.
//It just means that on submit of a new to-do. I have to look at local storage, parse the objects, and
//push them to the taskList.

//but first the other problem = populating the DOM on the initial load with previous to-dos and projs.
//and storing them in localstorage

//THe problem is that it's not using all of the to-dos and projs that are stored in localstorage, just the
//last one in the list

//so other people are using localstorage to store both their to-dos and projs. WHat I saw in one of them
//was that they used arrays to store both to-dos and projs. whta was key was that objs used the identifier
//'dataproject: 0' as markers that they are to-dos while arrays used 'dataproject: 1'. Now the question 
//becomes how do I add those markers to the objs?

//I add them on submit? 


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tcHJvai8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1wcm9qLy4vc3JjL2NyZWF0ZS10by1kby5qcyIsIndlYnBhY2s6Ly90by1kby1wcm9qLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdHMsIHByb2pOYW1lLCB0YXNrUHJvamVjdCwgZm9ybSwgdGFza0xpc3QgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcclxuICAgIHByb2plY3RzLnB1c2gocHJvak5hbWUudmFsdWUpOyAvL2FkZCBpbnB1dCB0byBsaXN0XHJcbiAgICBwcm9qZWN0c1RhYi5pbm5lckhUTUwgPSBcIlwiOyAvL3Jlc2V0cyBzaWRlYmFyIGNvbnRlbnRcclxuICAgIFxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKyl7IC8vYWRkcyBhbGwgY3VycmVudCBwcm9qZWN0cyBpbiBhcnJheSB0byBzaWRlYmFyXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHByb2pMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykgXHJcbiAgICAgICAgcHJvakxpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlLXRhYicpXHJcbiAgICAgICAgcHJvakxpLmlubmVyVGV4dCA9IHByb2plY3RzW2ldIFxyXG4gICAgICAgIHByb2pMaS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSk7IC8vSG93IEkgd2lsbCBiZSBhYmxlIHRvIGNob29zZSBhbmQgZWRpdCBzcGVjaWZpYyBwcm9qZWN0c1xyXG5cclxuICAgICAgICBwcm9qTGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7ICAvL2NsaWNraW5nIG9uIHByb2pMaSB3aWxsIHNob3cgYWxsIHRhc2tzIHRoYXQgYXJlIHJlbGF0ZWQgd2l0aCB0aGF0IHByb2plY3RcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiOyAvL2NsZWFycyBjb250ZW50XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGFza0xpc3QubGVuZ3RoOyBqKyspeyAgIC8vbG9vcHMgdGhyb3VnaCB0YXNrTGlzdCB0byBmaW5kIHRhc2tzIHRoYXQgYXJlIHJlbGF0ZWQgdG8gdGhlIGNsaWNrZWQgcHJvakxpXHJcbiAgICAgICAgICAgICAgICBpZih0YXNrTGlzdFtqXS5wcm9qUGFyZW50ID09IHByb2pMaS5pbm5lclRleHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRvRG8odGFza0xpc3Rbal0sIGkpXHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IC8vMyBkb3RzIGF0IGVuZCBvZiBwcm9qZWN0IGRpdlxyXG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vMy1kb3RzLnBuZycpXHJcbiAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSkgLy9tYWtpbmcgc3VyZSBlYWNoIG1lbnUgYnV0dG9uIGNvcnJlc3BvbmRzIHRvIGl0cyBtYXRjaGluZyBwcm9qZWN0XHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFkakxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbaW5kZXg9XCIke2l9XCJdYCkvL2FkakxpIGlzIHRoZSBjb3JyZXNwb25kaW5nIHByb2plY3RcclxuICAgICAgICAgICAgaWYoIWFkakxpLm5leHRFbGVtZW50U2libGluZyB8fCBhZGpMaS5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJESVZcIil7IC8vY2hlY2tzIGlmIHByb2pMaSBoYXMgZGl2IHNpYmxpbmcgYWxyZWFkeVxyXG4gICAgICAgICAgICAgICAgbGV0IG1lbnVCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7Ly8gYWxsIGJ1dHRvbnMgd2lsbCBiZSBzdG9yZWQgaW4gYSBzZXBlcmF0ZSBkaXZcclxuICAgICAgICAgICAgICAgIG1lbnVCdG5zLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vaW5zaWRlIG1lbnUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xyXG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdFByb2pGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYW5jZWxOYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnRuLnRleHRDb250ZW50ID0gXCJVcGRhdGVcIjtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbE5hbWVCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vYnV0dG9uIGluc2lkZSBvZiBFZGl0IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbE5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pbnNpZGUgb2YgZWRpdCBidXR0b24sIHdpbGwgY2hhbmdlIHRoZSBwcm9qZWN0cyBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiVXBkYXRlZCBuYW1lXCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hcHBlbmRDaGlsZCh1cGRhdGVCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxOYW1lQnRuKTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0uYXBwZW5kQ2hpbGQodXBkYXRlTmFtZUlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldID0gdXBkYXRlTmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGpMaS50ZXh0Q29udGVudCA9IHVwZGF0ZU5hbWVJbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qTGkuYXBwZW5kQ2hpbGQobWVudSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVCdG5zLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNUYWIuaW5zZXJ0QmVmb3JlKGVkaXRQcm9qRm9ybSwgYWRqTGkubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2luc2lkZSBvZiBtZW51IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uaW5uZXJUZXh0ID0gJ0RlbGV0ZSc7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGkpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbaW5kZXg9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbaW5kZXg9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9pbnNpZGUgb2YgbWVudSBidXR0b25cclxuICAgICAgICAgICAgICAgIGxldCBjYW5jZWxidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIGNhbmNlbGJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJ1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2luZGV4PVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vYnV0dG9ucyBwdXQgaW5zaWRlIG9mIGRpdlxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bilcclxuICAgICAgICAgICAgICAgIG1lbnVCdG5zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bilcclxuICAgICAgICAgICAgICAgIG1lbnVCdG5zLmFwcGVuZENoaWxkKGNhbmNlbGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vYnV0dG9uIGRpdiBpcyBhZGRlZCBiZWZvcmUgY3VycmVudCBwcm9qZWN0cyBuZXh0IHNpYmxpbmcgaWU6IHJpZ2h0IGFmdGVyIGl0ICAgXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1RhYi5pbnNlcnRCZWZvcmUobWVudUJ0bnMsIGFkakxpLm5leHRTaWJsaW5nKSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHByb2pMaS5hcHBlbmRDaGlsZChtZW51KVxyXG4gICAgICAgIHByb2plY3RzVGFiLmFwcGVuZENoaWxkKHByb2pMaSlcclxuICAgIH1cclxuXHJcbiAgICAvL2FkZGluZyBwcm9qZWN0IG9wdGlvbnMgdG8gdGhlIHRvLWRvIGZvcm0oZHJvcGRvd24gbWVudSlcclxuICAgIHRhc2tQcm9qZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uPjwvb3B0aW9uPic7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdDtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRhc2tQcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KVxyXG5cclxuICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpOyBcclxuXHJcbiAgICBmb3JtLnJlbW92ZSgpXHJcbn1cclxuXHJcbiBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3QiLCJpbXBvcnQgdGFza0xpc3QgZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5cclxuY29uc3QgY3JlYXRlVG9EbyA9IChuZXdUb0RvLCBpKSA9PiB7IFxyXG4gICAgLy9pIHdhcyBrZXB0IGFzIGEgbiBhcmd1bWVudCB0byB1c2UgYXMgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB0by1kby5cclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpIC8vY29udGFpbmVyIGRpdiBmb3IgdG8tZG9cclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjb2RlJywgaSkgXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnRhaW5lckxlZnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBnYXA6IDVweDsgbWFyZ2luLWxlZnQ6IDVweCcpXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb250YWluZXJSaWdodC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXInKVxyXG4gICAgXHJcbiAgICAgICAgLy9UTy1ETyBDSEVDS0JPWFxyXG4gICAgICAgIGxldCB0b0RvQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIHRvRG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL3VuY2hlY2tlZC5wbmcnKVxyXG4gICAgICAgIHRvRG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21heC1oZWlnaHQ6IDIwcHg7IG1heC13aWR0aDogMjBweDsgYWxpZ24tc2VsZjogY2VudGVyJylcclxuICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpXHJcbiAgICAgICAgdG9Eb0NoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0b0RvQ2hlY2suZ2V0QXR0cmlidXRlKCdzcmMnKSA9PSAnLi91bmNoZWNrZWQucG5nJyl7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9jaGVja2VkLnBuZycpXHJcbiAgICAgICAgICAgICAgICBuZXdUb0RvLnN0YXR1cyA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vdW5jaGVja2VkLnBuZycpXHJcbiAgICAgICAgICAgICAgICBuZXdUb0RvLnN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vVE8tRE8gTkFNRSBFTEVNRU5UXHJcbiAgICAgICAgbGV0IHRvRG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRvRG9OYW1lLnRleHRDb250ZW50ID0gbmV3VG9Eby5uYW1lOyBcclxuXHJcbiAgICAgICAgLy9UTy1ETyBOT1RFUyBFTEVNRU5UXHJcbiAgICAgICAgbGV0IHRvRG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICB0b0RvTm90ZXMudGV4dENvbnRlbnQgPSBuZXdUb0RvLm5vdGVzO1xyXG4gICAgICAgIHRvRG9OYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57IC8vb24gY2xpY2tpbmcgdGhlIHAgZWxlbWVudCwgdGhlIG5vdGVzIHNlY3Rpb24gd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgYm90dG9tIG9mIHRoZSB0by1kb1xyXG4gICAgICAgICAgICBpZighY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyB8fCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiVEVYVEFSRUFcIiAmJiBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRElWXCIgJiYgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkZPUk1cIil7IC8vY2hlY2sgaWYgdGhlcmUgaXMgYWxyZWFkeSBhIG5vdGVzIHNlY3Rpb24sIG5vIGR1cGxpY2F0ZXNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGRpbmcgbm90ZXMnKVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbnNlcnRCZWZvcmUodG9Eb05vdGVzLCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lID09PSBcIlRFWFRBUkVBXCIpeyAvL2lmIHRoZXJlIGlzIGFscmVhZHkgYSBub3RlcyBzZWN0aW9uLCByZW1vdmUgaXRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmluZyBub3RlcycpXHJcbiAgICAgICAgICAgICAgICB0b0RvTm90ZXMucmVtb3ZlKClcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvL1RPLURPIERBVEUgRUxFTUVOVFxyXG4gICAgICAgIGxldCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gbmV3VG9Eby5kdWVEYXRlO1xyXG5cclxuICAgICAgICAvL0JPUkRFUiBGT1IgVE8tRE8sIENIQU5HRVMgQkFTRUQgT0ZGIFBSSU9SSVRZXHJcbiAgICAgICAgbGV0IGJvcmRlclN0eWxlID0gJ2JvcmRlci1sZWZ0OiA1cHggc29saWQnO1xyXG4gICAgICAgIGlmIChuZXdUb0RvLnByaW9yaXR5ID09ICdZZXMnKSB7XHJcbiAgICAgICAgICBib3JkZXJTdHlsZSArPSAnIHJlZDsnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBib3JkZXJTdHlsZSArPSAnIGJsYWNrOyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLzMgRE9UUyBBVCBFTkQgT0YgVE8tRE9cclxuICAgICAgICBsZXQgdG9Eb01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICB0b0RvTWVudS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi8zLWRvdHMucG5nJykgXHJcbiAgICAgICAgdG9Eb01lbnUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdtYXgtaGVpZ2h0OiAyMHB4OyBtYXgtd2lkdGg6IDIwcHgnKVxyXG4gICAgICAgIHRvRG9NZW51LnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKVxyXG4gICAgICAgIHRvRG9NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZighY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyB8fCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRk9STVwiICYmIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJESVZcIil7IC8vQ0hFQ0tTIEZPUiBEVVBMSUNBVEVTXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9Eb0J0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSAvL2RpdiB3aGljaCB3aWxsIGNvbnRhaW4gYWxsIDMgbWVudSBidG5zIGZvciB0by1kb1xyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuc2V0QXR0cmlidXRlKCdjb2RlJywgaSlcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBlbmQ7JylcclxuXHJcbiAgICAgICAgICAgICAgICAvL1VQREFURSBUTy1ETyBCVVRUT05cclxuICAgICAgICAgICAgICAgIGxldCB0b0RvRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpIFxyXG4gICAgICAgICAgICAgICAgdG9Eb0VkaXQudGV4dENvbnRlbnQgPSBcIkVkaXRcIlxyXG4gICAgICAgICAgICAgICAgdG9Eb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcgfHwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkZPUk1cIil7IC8vY2hlY2tzIHRvIHNlZSBpZiB0aGUgbmV4dCBlbGVtZW50IGFmdGVyIGNvbnRhaW5lciBpcyBhIGZvcm0uIGlmIG5vdCBpdCBhcHBlbmRzIHRoZSB0by1kbyB1cGRhdGUgZm9ybSB0byB0aGUgYm90dG9tIG9mIHRoZSB0by1kbyBjb250ZW50IGNvbnRhaW5lciBkaXZcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykvL2Zvcm0gdGhhdCB3aWxsIHRha2UgaW5wdXQgYW5kIHJlcGxhY2UgdG8tZG8gaXRlbSBpbmZvXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NldCBOZXcgVGFzayBOYW1lIEhlcmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcm9qZWN0LnRleHRDb250ZW50ID0gJ0lzIHRoaXMgcGFydCBvZiBhIHByb2plY3Q/J1xyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJvamVjdC5pbm5lckhUTUwgPSAnPG9wdGlvbj48L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHByb2plY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByaW9yaXR5LmlubmVySFRNTCA9ICc8b3B0aW9uPlByaW9yaXR5PC9vcHRpb24+IDxvcHRpb24+Tm90IGEgUHJpb3JpdHk8L29wdGlvbj4nXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Ob3Rlcy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NldCBOZXcgVGFzayBOb3RlcyBIZXJlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1TdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtQ2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1RPLURPIFVQREFURSBGT1JNXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1OYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtRGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVByaW9yaXR5KVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtUHJvamVjdClcclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybU5vdGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtU3VibWl0KVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtQ2FuY2VsKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NIQU5HSU5HIE9CSkVDVCBWQUxVRVNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5uYW1lID0gdG9Eb0Zvcm1OYW1lLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8uZHVlRGF0ZSA9IHRvRG9Gb3JtRGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0b0RvRm9ybVByaW9yaXR5LnZhbHVlID09IFwiTm90IGEgUHJpb3JpdHlcIil7IC8vY2hlY2tzIGlmIHVzZXIgc2VsZWN0ZWQgTm90IHByaW9yaXR5IG9yIHByaW9yaXR5IGFuZCB1c2VzIGlmIHN0YXRtZW50IHRvIHNldCBwcmlvaXJ0eSBzdGF0dXMgdG8gdHJ1ZSBvciBmYWxzZWx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLnByaW9yaXR5ID0gJ05vJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5wcmlvcml0eSA9ICdZZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ucHJvalBhcmVudCA9IHRvRG9Gb3JtUHJvamVjdC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLm5vdGVzID0gdG9Eb0Zvcm1Ob3Rlcy52YWx1ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9VU0lORyBORVcgT0JKRUNUIFZBTFVFUyBUTyBDSEFOR0UgRE9NIFZBTFVFU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvRGF0ZS50ZXh0Q29udGVudCA9IG5ld1RvRG8uZHVlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSBuZXdUb0RvLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib3JkZXJTdHlsZSA9ICdib3JkZXI6IDVweCBzb2xpZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdUb0RvLnByaW9yaXR5ID09ICdZZXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyU3R5bGUgKz0gJyByZWQ7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZSArPSAnIGJsYWNrOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9Eb0Zvcm1Ob3Rlcy52YWx1ZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0RvTm90ZXMudGV4dENvbnRlbnQgPSBuZXdUb0RvLm5vdGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgJHtib3JkZXJTdHlsZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vPGxpPiBib3JkZXIgdG8gaW5kaWNhdGUgcHJpb3JpdHkgbGV2ZWwuIFdpbGwgZG8gdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2J5IGNoZWNraW5nIG9iamVjdHMgcHJpb3JpdHkgc3RhdHVzIGFuZCBhZGRpbmcgY3NzICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5zZXJ0QmVmb3JlKGVkaXRGb3JtLCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vZmluaXNoZWQgd2lsbCBiZSBhIHNwZWNpYWwgY2FzZSBiZWNhdXNlIGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgcmVmbGVjdGVkXHJcblxyXG4gICAgICAgICAgICAgICAgLy9ERUxFVEUgQlVUVE9OXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9Eb0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpIC8vZGVsZXRlIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdG9Eb0RlbGV0ZS50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XHJcbiAgICAgICAgICAgICAgICB0b0RvRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpW2NvZGU9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbY29kZT1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL0NBTkNFTCBCVVRUT05cclxuICAgICAgICAgICAgICAgIGxldCB0b0RvQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIHRvRG9DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xyXG4gICAgICAgICAgICAgICAgdG9Eb0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLzMgRE9UUyBNRU5VXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRWRpdClcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9EZWxldGUpXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5hcHBlbmRDaGlsZCh0b0RvQ2FuY2VsKVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbnNlcnRCZWZvcmUodG9Eb0J0bnNEaXYsIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKHRvRG9DaGVjayk7XHJcbiAgICAgICAgY29udGFpbmVyTGVmdC5hcHBlbmRDaGlsZCh0b0RvTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lclJpZ2h0LmFwcGVuZENoaWxkKHRvRG9EYXRlKVxyXG4gICAgICAgIGNvbnRhaW5lclJpZ2h0LmFwcGVuZENoaWxkKHRvRG9NZW51KTtcclxuXHJcbiAgICAgICAgLy90aGlzIGJsb2NrIGlzIGZvciBtYWludGFpbmluZyB0aGUgdG8tZG8ncyBjcm9zc2VkIG91dCBpZiB0aGV5IGFyZSBhbHJlYWR5IGZpbmlzaGVkLCB3aGVuIGFkZGluZyBhIG5ld1xyXG4gICAgICAgIC8vdG8tZG8uXHJcbiAgICAgICAgaWYobmV3VG9Eby5zdGF0dXMgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRvRG9DaGVjay5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdUb0RvLnN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJMZWZ0KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyUmlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYCBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICR7Ym9yZGVyU3R5bGV9IGApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGNvbnRhaW5lcikgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvRG87IiwiaW1wb3J0IGNyZWF0ZVRvRG8gZnJvbSBcIi4vY3JlYXRlLXRvLWRvXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XHJcblxyXG5cclxubGV0IHByb2plY3RzID0gW107XHJcbmxldCB0YXNrTGlzdCA9IFtdO1xyXG5sZXQgcHJvamVjdHNUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNUYWInKSAvL3NpZGViYXJcclxubGV0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKSBcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdG9EbyhuYW1lLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvalBhcmVudCwgc3RhdHVzLCBub3Rlcyl7IC8vdG8tZG8gb2JqZWN0XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBwcm9qUGFyZW50ICwgXHJcbiAgICAgICAgc3RhdHVzLCBcclxuICAgICAgICBub3Rlc1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgICAgICAgICAvL3Byb2plY3QgZm9ybVxyXG5sZXQgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyAvL3Byb2plY3QgbmFtZSBpbnB1dFxyXG5wcm9qTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgTmFtZScpXHJcblxyXG5sZXQgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgLy9zdWJtaXRzIG5ldyBwcm9qZWN0XHJcbmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbmFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG5cclxubGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvL2NhbmNlbHMgbmV3IHByb2plY3RcclxuY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxyXG5jYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgIGZvcm0ucmVtb3ZlKCk7XHJcbn0pXHJcblxyXG5sZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTsgIC8vY3JlYXRlcyBwcm9qZWN0IGZvcm1cclxuZm9ybS5hcHBlbmRDaGlsZChwcm9qTmFtZSk7XHJcbmZvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcclxuZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG5cclxubGV0IHByb2pCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ0bicpIC8vYWRkIHByb2plY3QgYnRuIChpbnNpZGUgaHRtbClcclxucHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgLy93aGVuIGJ0biBpcyBjbGlja2VkLCBwcm9qZWN0IGZvcm0gYXBwZWFyc1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChmb3JtKTtcclxufSlcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7Ly9zdWJtaXQgcHJvamVjdCBidXR0b25cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c1swXSkpXHJcbiAgICBjcmVhdGVQcm9qZWN0KClcclxufSlcclxuXHJcbiAgICAgICAgICAgIC8vdG8tZG8gZm9ybVxyXG5sZXQgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgIC8vdG8tZG8gbmFtZSBpbnB1dFxyXG50YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlRhc2sgTmFtZVwiKTtcclxudGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xyXG5cclxubGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpIC8vdG8tZG8gcHJpb3JpdHkgY2hlY2tib3hcclxudGFza1ByaW9yaXR5LmlubmVySFRNTCA9ICc8b3B0aW9uIHZhbHVlPVwiWWVzXCI+UHJpb3JpdHk8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiTm9cIj5Ob3QgQSBQcmlvcml0eTwvb3B0aW9uPidcclxudGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHktY2hlY2snKVxyXG50YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKVxyXG5cclxubGV0IHRhc2tQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy9sYWJlbCBmb3IgcHJpb3JpdHkgY2hlY2tib3hcclxudGFza1ByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHktY2hlY2snKVxyXG50YXNrUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSXMgdGhpcyBhIHByaW9yaXR5IHRhc2s/XCJcclxuXHJcbmxldCB0b0RvRm9ybVByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxudG9Eb0Zvcm1Qcmlvcml0eURpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlMYWJlbClcclxudG9Eb0Zvcm1Qcmlvcml0eURpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpXHJcblxyXG5cclxubGV0IHRhc2tEdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSAvL3RvLWRvIGNhbGVuZGVyIHNlbGVjdG9yXHJcbnRhc2tEdWVkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcclxudGFza0R1ZWRhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKVxyXG5cclxubGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7IC8vbGFiZWwgZm9yIGNhbGVuZGVyXHJcbmR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiV2hlbiBpcyB0aGlzIGR1ZT9cIlxyXG5cclxubGV0IHRvRG9Gb3JtRHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnRvRG9Gb3JtRHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpXHJcbnRvRG9Gb3JtRHVlRGF0ZURpdi5hcHBlbmRDaGlsZCh0YXNrRHVlZGF0ZSlcclxuXHJcbmxldCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpIC8vdG8tZG8gcHJvamVjdCBzZWxlY3RvclxyXG5sZXQgdGFza1Byb2plY3RsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbnRhc2tQcm9qZWN0bGFiZWwudGV4dENvbnRlbnQgPSBcIkRvZXMgdGhpcyBiZWxvbmcgaW4gYSBwcm9qZWN0P1wiXHJcblxyXG5sZXQgdG9Eb0Zvcm1Qcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxudG9Eb0Zvcm1Qcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0bGFiZWwpXHJcbnRvRG9Gb3JtUHJvamVjdERpdi5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdClcclxuXHJcbmxldCB0YXNrU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vc3VibWl0IHRvLWRvIGJ0blxyXG50YXNrU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxudGFza1N1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0IFRhc2tcIlxyXG5cclxubGV0IHRhc2tDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgLy90by1kbyBjYW5jZWxcclxudGFza0NhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxudGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRhc2tGb3JtLnJlbW92ZSgpXHJcbn0pXHJcblxyXG5sZXQgdG9Eb0Zvcm1TdWJtaXRDYW5jZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG50b0RvRm9ybVN1Ym1pdENhbmNlbERpdi5hcHBlbmRDaGlsZCh0YXNrU3VibWl0KVxyXG50b0RvRm9ybVN1Ym1pdENhbmNlbERpdi5hcHBlbmRDaGlsZCh0YXNrQ2FuY2VsKVxyXG5cclxubGV0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykgLy90b2RvIGRlc2NyaXB0aW9uIGFyZWFcclxudGFza05vdGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxudGFza05vdGVzLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHV0IHlvdXIgZGVzY3JpcHRpb24gaGVyZS4nKVxyXG5cclxuXHJcbmxldCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSAvL3RvLWRvIGZvcm0gaXMgYXNzZW1ibGVkXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtUHJpb3JpdHlEaXYpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtRHVlRGF0ZURpdilcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Qcm9qZWN0RGl2KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTm90ZXMpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtU3VibWl0Q2FuY2VsRGl2KVxyXG5cclxuXHJcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IC8vcHV0cyB0by1kbyBmb3JtIGluIHRoZSBET01cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGFza0Zvcm0pXHJcbiAgICB0YXNrRm9ybS5zdHlsZS5qdXN0aWZ5U2VsZiA9ICdjZW50ZXInXHJcbn0pXHJcblxyXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChldmVudCk9PiB7IC8vc3VibWl0IHRvLWRvIFxyXG4gICAgbGV0IHN0YXR1cyA9IFwiUGVuZGluZ1wiXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmV3VG9EbyA9IHRvRG8odGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0R1ZWRhdGUudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSwgdGFza1Byb2plY3QudmFsdWUsIHN0YXR1cywgdGFza05vdGVzLnZhbHVlKVxyXG4gICAgdGFza0xpc3QucHVzaChuZXdUb0RvKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIC8vdXNlIGxpc3QgdG8gY3JlYXRlIERPTSB0by1kbyBlbGVtZW50c1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdClcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSlcclxuICAgICAgICBjcmVhdGVUb0RvKHRhc2tMaXN0W2ldLCBpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY2xlYXIgbG9jYWxTdG9yYWdlICd0YXNrbGlzdCdcclxuICAgICAgICAvL2ZvcmVhY2ggdGhydSBsaXN0IC0+IHNldEl0ZW0gYXMgJ29iamVjdF9YJyB1c2luZyB0by1kby5uYW1lIGFzIHggLT4ga2V5ID0ganNvbi5zdHJpbmdpZnlcclxuICAgIH1cclxuXHJcbiAgICB0YXNrTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHRvZG8pIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza18nICsgdG9kby5uYW1lLCBKU09OLnN0cmluZ2lmeSh0b2RvKSlcclxuICAgIH0pXHJcblxyXG5cclxuICAgIHRhc2tGb3JtLnJlbW92ZSgpXHJcbn0pXHJcblxyXG5cclxuLy93aGVuIHBhZ2UgbG9hZHMsIHRvLWRvcyBhcmUgbG9hZGVkXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7IFxyXG4gICAgLy90by1kbyBwYXJ0XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgbGV0IHN0b3JlZFRvRG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0Jyk7IC8vcmV0cmlldmVzIHRvLWRvIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgbGV0IGxpc3RPZlRvRG9zID0gSlNPTi5wYXJzZShzdG9yZWRUb0Rvcyk7IC8vcGFyc2VzIHRvLWRvXHJcbiAgICBsZXQgYXJyYXlPZlRvRG9zID0gW107IC8vZW1wdHkgYXJyYXkgZm9yIHJldHJpZXZlZCB0by1kb3MgdG8gYmUgcGxhY2VkIGluXHJcbiAgICBhcnJheU9mVG9Eb3MucHVzaChsaXN0T2ZUb0RvcykgLy9hZGRzIHRvLWRvIHRvIGFycmF5XHJcbiAgICBcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID09IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbm8gdG8tZG9zJylcclxuICAgIC8vIH1lbHNle1xyXG4gICAgLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheU9mVG9Eb3MubGVuZ3RoOyBpKyspeyAvL2xvb3BzIHRocm91Z2ggdG8tZG8gYXJyYXkgdXNpbmcgY3JlYXRlVG9EbyBmdW5jdGlvblxyXG4gICAgLy8gICAgICAgICBjcmVhdGVUb0RvKGFycmF5T2ZUb0Rvc1tpXSwgaSkgXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpXHJcbiAgICAvLyB9XHJcbiAgICBcclxufVxyXG5cclxuICAgIC8vcHJvamVjdCBwYXJ0XHJcbiAgICBsZXQgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTsgLy9yZXRyaWV2ZXMgcHJvamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxldCBsaXN0T2ZQcm9qZWN0cyA9IEpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdHMpOyAvL3BhcnNlcyBwcm9qZWN0XHJcbiAgICBsZXQgYXJyYXlPZlByb2plY3RzID0gW107IC8vZW1wdHkgYXJyYXkgZm9yIHJldHJpZXZlZCBwcm9qZWN0cyB0byBiZSBwbGFjZWQgaW5cclxuICAgIGFycmF5T2ZQcm9qZWN0cy5wdXNoKGxpc3RPZlByb2plY3RzKSAvL2FkZHMgcHJvamVjdCB0byBhcnJheVxyXG4gICAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXlPZlByb2plY3RzLmxlbmd0aDsgaSsrKXsgLy9sb29wcyB0aHJvdWdoIHByb2plY3QgYXJyYXkgdXNpbmcgY3JlYXRlUHJvamVjdCBmdW5jdGlvblxyXG4gICAgICAgIGNyZWF0ZVByb2plY3QoYXJyYXlPZlByb2plY3RzW2ldLCBpKSBcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9Ub2RheSB0YWJcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5VGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFswXSlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdGFza0xpc3QubGVuZ3RoOyBpKyspeyAgXHJcbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gbmV3IERhdGUodGFza0xpc3RbaV0uZHVlRGF0ZSk7XHJcbiAgICAgICAgY29uc3QgdGltZURpZmYgPSBNYXRoLmFicyh0b2RheS5nZXRUaW1lKCkgLSBpbnB1dERhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICBjb25zdCBkYXlJbk1pbGxpc2Vjb25kcyA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgaWYodGltZURpZmYgPD0gZGF5SW5NaWxsaXNlY29uZHMpeyAvL2NoZWNrcyBpZiB0aGUgZGlmZmVyZW5jZSBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gb25lIGRheVxyXG4gICAgICAgICAgICAvL2FwcGVuZCBhbGwgdG8tZG8ncyB3aXRoaW4gIGEgZGF5IHRvIHRoZSBjb250ZW50IGRpdlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSlcclxuICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG4gICAgICAgIC8vYWxsIHRhYlxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsVGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAvL2FwcGVuZCBhbGwgdG8tZG8ncyB3aXRoaW4gYSBkYXkgdG8gdGhlIGNvbnRlbnQgZGl2XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3RbaV0pXHJcbiAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgIH1cclxufSlcclxuXHJcbiAgICAgICAgLy90aGlzIHdlZWsgdGFiXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzV2Vla1RhYicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc29sZS5sb2codGFza0xpc3RbMF0pXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IG5ldyBEYXRlKHRhc2tMaXN0W2ldLmR1ZURhdGUpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVEaWZmID0gTWF0aC5hYnModG9kYXkuZ2V0VGltZSgpIC0gaW5wdXREYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgY29uc3Qgd2Vla0luTWlsbGlzZWNvbmRzID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgaWYodGltZURpZmYgPD0gd2Vla0luTWlsbGlzZWNvbmRzKXsgLy9jaGVja3MgaWYgdGhlIGRpZmZlcmVuY2UgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIG9uZSB3ZWVrICAgICBcclxuICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSkgLy9hcHBlbmQgYWxsIHRvLWRvJ3Mgd2l0aGluICBhIHdlZWsgdG8gdGhlIGNvbnRlbnQgZGl2XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuICAgICAgICAvL3ByaW9yaXR5IHRhYlxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlUYWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdGFza0xpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldLnByaW9yaXR5KVxyXG4gICAgICAgIGlmKHRhc2tMaXN0W2ldLnByaW9yaXR5ID09ICdZZXMnKXtcclxuICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrTGlzdFxyXG5leHBvcnQge3Byb2plY3RzLCBhZGRUYXNrLCBwcm9qTmFtZSwgdGFza1Byb2plY3QsIGZvcm0sIHRhc2tMaXN0fVxyXG5cclxuXHJcbi8vSSBoYXZlIHRvIGNyZWF0ZSBteSB0b2RvcyBhbmQgcHJvanMgZnJvbSBsb2NhbHN0b3JhZ2Ugb25seSBiYXNpY2FsbHkgYmVjYXVzZSBpZiBJIGRvbid0IHRoZSBjb2RlXHJcbi8vaXMganVzdCBnb2luZyB0byBjbGVhciB0aGUgY29udGVudCBhbmQgaXQgd2lsbCBvbmx5IGNyZWF0ZSB0aGUgdG8tZG8ncyB0aGF0IGFyZSBtYWRlIGR1cmluZyB0aGUgY3VycmVudFxyXG4vL3Nlc3Npb24uIFRoZSBzdG9yZWQgdG8tZG9zIGFyZSBwb3B1bGF0aW5nIG9ubHkgb24gdGhlIGluaXRpYWwgcGFnZWxvYWQsIGFmdGVyIGNyZWF0aW5nIGEgbmV3IG9uZSwgdGhlIFxyXG4vL2NvbnRlbnQgaXMgY2xlYXJlZCB2aWEgY3JlYXRldG9kby5qcyBhbmQgdGhlbiB0aGUgb25seSB0b2RvcyBiZWluZyBjcmVhdGVkIGFyZSB0aGUgb25lcyBpbiB0YXNrTGlzdC5cclxuXHJcbi8vU28gZWl0aGVyIGNoYW5nZSBteSBjcmVhdGVUb0RvLmpzIGNvZGUgdG8gc291cmNlIGZyb20gbG9jYWxzdG9yYWdlIGFuZCBvbiBzdWJtaXQgc3RvcmUgdGhlIHRvZG9zIGluIGxvY2FsXHJcbi8vYW5kIGNyZWF0ZSBhbnkgbmV3IHRvZG9zIGZyb20gdGhlcmUsIG9yLCBJIHJldHJvYWN0aXZlbHkgYWRkIGFueSBvbGQgdG9kb3MgYWxyZWFkeSBpbiBsb2NhbHN0b3JhZ2UgZnJvbVxyXG4vL2FueSBwcmV2aW91cyBzZXNzaW9ucyBhbmQgYWRkIHRoZW0gdG8gdGhlIHRhc2tMaXN0IG9uIHN1Ym1pdCBpZiB0aGV5O3JlIG5vdCBhbHJlYWR5IHRoZXJlLlxyXG5cclxuLy9JIHRoaW5rIHRoYXQgdGhlIHNlY29uZCBvcHRpb24gaXMgYmV0dGVyLiBBZGRpbmcgdG8tZG9zIGZyb20gbG9jYWwgdG8gdGFza0xpc3QsIHNob3VsZG50IGJlIHRvbyBiYWQuXHJcbi8vSXQganVzdCBtZWFucyB0aGF0IG9uIHN1Ym1pdCBvZiBhIG5ldyB0by1kby4gSSBoYXZlIHRvIGxvb2sgYXQgbG9jYWwgc3RvcmFnZSwgcGFyc2UgdGhlIG9iamVjdHMsIGFuZFxyXG4vL3B1c2ggdGhlbSB0byB0aGUgdGFza0xpc3QuXHJcblxyXG4vL2J1dCBmaXJzdCB0aGUgb3RoZXIgcHJvYmxlbSA9IHBvcHVsYXRpbmcgdGhlIERPTSBvbiB0aGUgaW5pdGlhbCBsb2FkIHdpdGggcHJldmlvdXMgdG8tZG9zIGFuZCBwcm9qcy5cclxuLy9hbmQgc3RvcmluZyB0aGVtIGluIGxvY2Fsc3RvcmFnZVxyXG5cclxuLy9USGUgcHJvYmxlbSBpcyB0aGF0IGl0J3Mgbm90IHVzaW5nIGFsbCBvZiB0aGUgdG8tZG9zIGFuZCBwcm9qcyB0aGF0IGFyZSBzdG9yZWQgaW4gbG9jYWxzdG9yYWdlLCBqdXN0IHRoZVxyXG4vL2xhc3Qgb25lIGluIHRoZSBsaXN0XHJcblxyXG4vL3NvIG90aGVyIHBlb3BsZSBhcmUgdXNpbmcgbG9jYWxzdG9yYWdlIHRvIHN0b3JlIGJvdGggdGhlaXIgdG8tZG9zIGFuZCBwcm9qcy4gV0hhdCBJIHNhdyBpbiBvbmUgb2YgdGhlbVxyXG4vL3dhcyB0aGF0IHRoZXkgdXNlZCBhcnJheXMgdG8gc3RvcmUgYm90aCB0by1kb3MgYW5kIHByb2pzLiB3aHRhIHdhcyBrZXkgd2FzIHRoYXQgb2JqcyB1c2VkIHRoZSBpZGVudGlmaWVyXHJcbi8vJ2RhdGFwcm9qZWN0OiAwJyBhcyBtYXJrZXJzIHRoYXQgdGhleSBhcmUgdG8tZG9zIHdoaWxlIGFycmF5cyB1c2VkICdkYXRhcHJvamVjdDogMScuIE5vdyB0aGUgcXVlc3Rpb24gXHJcbi8vYmVjb21lcyBob3cgZG8gSSBhZGQgdGhvc2UgbWFya2VycyB0byB0aGUgb2Jqcz9cclxuXHJcbi8vSSBhZGQgdGhlbSBvbiBzdWJtaXQ/IFxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9