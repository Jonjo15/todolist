
import {Todo, Project} from "./factories";
import {domElements, getInputs, renderTodos, renderProjects} from "./dom"
const projectManager =(function() {
    let projects = [];
    
    let currentProject = projects[0]; 

    function changeCurrentProject(index) {

        if (projects.length == 0) {
            return;
        }
        if (projects.length > 1) {
            let formerProject = getCurrentProject();
            formerProject.setCurrentProjectStatus(false);
        }
        currentProject = projects[index];
        currentProject.setCurrentProjectStatus(true);
        addClassSelected(index);
        //changeSelectedProjectClass(index)
    }

    function addNewProject(prjct) {
        projects.push(prjct);
        prjct.setIdx(projects.length -1);
        if (projects.length == 1 && prjct.getRenderedStatus()) {
            changeCurrentProject(0);
        }
        else if (projects.length == 1) {
            renderProjects();
            changeCurrentProject(0);
        }
    }

    function deleteProject(index) {
        projects.splice(index, 1);
        updateProjectIndices();
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
    function getProjectsArray() {
        return projects;
    }
    function updateProjectIndices() {
        projects.forEach((project, idx) => {
            project.setIdx(idx);
        });
    }
    function getNumOfProjects() {
        return projects.length
    }

    return {changeCurrentProject,getNumOfProjects, addNewProject, deleteProject, viewProjects, getCurrentProject, currentProjectTodoArray, getProjectsArray}
})();

(function setDefaultProject(){
    let defaultProject = new Project("Default Project");
    let defaultTodo = new Todo("a", "b", "c", "d");
    projectManager.addNewProject(defaultProject);
    //renderProjects();
    //projectManager.changeCurrentProject(0);
    projectManager.getCurrentProject().addTodo(defaultTodo);
    //domElements.projectsDiv.querySelector(".individualProject").classList.add("selected");
    renderTodos();
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
function addClassSelected(index) {
    if (!domElements.projectsDiv.hasChildNodes) {
        return;
    }
    let projectDivs = document.querySelectorAll(".individualProject");
    projectDivs.forEach((div) => {
        if (div.classList.contains("selected")) {
            div.classList.remove("selected");
        }
    });
    projectDivs[index].classList.add("selected");
}
// function changeSelectedProjectClass(index) {
//     let projectDivs = domElements.projectsDiv.querySelectorAll(".individualProject");
//     console.log(projectDivs);
//     /* projectDivs.forEach((div) => {
//         if (div.classList.t("selected")) {
//             div.classList.remove("selected");
//         }
        
//     }); */
//     projectDivs[index].classList.add("selected");
// }
function getProjectFromInput() {
    let inputs = getInputs();
    return new Project(inputs.projectName.value);
}

//console.log(inputs.todoPriority.value);
 
export {getProjectFromInput ,getTodoFromInput , projectManager, addClassSelected}
//projectManager.viewProjects();
//console.log(projectManager.getCurrentProject().getTodos()[0]);
//projectManager.changeCurrentProject(0);
//console.log(projectManager.getCurrentProject().tod.getTitle());