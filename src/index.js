
import {Todo, Project} from "./factories";
import {domElements, getInputs} from "./dom"
const projectManager =(function() {
    let projects = [];
    
    let currentProject = projects[0]; 

    function changeCurrentProject(index) {
        currentProject = projects[index];
    }

    function addNewProject(prjct) {
        projects.push(prjct);
    }

    function deleteProject(index) {
        projects.splice(index, 1);
    }

    function viewProjects() {
        projects.forEach((project) => {
            console.log(project.name);
            //console.log(project.getTodos()[0].getTitle());
        })
    }
    function getCurrentProject() {
        return currentProject;
    }
    // function addTodoToProject(todo) {
    //     let todosArray = currentProject.getTodos();
    //     todosArray.push(todo);
    //     //currentProject.addTodo(todo);
    // }
    function currentProjectTodoArray() {
        let todosArray = currentProject.getTodos();
        return todosArray;
    }

    return {changeCurrentProject, addNewProject, deleteProject, viewProjects, getCurrentProject, currentProjectTodoArray}
})();

(function setDefaultProject(){
    let defaultProject = new Project("Default Project");
    let defaultTodo = new Todo("a", "b", "c", "d");
    projectManager.addNewProject(defaultProject);
    projectManager.changeCurrentProject(0);
    projectManager.getCurrentProject().addTodo(defaultTodo);
})();

function getTodoFromInput() {
    let inputs = getInputs();
    //titleinput
    let titleValue = inputs.todoTitle.value;
    //descriptioninuptu
    let descriptionValue = inputs.todoDescription.value; 
    //priority, deadline
    let priorityValue = inputs.todoPriority.value;
    let deadlineValue = inputs.todoDeadline.value;
    //let todo = new Todo()
    let todo = new Todo(titleValue, descriptionValue, priorityValue, deadlineValue);
    return todo;
}

//console.log(inputs.todoPriority.value);
 
export {getTodoFromInput, projectManager}
//projectManager.viewProjects();
//console.log(projectManager.getCurrentProject().getTodos()[0]);
//projectManager.changeCurrentProject(0);
//console.log(projectManager.getCurrentProject().tod.getTitle());