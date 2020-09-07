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

export {Todo};