function Project(name) {
    this.name = name;
    this.todos = [];
    function addTodo(todo) {
        this.todos.push(todo);
    }
    function removeTodo(index) {
        this.todos.splice(index, 1);
        //updateIndices();
    }
}

export {Project};