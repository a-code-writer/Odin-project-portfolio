import taskList from "./index.js";
import { projects } from "./index.js";

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

        toDoCheck.addEventListener('change', () => {
            if(toDoCheck.checked == true){
                newToDo.status = true
                console.log(newToDo.status)
                toDoName.style.textDecoration = 'line-through';
                toDoDate.style.textDecoration = 'line-through';
                toDoName.style.opacity = '0.5';
                toDoDate.style.opacity = '0.5';
            } else {
                newToDo.status = false
                console.log(newToDo.status)
                toDoName.style.textDecoration = 'none';
                toDoDate.style.textDecoration = 'none';
                toDoName.style.opacity = '1';
                toDoDate.style.opacity = '1';
            }
        })

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

export default createToDo;