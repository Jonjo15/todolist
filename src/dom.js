const domeElements =(function() {
    let projectsDiv = document.querySelector("#projects");
    let todosDiv = document.querySelector("#todos");
    let addNewTodoButton = document.querySelector("#newTodoButton");
    let newProjectButton = document.querySelector("#newProjectButton");

    return {projectsDiv, todosDiv, addNewTodoButton, newProjectButton};
})();

export {domeElements}