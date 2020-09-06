function Project(name) {
    //ovoo dovrsit!!!!!!!!!!!
    this.name = name
    let todos = [];
    function getTodos() {
        return todos;
    }
    function addTodo(todo) {
        todos.push(todo);
    }
    function removeTodo(index) {
        todos.splice(index, 1);
        //updateIndices();
    }

    return { name, addTodo, removeTodo, getTodos}
}

export {Project};