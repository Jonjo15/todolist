import {getTodoFromInput, getProjectFromInput, projectManager, addClassSelected} from "./index"
import {Todo, Project} from "./factories";

const domElements =(function() {
    let projectsDiv = document.querySelector("#projects");
    let todosDiv = document.querySelector("#todos");
    let projectForm = document.querySelector(".projectForm");
    let todoForm = document.querySelector(".todoForm");
    let addNewTodoButton = document.querySelector("#newTodoButton");
    let newProjectButton = document.querySelector("#newProjectButton");
    let submitProjectButton = document.getElementById("submitProjectButton");
    let submitTodoButton = document.getElementById("todoSubmitButton");

    (function bindEvents() {
        newProjectButton.addEventListener("click", (e) => {
            //create a form
            clearProjectInput();
            projectForm.style.display = "block";
            newProjectButton.style.display = "none";
        });
    
        addNewTodoButton.addEventListener("click", (e) => {
            //create a form
            todoForm.style.display = "block";
            addNewTodoButton.style.display = "none";
        });
        submitProjectButton.addEventListener("click", (e) => {
            //create Project object
            if (!getProjectFromInput()) {
                return alert("Fill in all the inputs!");
            }
            let project = getProjectFromInput();
            //add it to the projectManager
            projectManager.addNewProject(project);
            //render it
            console.log(project.getCurrentProjectStatus());
            renderProjects();
           // let index = (projectManager.getNumOfProjects -1);
            let formerProject = projectManager.getCurrentProject();
            projectManager.changeCurrentProject(project.getIdx());
            switchCurrentProjectTodoDisplay(formerProject);
            projectForm.style.display = "none";
            newProjectButton.style.display = "inline-block";
        });
        submitTodoButton.addEventListener("click", (e) => {
            //create todo Object
            if (!getTodoFromInput()) {
                return alert("Fill in all the inputs!");
            }
            let todo = getTodoFromInput();
            console.log(todo.getTitle());
            //add it to the currentProject todos
            let currentProject = projectManager.getCurrentProject();
            currentProject.addTodo(todo);
            todoForm.style.display = "none";
            addNewTodoButton.style.display = "inline-block";
            clearTodoInputs();

            renderTodos();
        });
    })();
    
    return {projectsDiv, todosDiv};
})();
function renderTodos() {
    let currentProject = projectManager.getCurrentProject();
    let todos = currentProject.getTodos();
    todos.forEach(todo => {
        if (!todo.getRenderedStatus()) {
           // console.log(todo.getIndex());
           // console.log(todo.getRenderedStatus());
            todo.changeRenderedStatus(true);
           // console.log(todo.getRenderedStatus());
            let todoDiv =createTodoDiv(todo);
            domElements.todosDiv.appendChild(todoDiv);
        }
    function createTodoDiv(newTodo) {
            let div = document.createElement("div");
            div.classList.add("individualTodo");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            p3.classList.add("hiddenInfo");
            const p4 = document.createElement("p");
            p4.classList.add("hiddenInfo");
            const deleteTodoButton = document.createElement("button");
            deleteTodoButton.classList.add("deleteTodo");
            div.dataset.index = newTodo.getIndex();
            deleteTodoButton.dataset.index = newTodo.getIndex(); 
            deleteTodoButton.textContent = "Delete";
            deleteTodoButton.addEventListener("click", (e)=> {
                //console.log("aha");
                removeTodoDiv(div, e.target.dataset.index);
            });
            p1.textContent ="Title: " + newTodo.getTitle();
            p2.textContent = "Description: " + newTodo.getDescription();
            p3.textContent = "Priority: " + newTodo.getPriority();
            p4.textContent = "Deadline: " + newTodo.getDeadline();
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(p4); 
            div.appendChild(deleteTodoButton); 

            /* div.addEventListener("mouseenter", function( event ) {   
                // highlight the mouseenter target
                let hiddenParas = event.target.querySelectorAll(".hiddenInfo");
                hiddenParas.forEach((para) => {
                    para.style.display = "block";
                });
              
                // reset the color after a short delay
                setTimeout(function() {
                    hiddenParas.forEach((para) => {
                        para.style.display = "none";
                    })
                }, 500);
              }, false); */

            return div;
        }   
    });
}
function renderProjects() {
    let projectsArray = projectManager.getProjectsArray();
    projectsArray.forEach((project, index) => {
        if (!project.getRenderedStatus()) {
            console.log(project.getName());
            project.changeRenderedStatus(true);
            let projectDiv = createProjectDiv(project);
            domElements.projectsDiv.appendChild(projectDiv);
        }
    })
}
function createProjectDiv(project) {
    let div = document.createElement("div");
    div.classList.add("individualProject");
    const switchButton = document.createElement("button");
    switchButton.textContent = project.getName();
    switchButton.classList.add("switchButton");
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("deleteProject");
    div.dataset.index = project.getIdx();
    /* div.addEventListener("click", (e) => {
        let index = div.dataset.index;
        projectManager.changeCurrentProject(index);
    }); */
    deleteProjectButton.dataset.index = project.getIdx(); 
    switchButton.dataset.index = project.getIdx();
    deleteProjectButton.textContent = "Delete";
    deleteProjectButton.addEventListener("click", (e) => {
        console.log("aha");
        let isCurrentProject = project.getCurrentProjectStatus();
        console.log(isCurrentProject);
        if (isCurrentProject) {
            //removeProjectDiv();
            let individualTodos = document.querySelectorAll(".individualTodo");
            individualTodos.forEach((todo) => {
                todo.remove();
            });
            removeProjectDiv(div, project.getIdx());
            projectManager.changeCurrentProject(0);
            renderTodos();
            //addClassSelected(0);
        }
        else {
            removeProjectDiv(div, project.getIdx());
        }
        //removeProjectDiv(); and its todos;
    });
    switchButton.addEventListener("click", (e) => {
        let index = e.target.dataset.index;
        let formerProject = projectManager.getCurrentProject();
        projectManager.changeCurrentProject(index);
        switchCurrentProjectTodoDisplay(formerProject);
    });
    div.appendChild(switchButton);
    div.appendChild(deleteProjectButton);

    return div;
}
function switchCurrentProjectTodoDisplay(exProject) {
    let currentProject = projectManager.getCurrentProject();
    let numOfTodos = currentProject.getNumOfTodos();
    if (numOfTodos == 0) {
        let individualTodos = document.querySelectorAll(".individualTodo");
            individualTodos.forEach((todo) => {
            todo.remove();
            exProject.setAllTodosNotRendered();
        });
    }
    else {
        let individualTodos = document.querySelectorAll(".individualTodo");
            individualTodos.forEach((todo) => {
            todo.remove();
            exProject.setAllTodosNotRendered();
        });
        renderTodos();
    }
}
function removeProjectDiv(div, index) {
    projectManager.deleteProject(index);
    div.remove();
    updateProjectDivButtonIndices();
}
function removeTodoDiv(div, index) {
    let currentProject = projectManager.getCurrentProject();
    console.log(currentProject.getTodos());
    currentProject.removeTodo(index);
    console.log(currentProject.getTodos());
    div.remove();
    updateTodoDivIndices();
    updateButtonIndices();
}
function updateProjectDivButtonIndices() {
    const projectDivs = document.querySelectorAll(".individualProject");
    const buttons = document.querySelectorAll(".deleteProject");
    const switchButtons = document.querySelectorAll(".switchButton");
    switchButtons.forEach((button, index) => {
        button.dataset.index = index;
    })
    projectDivs.forEach((projectDiv, index) => {
        projectDiv.dataset.index = index;
    });
    buttons.forEach((button, index) =>{
        button.dataset.index = index;
    });
}
function updateTodoDivIndices() {
    const todoDivs = document.querySelectorAll(".individualTodo");
    todoDivs.forEach((todoDiv, index) => {
        todoDiv.dataset.index = index;
    });
}
function updateButtonIndices() {
    const buttons = document.querySelectorAll(".deleteTodo");
    buttons.forEach((button, index) => {
        button.dataset.index = index;
    })
}
function getInputs() {
    let projectName = document.getElementById("projectName");
    let todoTitle = document.getElementById("todoTitle");
    let todoDescription = document.getElementById("todoDescription");
    let todoPriority = document.getElementById("priorityInput");
    let todoDeadline = document.getElementById("deadlineInput");

    return {projectName, todoTitle, todoDescription, todoPriority, todoDeadline}
}
function clearTodoInputs() {
    let inputs = getInputs();
    inputs.todoTitle.value = "";
    inputs.todoDescription.value = "";
    inputs.todoPriority.selectedIndex = 1;
    inputs.todoDeadline.value = "";
}
function clearProjectInput() {
    let inputs = getInputs();
    inputs.projectName.value = "";
}
export {domElements, getInputs, renderTodos, renderProjects}