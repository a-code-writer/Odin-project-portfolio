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
    if(_index_js__WEBPACK_IMPORTED_MODULE_0__.projName.value == "") return; //stops index.js onLoad Project part from making empty projects, but now the onload doesnt load any projects 
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
    console.log(listOfProjects) 
    console.log(projects)
    listOfProjects.forEach(project => {
        projects.push(project)
    })
    console.log(projects)  
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDN0U7QUFDQTtBQUNBLE9BQU8sK0NBQVEsc0JBQXNCO0FBQ3JDLElBQUksK0NBQVEsTUFBTSwrQ0FBUSxTQUFTO0FBQ25DLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsbUJBQW1CLElBQUksK0NBQVEsU0FBUyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQ0FBUTtBQUNuQyx5Q0FBeUM7QUFDekM7QUFDQSxrREFBa0Q7QUFDbEQsK0RBQStEO0FBQy9EO0FBQ0EsMkJBQTJCLElBQUksK0NBQVEsU0FBUyxRQUFRO0FBQ3hELG1CQUFtQiwrQ0FBUTtBQUMzQiwrQkFBK0IsK0NBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxFQUFFO0FBQzlELHlGQUF5RjtBQUN6Riw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQ0FBUTtBQUNoQztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBUTtBQUM1Qix3REFBd0QsRUFBRTtBQUMxRCx5REFBeUQsRUFBRTtBQUMzRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxFQUFFO0FBQzNELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBVztBQUNmLElBQUksK0NBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBLHFEQUFxRCwrQ0FBUTtBQUM3RDtBQUNBLElBQUksMkNBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNuSG1CO0FBQ0k7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELFVBQVU7QUFDdEU7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsaUJBQWlCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELDJNQUEyTTtBQUMzTTtBQUNBLGNBQWMsOERBQThEO0FBQzVFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixVQUFVO0FBQ1YsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBLG9KQUFvSjtBQUNwSjtBQUNBO0FBQ0Esa0VBQWtFLHFCQUFxQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEdBQTBHO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLDBCQUEwQjtBQUMxQixpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFlBQVk7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBUTtBQUM1Qix1REFBdUQsRUFBRTtBQUN6RCx3REFBd0QsRUFBRTtBQUMxRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGdDQUFnQyxFQUFFLGFBQWE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN05lO0FBQ0s7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLElBQUksNERBQWE7QUFDakIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0EsUUFBUSwwREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELHVCQUF1QjtBQUN2QiwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBVTtBQUNsQixLQUFLO0FBQ0wsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksNERBQWE7QUFDakIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxZQUFZLDBEQUFVO0FBQ3RCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQSxRQUFRLDBEQUFVO0FBQ2xCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLFlBQVkseURBQVU7QUFDdEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBLFlBQVkseURBQVU7QUFDdEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLFFBQVE7QUFDMEM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxxQkFBcUIsZUFBZTtBQUN0RyxVQUFVOzs7Ozs7O1VDL1FWO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tcHJvai8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1wcm9qLy4vc3JjL2NyZWF0ZS10by1kby5qcyIsIndlYnBhY2s6Ly90by1kby1wcm9qLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLXByb2ovd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1wcm9qL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tcHJvai93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdHMsIHByb2pOYW1lLCB0YXNrUHJvamVjdCwgZm9ybSwgdGFza0xpc3QgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcclxuICAgIGlmKHByb2pOYW1lLnZhbHVlID09IFwiXCIpIHJldHVybjsgLy9zdG9wcyBpbmRleC5qcyBvbkxvYWQgUHJvamVjdCBwYXJ0IGZyb20gbWFraW5nIGVtcHR5IHByb2plY3RzLCBidXQgbm93IHRoZSBvbmxvYWQgZG9lc250IGxvYWQgYW55IHByb2plY3RzIFxyXG4gICAgcHJvamVjdHMucHVzaChwcm9qTmFtZS52YWx1ZSk7IC8vYWRkIGlucHV0IHRvIGxpc3RcclxuICAgIHByb2plY3RzVGFiLmlubmVySFRNTCA9IFwiXCI7IC8vcmVzZXRzIHNpZGViYXIgY29udGVudFxyXG4gICAgXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXsgLy9hZGRzIGFsbCBjdXJyZW50IHByb2plY3RzIGluIGFycmF5IHRvIHNpZGViYXJcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcHJvakxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSBcclxuICAgICAgICBwcm9qTGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmUtdGFiJylcclxuICAgICAgICBwcm9qTGkuaW5uZXJUZXh0ID0gcHJvamVjdHNbaV0gXHJcbiAgICAgICAgcHJvakxpLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKTsgLy9Ib3cgSSB3aWxsIGJlIGFibGUgdG8gY2hvb3NlIGFuZCBlZGl0IHNwZWNpZmljIHByb2plY3RzXHJcblxyXG4gICAgICAgIHByb2pMaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgIC8vY2xpY2tpbmcgb24gcHJvakxpIHdpbGwgc2hvdyBhbGwgdGFza3MgdGhhdCBhcmUgcmVsYXRlZCB3aXRoIHRoYXQgcHJvamVjdFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7IC8vY2xlYXJzIGNvbnRlbnRcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0YXNrTGlzdC5sZW5ndGg7IGorKyl7ICAgLy9sb29wcyB0aHJvdWdoIHRhc2tMaXN0IHRvIGZpbmQgdGFza3MgdGhhdCBhcmUgcmVsYXRlZCB0byB0aGUgY2xpY2tlZCBwcm9qTGlcclxuICAgICAgICAgICAgICAgIGlmKHRhc2tMaXN0W2pdLnByb2pQYXJlbnQgPT0gcHJvakxpLmlubmVyVGV4dCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtqXSwgaSlcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgLy8zIGRvdHMgYXQgZW5kIG9mIHByb2plY3QgZGl2XHJcbiAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi8zLWRvdHMucG5nJylcclxuICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKSAvL21ha2luZyBzdXJlIGVhY2ggbWVudSBidXR0b24gY29ycmVzcG9uZHMgdG8gaXRzIG1hdGNoaW5nIHByb2plY3RcclxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWRqTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtpbmRleD1cIiR7aX1cIl1gKS8vYWRqTGkgaXMgdGhlIGNvcnJlc3BvbmRpbmcgcHJvamVjdFxyXG4gICAgICAgICAgICBpZighYWRqTGkubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGFkakxpLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkRJVlwiKXsgLy9jaGVja3MgaWYgcHJvakxpIGhhcyBkaXYgc2libGluZyBhbHJlYWR5XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVudUJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsvLyBhbGwgYnV0dG9ucyB3aWxsIGJlIHN0b3JlZCBpbiBhIHNlcGVyYXRlIGRpdlxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9pbnNpZGUgbWVudSBidXR0b25cclxuICAgICAgICAgICAgICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCJFZGl0XCI7XHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0UHJvakZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhbmNlbE5hbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCdG4udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsTmFtZUJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9idXR0b24gaW5zaWRlIG9mIEVkaXQgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsTmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0UHJvakZvcm0ucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2luc2lkZSBvZiBlZGl0IGJ1dHRvbiwgd2lsbCBjaGFuZ2UgdGhlIHByb2plY3RzIE5hbWVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJVcGRhdGVkIG5hbWVcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFwcGVuZENoaWxkKHVwZGF0ZUJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByb2pGb3JtLmFwcGVuZENoaWxkKGNhbmNlbE5hbWVCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hcHBlbmRDaGlsZCh1cGRhdGVOYW1lSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0gPSB1cGRhdGVOYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkakxpLnRleHRDb250ZW50ID0gdXBkYXRlTmFtZUlucHV0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2pMaS5hcHBlbmRDaGlsZChtZW51KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgbWVudUJ0bnMucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1RhYi5pbnNlcnRCZWZvcmUoZWRpdFByb2pGb3JtLCBhZGpMaS5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vaW5zaWRlIG9mIG1lbnUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSAnRGVsZXRlJztcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaVtpbmRleD1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltpbmRleD1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL2luc2lkZSBvZiBtZW51IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGV0IGNhbmNlbGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsYnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbaW5kZXg9XCIke2l9XCJdYCkucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9idXR0b25zIHB1dCBpbnNpZGUgb2YgZGl2XHJcbiAgICAgICAgICAgICAgICBtZW51QnRucy5hcHBlbmRDaGlsZChlZGl0QnRuKVxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxyXG4gICAgICAgICAgICAgICAgbWVudUJ0bnMuYXBwZW5kQ2hpbGQoY2FuY2VsYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9idXR0b24gZGl2IGlzIGFkZGVkIGJlZm9yZSBjdXJyZW50IHByb2plY3RzIG5leHQgc2libGluZyBpZTogcmlnaHQgYWZ0ZXIgaXQgICBcclxuICAgICAgICAgICAgICAgIHByb2plY3RzVGFiLmluc2VydEJlZm9yZShtZW51QnRucywgYWRqTGkubmV4dFNpYmxpbmcpIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcHJvakxpLmFwcGVuZENoaWxkKG1lbnUpXHJcbiAgICAgICAgcHJvamVjdHNUYWIuYXBwZW5kQ2hpbGQocHJvakxpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkaW5nIHByb2plY3Qgb3B0aW9ucyB0byB0aGUgdG8tZG8gZm9ybShkcm9wZG93biBtZW51KVxyXG4gICAgdGFza1Byb2plY3QuaW5uZXJIVE1MID0gJzxvcHRpb24+PC9vcHRpb24+JztcclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnRleHQgPSBwcm9qZWN0O1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XHJcbiAgICAgICAgdGFza1Byb2plY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pXHJcblxyXG4gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7IFxyXG5cclxuICAgIGZvcm0ucmVtb3ZlKClcclxufVxyXG5cclxuIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdCIsImltcG9ydCB0YXNrTGlzdCBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBjcmVhdGVUb0RvID0gKG5ld1RvRG8sIGkpID0+IHsgXHJcbiAgICAvL2kgd2FzIGtlcHQgYXMgYSBuIGFyZ3VtZW50IHRvIHVzZSBhcyBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIHRvLWRvLlxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykgLy9jb250YWluZXIgZGl2IGZvciB0by1kb1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NvZGUnLCBpKSBcclxuICAgICAgICBsZXQgY29udGFpbmVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29udGFpbmVyTGVmdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGZsZXg7IGdhcDogNXB4OyBtYXJnaW4tbGVmdDogNXB4JylcclxuICAgICAgICBsZXQgY29udGFpbmVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnRhaW5lclJpZ2h0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcicpXHJcbiAgICBcclxuICAgICAgICAvL1RPLURPIENIRUNLQk9YXHJcbiAgICAgICAgbGV0IHRvRG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vdW5jaGVja2VkLnBuZycpXHJcbiAgICAgICAgdG9Eb0NoZWNrLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnbWF4LWhlaWdodDogMjBweDsgbWF4LXdpZHRoOiAyMHB4OyBhbGlnbi1zZWxmOiBjZW50ZXInKVxyXG4gICAgICAgIHRvRG9DaGVjay5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSlcclxuICAgICAgICB0b0RvQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRvRG9DaGVjay5nZXRBdHRyaWJ1dGUoJ3NyYycpID09ICcuL3VuY2hlY2tlZC5wbmcnKXtcclxuICAgICAgICAgICAgICAgIHRvRG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2NoZWNrZWQucG5nJylcclxuICAgICAgICAgICAgICAgIG5ld1RvRG8uc3RhdHVzID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b0RvQ2hlY2suc2V0QXR0cmlidXRlKCdzcmMnLCAnLi91bmNoZWNrZWQucG5nJylcclxuICAgICAgICAgICAgICAgIG5ld1RvRG8uc3RhdHVzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9UTy1ETyBOQU1FIEVMRU1FTlRcclxuICAgICAgICBsZXQgdG9Eb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdG9Eb05hbWUudGV4dENvbnRlbnQgPSBuZXdUb0RvLm5hbWU7IFxyXG5cclxuICAgICAgICAvL1RPLURPIE5PVEVTIEVMRU1FTlRcclxuICAgICAgICBsZXQgdG9Eb05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgIHRvRG9Ob3Rlcy50ZXh0Q29udGVudCA9IG5ld1RvRG8ubm90ZXM7XHJcbiAgICAgICAgdG9Eb05hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PnsgLy9vbiBjbGlja2luZyB0aGUgcCBlbGVtZW50LCB0aGUgbm90ZXMgc2VjdGlvbiB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSBib3R0b20gb2YgdGhlIHRvLWRvXHJcbiAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJURVhUQVJFQVwiICYmIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJESVZcIiAmJiBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRk9STVwiKXsgLy9jaGVjayBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgbm90ZXMgc2VjdGlvbiwgbm8gZHVwbGljYXRlc1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbnNlcnRCZWZvcmUodG9Eb05vdGVzLCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lID09PSBcIlRFWFRBUkVBXCIpeyAvL2lmIHRoZXJlIGlzIGFscmVhZHkgYSBub3RlcyBzZWN0aW9uLCByZW1vdmUgaXRcclxuICAgICAgICAgICAgICAgIHRvRG9Ob3Rlcy5yZW1vdmUoKVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vVE8tRE8gREFURSBFTEVNRU5UXHJcbiAgICAgICAgbGV0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdG9Eb0RhdGUudGV4dENvbnRlbnQgPSBuZXdUb0RvLmR1ZURhdGU7XHJcblxyXG4gICAgICAgIC8vQk9SREVSIEZPUiBUTy1ETywgQ0hBTkdFUyBCQVNFRCBPRkYgUFJJT1JJVFlcclxuICAgICAgICBsZXQgYm9yZGVyU3R5bGUgPSAnYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCc7XHJcbiAgICAgICAgaWYgKG5ld1RvRG8ucHJpb3JpdHkgPT0gJ1llcycpIHtcclxuICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgcmVkOyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgYmxhY2s7JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vMyBET1RTIEFUIEVORCBPRiBUTy1ET1xyXG4gICAgICAgIGxldCB0b0RvTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHRvRG9NZW51LnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uLzMtZG90cy5wbmcnKSBcclxuICAgICAgICB0b0RvTWVudS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21heC1oZWlnaHQ6IDIwcHg7IG1heC13aWR0aDogMjBweCcpXHJcbiAgICAgICAgdG9Eb01lbnUuc2V0QXR0cmlidXRlKCdpbmRleCcsIGkpXHJcbiAgICAgICAgdG9Eb01lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nIHx8IGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcudGFnTmFtZSAhPT0gXCJGT1JNXCIgJiYgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZy50YWdOYW1lICE9PSBcIkRJVlwiKXsgLy9DSEVDS1MgRk9SIERVUExJQ0FURVNcclxuICAgICAgICAgICAgICAgIGxldCB0b0RvQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIC8vZGl2IHdoaWNoIHdpbGwgY29udGFpbiBhbGwgMyBtZW51IGJ0bnMgZm9yIHRvLWRvXHJcbiAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NvZGUnLCBpKVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDsnKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vVVBEQVRFIFRPLURPIEJVVFRPTlxyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgXHJcbiAgICAgICAgICAgICAgICB0b0RvRWRpdC50ZXh0Q29udGVudCA9IFwiRWRpdFwiXHJcbiAgICAgICAgICAgICAgICB0b0RvRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZyB8fCBjb250YWluZXIubmV4dEVsZW1lbnRTaWJsaW5nLnRhZ05hbWUgIT09IFwiRk9STVwiKXsgLy9jaGVja3MgdG8gc2VlIGlmIHRoZSBuZXh0IGVsZW1lbnQgYWZ0ZXIgY29udGFpbmVyIGlzIGEgZm9ybS4gaWYgbm90IGl0IGFwcGVuZHMgdGhlIHRvLWRvIHVwZGF0ZSBmb3JtIHRvIHRoZSBib3R0b20gb2YgdGhlIHRvLWRvIGNvbnRlbnQgY29udGFpbmVyIGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKS8vZm9ybSB0aGF0IHdpbGwgdGFrZSBpbnB1dCBhbmQgcmVwbGFjZSB0by1kbyBpdGVtIGluZm9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1OYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2V0IE5ldyBUYXNrIE5hbWUgSGVyZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVByb2plY3QudGV4dENvbnRlbnQgPSAnSXMgdGhpcyBwYXJ0IG9mIGEgcHJvamVjdD8nXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcm9qZWN0LmlubmVySFRNTCA9ICc8b3B0aW9uPjwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1Qcm9qZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxvcHRpb24+UHJpb3JpdHk8L29wdGlvbj4gPG9wdGlvbj5Ob3QgYSBQcmlvcml0eTwvb3B0aW9uPidcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9Gb3JtRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9Eb0Zvcm1Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybU5vdGVzLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2V0IE5ldyBUYXNrIE5vdGVzIEhlcmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG9Gb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvRm9ybUNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eb0Zvcm1DYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgICAgICAgICAgICAgICAgICB0b0RvRm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vVE8tRE8gVVBEQVRFIEZPUk1cclxuICAgICAgICAgICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybU5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1EYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtUHJpb3JpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Qcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRvRG9Gb3JtTm90ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1TdWJtaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1DYW5jZWwpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ0hBTkdJTkcgT0JKRUNUIFZBTFVFU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvQnRuc0Rpdi5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLm5hbWUgPSB0b0RvRm9ybU5hbWUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5kdWVEYXRlID0gdG9Eb0Zvcm1EYXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRvRG9Gb3JtUHJpb3JpdHkudmFsdWUgPT0gXCJOb3QgYSBQcmlvcml0eVwiKXsgLy9jaGVja3MgaWYgdXNlciBzZWxlY3RlZCBOb3QgcHJpb3JpdHkgb3IgcHJpb3JpdHkgYW5kIHVzZXMgaWYgc3RhdG1lbnQgdG8gc2V0IHByaW9pcnR5IHN0YXR1cyB0byB0cnVlIG9yIGZhbHNlbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ucHJpb3JpdHkgPSAnTm8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdUb0RvLnByaW9yaXR5ID0gJ1llcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VG9Eby5wcm9qUGFyZW50ID0gdG9Eb0Zvcm1Qcm9qZWN0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RvRG8ubm90ZXMgPSB0b0RvRm9ybU5vdGVzLnZhbHVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1VTSU5HIE5FVyBPQkpFQ1QgVkFMVUVTIFRPIENIQU5HRSBET00gVkFMVUVTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9EYXRlLnRleHRDb250ZW50ID0gbmV3VG9Eby5kdWVEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RvTmFtZS50ZXh0Q29udGVudCA9IG5ld1RvRG8ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvcmRlclN0eWxlID0gJ2JvcmRlcjogNXB4IHNvbGlkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1RvRG8ucHJpb3JpdHkgPT0gJ1llcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJTdHlsZSArPSAnIHJlZDsnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlICs9ICcgYmxhY2s7JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0b0RvRm9ybU5vdGVzLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9Ob3Rlcy50ZXh0Q29udGVudCA9IG5ld1RvRG8ubm90ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGAke2JvcmRlclN0eWxlfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy88bGk+IGJvcmRlciB0byBpbmRpY2F0ZSBwcmlvcml0eSBsZXZlbC4gV2lsbCBkbyB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYnkgY2hlY2tpbmcgb2JqZWN0cyBwcmlvcml0eSBzdGF0dXMgYW5kIGFkZGluZyBjc3MgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm0ucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbnNlcnRCZWZvcmUoZWRpdEZvcm0sIGNvbnRhaW5lci5uZXh0RWxlbWVudFNpYmxpbmcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9maW5pc2hlZCB3aWxsIGJlIGEgc3BlY2lhbCBjYXNlIGJlY2F1c2UgaXQgZG9lcyBub3QgbmVlZCB0byBiZSByZWZsZWN0ZWRcclxuXHJcbiAgICAgICAgICAgICAgICAvL0RFTEVURSBCVVRUT05cclxuICAgICAgICAgICAgICAgIGxldCB0b0RvRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykgLy9kZWxldGUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0b0RvRGVsZXRlLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuICAgICAgICAgICAgICAgIHRvRG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpc3Quc3BsaWNlKGksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbY29kZT1cIiR7aX1cIl1gKS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltjb2RlPVwiJHtpfVwiXWApLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8vQ0FOQ0VMIEJVVFRPTlxyXG4gICAgICAgICAgICAgICAgbGV0IHRvRG9DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgdG9Eb0NhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnXHJcbiAgICAgICAgICAgICAgICB0b0RvQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vMyBET1RTIE1FTlVcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9FZGl0KVxyXG4gICAgICAgICAgICAgICAgdG9Eb0J0bnNEaXYuYXBwZW5kQ2hpbGQodG9Eb0RlbGV0ZSlcclxuICAgICAgICAgICAgICAgIHRvRG9CdG5zRGl2LmFwcGVuZENoaWxkKHRvRG9DYW5jZWwpXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmluc2VydEJlZm9yZSh0b0RvQnRuc0RpdiwgY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQodG9Eb0NoZWNrKTtcclxuICAgICAgICBjb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKHRvRG9OYW1lKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQodG9Eb0RhdGUpXHJcbiAgICAgICAgY29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQodG9Eb01lbnUpO1xyXG5cclxuICAgICAgICAvL3RoaXMgYmxvY2sgaXMgZm9yIG1haW50YWluaW5nIHRoZSB0by1kbydzIGNyb3NzZWQgb3V0IGlmIHRoZXkgYXJlIGFscmVhZHkgZmluaXNoZWQsIHdoZW4gYWRkaW5nIGEgbmV3XHJcbiAgICAgICAgLy90by1kby5cclxuICAgICAgICBpZihuZXdUb0RvLnN0YXR1cyA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdG9Eb0NoZWNrLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgIHRvRG9OYW1lLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgdG9Eb0RhdGUuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1RvRG8uc3RhdHVzID0gZmFsc2VcclxuICAgICAgICAgICAgdG9Eb05hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRvRG9EYXRlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0b0RvTmFtZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICB0b0RvRGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckxlZnQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJSaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgJHtib3JkZXJTdHlsZX0gYCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9EbzsiLCJpbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9jcmVhdGUtdG8tZG9cIjtcclxuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcclxuXHJcblxyXG5sZXQgcHJvamVjdHMgPSBbXTtcclxubGV0IHRhc2tMaXN0ID0gW107XHJcbmxldCBwcm9qZWN0c1RhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c1RhYicpIC8vc2lkZWJhclxyXG5sZXQgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpIFxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0b0RvKG5hbWUsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qUGFyZW50LCBzdGF0dXMsIG5vdGVzKXsgLy90by1kbyBvYmplY3RcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIHByb2pQYXJlbnQgLCBcclxuICAgICAgICBzdGF0dXMsIFxyXG4gICAgICAgIG5vdGVzXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAgICAgICAgIC8vcHJvamVjdCBmb3JtXHJcbmxldCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7IC8vcHJvamVjdCBuYW1lIGlucHV0XHJcbnByb2pOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lJylcclxuXHJcbmxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSAvL3N1Ym1pdHMgbmV3IHByb2plY3RcclxuYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XHJcblxyXG5sZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vY2FuY2VscyBuZXcgcHJvamVjdFxyXG5jYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXHJcbmNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgZm9ybS5yZW1vdmUoKTtcclxufSlcclxuXHJcbmxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpOyAgLy9jcmVhdGVzIHByb2plY3QgZm9ybVxyXG5mb3JtLmFwcGVuZENoaWxkKHByb2pOYW1lKTtcclxuZm9ybS5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG5mb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcblxyXG5sZXQgcHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnRuJykgLy9hZGQgcHJvamVjdCBidG4gKGluc2lkZSBodG1sKVxyXG5wcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvL3doZW4gYnRuIGlzIGNsaWNrZWQsIHByb2plY3QgZm9ybSBhcHBlYXJzXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGZvcm0pO1xyXG59KVxyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHsvL3N1Ym1pdCBwcm9qZWN0IGJ1dHRvblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSlcclxuICAgIGNyZWF0ZVByb2plY3QoKVxyXG59KVxyXG5cclxuICAgICAgICAgICAgLy90by1kbyBmb3JtXHJcbmxldCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSAgLy90by1kbyBuYW1lIGlucHV0XHJcbnRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiVGFzayBOYW1lXCIpO1xyXG50YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcblxyXG5sZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JykgLy90by1kbyBwcmlvcml0eSBjaGVja2JveFxyXG50YXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gJzxvcHRpb24gdmFsdWU9XCJZZXNcIj5Qcmlvcml0eTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJOb1wiPk5vdCBBIFByaW9yaXR5PC9vcHRpb24+J1xyXG50YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eS1jaGVjaycpXHJcbnRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpXHJcblxyXG5sZXQgdGFza1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpOyAvL2xhYmVsIGZvciBwcmlvcml0eSBjaGVja2JveFxyXG50YXNrUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eS1jaGVjaycpXHJcbnRhc2tQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJJcyB0aGlzIGEgcHJpb3JpdHkgdGFzaz9cIlxyXG5cclxubGV0IHRvRG9Gb3JtUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG50b0RvRm9ybVByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eUxhYmVsKVxyXG50b0RvRm9ybVByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSlcclxuXHJcblxyXG5sZXQgdGFza0R1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpIC8vdG8tZG8gY2FsZW5kZXIgc2VsZWN0b3JcclxudGFza0R1ZWRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKVxyXG50YXNrRHVlZGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpXHJcblxyXG5sZXQgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTsgLy9sYWJlbCBmb3IgY2FsZW5kZXJcclxuZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJXaGVuIGlzIHRoaXMgZHVlP1wiXHJcblxyXG5sZXQgdG9Eb0Zvcm1EdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxudG9Eb0Zvcm1EdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbClcclxudG9Eb0Zvcm1EdWVEYXRlRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVkYXRlKVxyXG5cclxubGV0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JykgLy90by1kbyBwcm9qZWN0IHNlbGVjdG9yXHJcbmxldCB0YXNrUHJvamVjdGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxudGFza1Byb2plY3RsYWJlbC50ZXh0Q29udGVudCA9IFwiRG9lcyB0aGlzIGJlbG9uZyBpbiBhIHByb2plY3Q/XCJcclxuXHJcbmxldCB0b0RvRm9ybVByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG50b0RvRm9ybVByb2plY3REaXYuYXBwZW5kQ2hpbGQodGFza1Byb2plY3RsYWJlbClcclxudG9Eb0Zvcm1Qcm9qZWN0RGl2LmFwcGVuZENoaWxkKHRhc2tQcm9qZWN0KVxyXG5cclxubGV0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgLy9zdWJtaXQgdG8tZG8gYnRuXHJcbnRhc2tTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG50YXNrU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXQgVGFza1wiXHJcblxyXG5sZXQgdGFza0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvL3RvLWRvIGNhbmNlbFxyXG50YXNrQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxyXG50YXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdGFza0Zvcm0ucmVtb3ZlKClcclxufSlcclxuXHJcbmxldCB0b0RvRm9ybVN1Ym1pdENhbmNlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnRvRG9Gb3JtU3VibWl0Q2FuY2VsRGl2LmFwcGVuZENoaWxkKHRhc2tTdWJtaXQpXHJcbnRvRG9Gb3JtU3VibWl0Q2FuY2VsRGl2LmFwcGVuZENoaWxkKHRhc2tDYW5jZWwpXHJcblxyXG5sZXQgdGFza05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSAvL3RvZG8gZGVzY3JpcHRpb24gYXJlYVxyXG50YXNrTm90ZXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG50YXNrTm90ZXMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQdXQgeW91ciBkZXNjcmlwdGlvbiBoZXJlLicpXHJcblxyXG5cclxubGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpIC8vdG8tZG8gZm9ybSBpcyBhc3NlbWJsZWRcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dClcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1Qcmlvcml0eURpdilcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1EdWVEYXRlRGl2KVxyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybVByb2plY3REaXYpXHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOb3RlcylcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb0Zvcm1TdWJtaXRDYW5jZWxEaXYpXHJcblxyXG5cclxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgLy9wdXRzIHRvLWRvIGZvcm0gaW4gdGhlIERPTVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZCh0YXNrRm9ybSlcclxuICAgIHRhc2tGb3JtLnN0eWxlLmp1c3RpZnlTZWxmID0gJ2NlbnRlcidcclxufSlcclxuXHJcbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGV2ZW50KT0+IHsgLy9zdWJtaXQgdG8tZG8gXHJcbiAgICBsZXQgc3RhdHVzID0gXCJQZW5kaW5nXCJcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdUb0RvID0gdG9Ebyh0YXNrTmFtZUlucHV0LnZhbHVlLCB0YXNrRHVlZGF0ZS52YWx1ZSwgdGFza1ByaW9yaXR5LnZhbHVlLCB0YXNrUHJvamVjdC52YWx1ZSwgc3RhdHVzLCB0YXNrTm90ZXMudmFsdWUpXHJcbiAgICB0YXNrTGlzdC5wdXNoKG5ld1RvRG8pO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgLy91c2UgbGlzdCB0byBjcmVhdGUgRE9NIHRvLWRvIGVsZW1lbnRzXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldKVxyXG4gICAgICAgIGNyZWF0ZVRvRG8odGFza0xpc3RbaV0sIGkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jbGVhciBsb2NhbFN0b3JhZ2UgJ3Rhc2tsaXN0J1xyXG4gICAgICAgIC8vZm9yZWFjaCB0aHJ1IGxpc3QgLT4gc2V0SXRlbSBhcyAnb2JqZWN0X1gnIHVzaW5nIHRvLWRvLm5hbWUgYXMgeCAtPiBrZXkgPSBqc29uLnN0cmluZ2lmeVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSlcclxuXHJcblxyXG4gICAgdGFza0Zvcm0ucmVtb3ZlKClcclxufSlcclxuXHJcblxyXG4vL3doZW4gcGFnZSBsb2FkcywgdG8tZG9zIGFyZSBsb2FkZWRcclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHsgXHJcbiAgICAvL3RvLWRvIHBhcnRcclxuICAgIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICBsZXQgc3RvcmVkVG9Eb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKTsgLy9yZXRyaWV2ZXMgdG8tZG8gbGlzdCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIGlmIChzdG9yZWRUb0RvcykgeyAvL2NoZWNrcyBpZiB0by1kbyBsaXN0IGlzIG5vdCBlbXB0eVxyXG4gICAgbGV0IGxpc3RPZlRvRG9zID0gSlNPTi5wYXJzZShzdG9yZWRUb0Rvcyk7IC8vcGFyc2VzIHRvLWRvIGxpc3RcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIiAvL2dldHMgcmlkIG9mIHRoZSBkZWZhdWx0IHRleHRcclxuICAgIGNvbnNvbGUubG9nKGxpc3RPZlRvRG9zKVxyXG4gICAgbGlzdE9mVG9Eb3MuZm9yRWFjaCh0b0RvID0+IHtcclxuICAgICAgICBjcmVhdGVUb0RvKHRvRG8sIGxpc3RPZlRvRG9zLmluZGV4T2YodG9EbykpXHJcbiAgICB9KVxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdubyB0by1kb3MnKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuICAgIC8vcHJvamVjdCBwYXJ0XHJcbiAgICAvL2xvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICBsZXQgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTsgLy9yZXRyaWV2ZXMgcHJvamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIGlmIChzdG9yZWRQcm9qZWN0cykge1xyXG4gICAgbGV0IGxpc3RPZlByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0cyk7IC8vcGFyc2VzIHByb2plY3RcclxuICAgIGNvbnNvbGUubG9nKGxpc3RPZlByb2plY3RzKSBcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgbGlzdE9mUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpICBcclxuICAgICAgICBcclxuICAgIGNyZWF0ZVByb2plY3QoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbm8gcHJvamVjdHMnKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9Ub2RheSB0YWJcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5VGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFswXSlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdGFza0xpc3QubGVuZ3RoOyBpKyspeyAgXHJcbiAgICAgICAgY29uc3QgaW5wdXREYXRlID0gbmV3IERhdGUodGFza0xpc3RbaV0uZHVlRGF0ZSk7XHJcbiAgICAgICAgY29uc3QgdGltZURpZmYgPSBNYXRoLmFicyh0b2RheS5nZXRUaW1lKCkgLSBpbnB1dERhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICBjb25zdCBkYXlJbk1pbGxpc2Vjb25kcyA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgaWYodGltZURpZmYgPD0gZGF5SW5NaWxsaXNlY29uZHMpeyAvL2NoZWNrcyBpZiB0aGUgZGlmZmVyZW5jZSBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gb25lIGRheVxyXG4gICAgICAgICAgICAvL2FwcGVuZCBhbGwgdG8tZG8ncyB3aXRoaW4gIGEgZGF5IHRvIHRoZSBjb250ZW50IGRpdlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdFtpXSlcclxuICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG4gICAgICAgIC8vYWxsIHRhYlxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsVGFiJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAvL2FwcGVuZCBhbGwgdG8tZG8ncyB3aXRoaW4gYSBkYXkgdG8gdGhlIGNvbnRlbnQgZGl2XHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3RbaV0pXHJcbiAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgIH1cclxufSlcclxuXHJcbiAgICAgICAgLy90aGlzIHdlZWsgdGFiXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlzV2Vla1RhYicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc29sZS5sb2codGFza0xpc3RbMF0pXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IG5ldyBEYXRlKHRhc2tMaXN0W2ldLmR1ZURhdGUpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVEaWZmID0gTWF0aC5hYnModG9kYXkuZ2V0VGltZSgpIC0gaW5wdXREYXRlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgY29uc3Qgd2Vla0luTWlsbGlzZWNvbmRzID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgaWYodGltZURpZmYgPD0gd2Vla0luTWlsbGlzZWNvbmRzKXsgLy9jaGVja3MgaWYgdGhlIGRpZmZlcmVuY2UgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIG9uZSB3ZWVrICAgICBcclxuICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSkgLy9hcHBlbmQgYWxsIHRvLWRvJ3Mgd2l0aGluICBhIHdlZWsgdG8gdGhlIGNvbnRlbnQgZGl2XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuICAgICAgICAvL3ByaW9yaXR5IHRhYlxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHlUYWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gdGFza0xpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0W2ldLnByaW9yaXR5KVxyXG4gICAgICAgIGlmKHRhc2tMaXN0W2ldLnByaW9yaXR5ID09ICdZZXMnKXtcclxuICAgICAgICAgICAgY3JlYXRlVG9Ebyh0YXNrTGlzdFtpXSwgaSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrTGlzdFxyXG5leHBvcnQge3Byb2plY3RzLCBhZGRUYXNrLCBwcm9qTmFtZSwgdGFza1Byb2plY3QsIGZvcm0sIHRhc2tMaXN0fVxyXG5cclxuXHJcbi8vSSBoYXZlIGEgbmV3IHByb2JsZW0uIEhvdyBkbyBJIHJldHJpZXZlIHByb2plY3RzIGZyb20gbG9jYWxzdG9yYWdlIGFuZCBcclxuLy9hZGQgdGhlbSB0byB0aGUgRE9NP1xyXG5cclxuLy9JIGhhdmUgaXQgZmlndXJlZCBvdXQgZm9yIHRvLWRvJ3MsIHByb2plY3RzIGFyZSBkaWZmZXJlbnQgdGhvdWdoLlxyXG4vL1RoZSBpc3N1ZSBjb21lcyBmcm9tIGhvdyB0aGUgY3JlYXRlLXByb2plY3QgZnVuY3Rpb24gd29ya3MuXHJcbi8vY3JlYXRlUHJvamVjdCgpIGhhcyBubyBwYXJhbWV0ZXJzLiBUaGUgY29kZSBpbnNpZGUgYWNjZXNzZXMgdGhlIHByb2plY3RzIGFycmF5XHJcbi8vYW5kIGxvb3BzIHRocm91Z2ggaXQgY3JlYXRpbmcgcHJvamVjdHMgYW5kIGFwcGVuZGluZyB0aGVtIHRvIHRoZSBET01cclxuLy9Ib3dldmVyIGJlZm9yZSBhbnkgb2YgdGhhdCBjcmVhdGlvbiBpdCBmaXJzdCB0YWtlcyB0aGUgdmFsdWUgb2YgdGhlIHByb2pOYW1lIGlucHV0IGZpZWxkLlxyXG4vL1RoaXMgaXMgbm8gaXNzdWUgd2hlbiB0aGUgc3VibWl0IHByb2plY3QgYnV0dG9uIGlzIGNsaWNrZWQgYmVjYXVzZSB3aGVuIGl0IGlzIGNsaWNrZWQgdGhlIFxyXG4vL3Byb2pOYW1lIGlucHV0IGZpZWxkIHdpbGwgYWx3YXlzIGJlIGZpbGxlZC4gSHdvZXZlciBJIGFtIGF0dGVtcHRpbmcgdG8gY3JlYXRlIHByb2plY3RzIHdoZW4gdGhlXHJcbi8vd2luZG93IGluIGxvYWRpbmcgZm9yIHRoZSBmaXJzdCB0aW1lIChvbmxvYWQpIHRoaXMgY3JlYXRlcyBhIHByb2JsZW0gYmVjYXVzZSBhdCB0aGlzIHRpbWUgdGhlXHJcbi8vaW5wdXQgZmllbGQgJ3Byb2pOYW1lJyBoYXMgYSB2YWx1ZSBvZiBcIlwiIHdoaWNoIHRoZSBjcmVhdGVQcm9qZWN0KCkgZnVuY3Rpb24gdGFrZXMgYW5kIHVzZXMgdG9cclxuLy9jcmVhdGUgYW4gZW1wdHkgcHJvamVjdCwgcmVzdWx0aW5nIGluIHRoZXNlIGJsYW5rIDxsaT4gZWxlbWVudHMgd2hpY2ggSSBoYXZlIGJlZW4gc2VlaW5nLlxyXG4vL0kgYXR0ZW1wdGVkIHRvIHNvbHZlIHRoaXMgYnkgaW5zZXJ0aW5nIGFuIGlmIHN0YXRlbWVudCBpbiB0aGUgYmVnaW5uaW5nIG9mIHRoZSBmdW5jdGlvbiB3aGljaCBcclxuLy9yZWFkIChpZiBwcm9qTmFtZS52YWx1ZSA9PSBcIlwiKXtyZXR1cm59LiBUaGlzIHdvdWxkIHN0b3AgdGhlIGNyZWF0aW9uIG9mIGFueSBwcm9qZWN0cyB3aXRoIFxyXG4vL2FuIGVtcHR5IHRpdGxlLCBob3dldmVyIHRoaXMgYWxzbyBjcmVhdGVkIGFub3RoZXIgcHJvYmxlbS4gTm93IHRoZXJlIGFyZSBubyBwcm9qZWN0cyBiZWluZyBjcmVhdGVkXHJcbi8vYXQgYWxsLiBPbmNlIHRoZSBjb25kaXRpb24gb2YgdGhlIGlmIHN0YXRlbWVudCBpcyBtZXQsIHRoZSByZXN0IG9mIHRoZSBmdW5jdGlvbiB3aWxsIG5vdCBydW4sIG1lYW5pbmdcclxuLy8gdGhhdCBpdCB3aWxsIG5vdCBsb29wIHRocnUgdGhlIHByb2plY3RzIGFycmF5IGFuZCBjcmVhdGUgYW55IHByb2plY3RzIGluIHRoZSBET00uIEkgdGhpdWdodCBvZiBcclxuLy9jb3VudGVyaW5nIHRoaXMgYnkgcmV3cml0aW5nIHRoZSBjcmVhdGVQcm9qZWN0KCkgZnVuY3Rpb24gdG8gbWltaWMgaG93IHRoZSBjcmVhdHRvZG8oKSBmdW5jdGlvblxyXG4vL3dvcmtzLiBCdXQgSSBkb250IGtub3cgaWYgdGhhdHMgdGhlIHJpZ2h0IHdheSB0byBkbyBpdC4gVGhlIHRvLWRvcyBhcmUgd29ya2luZyBmaW5lLiBBbGwgdG9kb3Mgc3RvcmVkXHJcbi8vIGluIGxvY2Fsc3RvcmFnZSBhcmUgYmVpbmcgY3JlYXRlZC5cclxuXHJcbi8vaG93ZXZlciB0b2RvcyBhcmUgb2JqZWN0cyBhbmQgcHJvamVjdHMgYXJlIGFycmF5cy4gXHJcblxyXG4vL0kgbmVlZCB0byBmaWd1cmUgb3V0IGhvdyB0byBtYWtlIHRoZSBwcm9qZWN0cyB0aGF0IGhhdmUgYSB0aXRsZSwgd2hpbGUgYWxzbyBza2lwcGluZyB0aGUgb25lcyB3aXRoIFwiXCIgYXNcclxuLy90aGUgdGl0bGUuIE1heWJlIGEgZm9yIGxvb3Agd291bGQgd29yaz8uIGZvcihpdGVtIGluIHByb2plY3RzKXsgaWYoaXRlbS50aXRsZSA9PSBcIlwiKXtjcmVhdGUgcHJvamVjdH1lbHNle1xyXG4vL3JldHVybn0gSW5zdGVhZCBvZiBkb2luZyBmb3IocHJvamVjdHMubGVuZ3RoKSBhZGQgYW4gaWYgc3RhdG1lbnQgYWZ0ZXIgdGhhdCBza2lwcyB0aGUgb25lcyB3aXRoIFwiXCIgYXMgdGhlIHRpdGxlLlxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9