!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n,o){this.index,this.rendered=!1,this.title=e,this.description=t,this.deadline=o,this.priority=n;return{getDeadline:()=>this.deadline,getDescription:()=>this.description,getPriority:()=>this.priority,getTitle:()=>this.title,setIndex:e=>this.index=e,changeRenderedStatus:e=>this.rendered=e,getIndex:()=>this.index}}function r(e){this.name=e,this.rendered=!1;let t=[];return{name:e,addTodo:function(e){t.push(e)},removeTodo:function(e){t.splice(e,1)},getTodos:function(){return t}}}n.r(t),n.d(t,"getTodoFromInput",(function(){return c})),n.d(t,"projectManager",(function(){return i}));!function(){let e=document.querySelector("#projects"),t=document.querySelector("#todos"),n=document.querySelector("#newTodoButton"),r=document.querySelector("#newProjectButton"),d=document.getElementById("submitProjectButton"),u=document.getElementById("todoSubmitButton");r.addEventListener("click",e=>{console.log("blabalblablb")}),n.addEventListener("click",e=>{}),d.addEventListener("click",e=>{}),u.addEventListener("click",e=>{c(),i.getCurrentProject().addTodo(o),i.getCurrentProject().getTodos().forEach(e=>{if(!e.rendered){let n=function(e){let t=document.createElement("div");t.classList.add("individualTodo");const n=document.createElement("p"),o=document.createElement("p"),r=document.createElement("p"),d=document.createElement("p"),i=document.createElement("button");return i.classList.add("deleteTodo"),n.textContent=e.getTitle(),o.textContent=e.getDescription(),r.textContent=e.getPriority(),d.textContent=e.getDeadline(),t.appendChild(n),t.appendChild(o),t.appendChild(r),t.appendChild(d),t.appendChild(i),t}(e);t.appendChild(n)}})})}();const d={projectName:document.getElementById("projectName"),todoTitle:document.getElementById("todoTitle"),todoDescription:document.getElementById("todoDescription"),todoPriority:document.getElementById("priorityInput"),todoDeadline:document.getElementById("deadlineInput")},i=function(){let e=[],t=e[0];return{changeCurrentProject:function(n){t=e[n]},addNewProject:function(t){e.push(t)},deleteProject:function(t){e.splice(t,1)},viewProjects:function(){e.forEach(e=>{console.log(e.name)})},getCurrentProject:function(){return t},currentProjectTodoArray:function(){return t.getTodos()}}}();function c(){return new o(d.todoTitle.value,d.todoDescription.value,d.todoPriority.value,d.todoDeadline.value)}!function(){let e=new r("Default Project"),t=new o("a","b","c","d");i.addNewProject(e),i.changeCurrentProject(0),i.getCurrentProject().addTodo(t)}(),console.log(d.todoPriority.value)}]);