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
            //add it to the currentProject todos
            //render
        });
    })();
    function render() {

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