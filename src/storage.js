import {projectManager} from "./index"
import {Todo, Project} from "./factories"

const storage = (() => {
    let storeProjects = ()=>{
        localStorage.setItem("projects",JSON.stringify(projectManager.getProjectsArray()));
    };

    let getProjects = ()=>{
        if (!localStorage.getItem("projects")) {
            return projectManager.getProjectsArray();
        } 
        else {
            return JSON.parse(localStorage.getItem("projects"));
        }
    }

    let getStored = ()=> localStorage.getItem("projects") ? true : false;

    return {
        storeProjects,getProjects, getStored
    };
})();


export {storage}