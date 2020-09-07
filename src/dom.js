import {getTodoFromInput, projectManager} from "./index"
import {Todo, Project} from "./factories";

const domeElements =(function() {
    let projectsDiv = document.querySelector("#projects");
    let todosDiv = document.querySelector("#todos");
    let addNewTodoButton = document.querySelector("#newTodoButton");
    let newProjectButton = document.querySelector("#newProjectButton");
    let submitProjectButton = document.getElementById("submitProjectButton");
    let submitTodoButton = document.getElementById("todoSubmitButton");

    (function bindEvents() {
        newProjectButton.addEventListener("click", (e) => {
            //create a form
            console.log("blabalblablb")
        });
    
        addNewTodoButton.addEventListener("click", (e) => {
            //create a form
        });
        submitProjectButton.addEventListener("click", (e) => {
            //create Project object
            //add it to the projectManager
            //render it
        });
        submitTodoButton.addEventListener("click", (e) => {
            //create todo Object
            let todo = getTodoFromInput();
            console.log(todo.getTitle());
            //add it to the currentProject todos
            let currentProject = projectManager.getCurrentProject();
            currentProject.addTodo(todo);
            console.log(currentProject.getTodos());
            clearTodoInputs();

            renderTodos();
        });
    })();
    function renderTodos() {
        let currentProject = projectManager.getCurrentProject();
        let todos = currentProject.getTodos();
        todos.forEach(todo => {
            if (!todo.getRenderedStatus()) {
                console.log(todo.getIndex());
               // console.log(todo.getRenderedStatus());
                todo.changeRenderedStatus(true);
               // console.log(todo.getRenderedStatus());
                let todoDiv =createTodoDiv(todo);
                todosDiv.appendChild(todoDiv);
            }
  function createTodoDiv(newTodo) {
        let div = document.createElement("div");
        div.classList.add("individualTodo");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");
        const deleteTodoButton = document.createElement("button");
        deleteTodoButton.classList.add("deleteTodo");
        deleteTodoButton.dataset.index = newTodo.getIndex(); 
        deleteTodoButton.textContent = "Delete";
        deleteTodoButton.addEventListener("click", (e)=> {
            console.log("aha");
            //dovrsit ovo
        });
        p1.textContent = newTodo.getTitle();
        p2.textContent = newTodo.getDescription();
        p3.textContent = newTodo.getPriority();
        p4.textContent = newTodo.getDeadline();
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4); 
        div.appendChild(deleteTodoButton); 

        return div;
    }      });
    }
    
    return {projectsDiv, todosDiv};
})();

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
export {domeElements, getInputs}