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
            console.log(project);
        })
    }
    function getCurrentProject() {
        return currentProject;
    }
    /* function addTodoToProject(todo) {
        currentProject.addTodo(todo);
    }
    function viewCurrentProjectsTodos() {
        currentProject.todos.forEach((todo) => {
            console.log(todo.getTitle())
        });
    } */

    return {changeCurrentProject, addNewProject, deleteProject, viewProjects, getCurrentProject}
})();

(function setDefaultProject(){
    let defaultProject = new Project("Default Project");
    let defaultTodo = new Todo("a", "b", "c", "d");
    projectManager.addNewProject(defaultProject);
    projectManager.changeCurrentProject(0);
    projectManager.getCurrentProject().todos.push(defaultTodo);
})();



projectManager.viewProjects();
console.log(projectManager.getCurrentProject().name);
projectManager.changeCurrentProject(0);
console.log(projectManager.getCurrentProject().todos[0].getTitle());