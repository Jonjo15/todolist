function Todo(title, description, priority, deadline) {
    this.index;
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.priority = priority;
    const getTitle = () =>  this.title ;
    const getDescription = () =>  this.description;
    const getPriority = () =>  this.priority ;
    const getDeadline = () =>  this.deadline ;
    const setIndex = (index) => this.index = index;
    return {getDeadline, getDescription, getPriority, getTitle, setIndex}
}

export {Todo};