function Todo(title, description, priority, deadline) {
    this.index;
    this.rendered = false;
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.priority = priority;
    const getRenderedStatus = () => this.rendered;
    const getIndex = () => this.index;
    const getTitle = () =>  this.title ;
    const getDescription = () =>  this.description;
    const getPriority = () =>  this.priority ;
    const getDeadline = () =>  this.deadline ;
    const setIndex = (index) => this.index = index;
    const changeRenderedStatus = (bool) => this.rendered = bool;
    return {getDeadline, getDescription, getPriority, getTitle, setIndex, changeRenderedStatus, getIndex, getRenderedStatus}
}

function Project(name) {
    //ovoo dovrsit!!!!!!!!!!!
    this.name = name
    this.index;
    this.rendered = false;
    let todos = [];
    this.currentProjectStatus = false;
    const getNumOfTodos = () => todos.length;
    const setCurrentProjectStatus = (bool) => this.currentProjectStatus = bool;
    const getCurrentProjectStatus = () => this.currentProjectStatus;
    const getName = () => this.name;
    function getTodos() {
        return todos;
    }
    const getIdx = () => this.index;
    const setIdx = (idx) => this.index = idx;
    const getRenderedStatus = () => this.rendered;
    const changeRenderedStatus = (bool) => this.rendered = bool;
    function addTodo(todo) {
        todos.push(todo);
        todo.setIndex(todos.length -1);
    }
    function removeTodo(index) {
        todos.splice(index, 1);
        updateIndices();
    }
    function updateIndices() {
        todos.forEach((todo, index) => {
            todo.setIndex(index);
        });
    }
    function setAllTodosNotRendered() {
        if (todos.length == 0) {
            return;
        }
        todos.forEach((todo) => {
            todo.changeRenderedStatus(false);
        })
    }
    return { getName, getNumOfTodos, setAllTodosNotRendered , addTodo, removeTodo, getTodos, getRenderedStatus, changeRenderedStatus, getIdx, setIdx, setCurrentProjectStatus, getCurrentProjectStatus}
}

export {Todo, Project};