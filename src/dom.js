import {getTodoFromInput, projectManager} from "./index"
import {Project} from "./projects";
import {Todo} from "./todos";

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
            //add it to the currentProject todos
            let currentProject = projectManager.getCurrentProject();
            currentProject.addTodo(Todo);

            renderTodos();
        });
    })();
    function renderTodos() {
        let currentProject = projectManager.getCurrentProject();
        let todos = currentProject.getTodos();
        todos.forEach(todo => {
            if (!todo.rendered) {
                //todo.changeRenderedStatus(true);
                let todoDiv =createTodoDiv(todo);
                todosDiv.appendChild(todoDiv);
            }
        });
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
        //deleteTodoButton.dataset.index = newTodo.getIndex();
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
    }
    return {projectsDiv, todosDiv};
})();

const inputs = (function() {
    let projectName = document.getElementById("projectName");
    let todoTitle = document.getElementById("todoTitle");
    let todoDescription = document.getElementById("todoDescription");
    let todoPriority = document.getElementById("priorityInput");
    let todoDeadline = document.getElementById("deadlineInput");

    return {projectName, todoTitle, todoDescription, todoPriority, todoDeadline}
})();
export {domeElements, inputs}