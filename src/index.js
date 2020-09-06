import {Project} from "./projects";
import {Todo} from "./todos";

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
    function viewCurrentProjectsTodos() {
        let todosArray = currentProject.getTodos();
        todosArray.forEach((todo) => {
            console.log(todo.getTitle());
            console.log(todo.getDescription());
        })
    }

    return {changeCurrentProject, addNewProject, deleteProject, viewProjects, getCurrentProject, viewCurrentProjectsTodos}
})();

(function setDefaultProject(){
    let defaultProject = new Project("Default Project");
    let defaultTodo = new Todo("a", "b", "c", "d");
    projectManager.addNewProject(defaultProject);
    projectManager.changeCurrentProject(0);
    projectManager.getCurrentProject().addTodo(defaultTodo);
})();

function getTodoFromInput() {
    //titleinput
    //descriptioninuptu
    //priority, deadline
    //let todo = new Todo()
}


function render() {

}

//projectManager.viewProjects();
//console.log(projectManager.getCurrentProject().getTodos()[0]);
//projectManager.changeCurrentProject(0);
//console.log(projectManager.getCurrentProject().tod.getTitle());