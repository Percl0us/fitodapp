/*
todos = [ {
title
desctiptn}] */

export function Todos(props) {
    const todos= props.todos;
    const setTodos = props.setTodos;
    function randd(index) {
        
        const file = [...todos];
        file[index].completed=!file[index].completed;
        setTodos(file);
    }
    return (
        <div>
            {todos.map(function (todo, index) {
                return <div key={index}>
                    <h2>{todo.title}</h2>
                    <h3>{todo.description}</h3>
                    <button onClick={()=>randd(index)}>{todo.completed == true ? "completed" : "Mark as complete"}</button>
                </div>
            })}
        </div>)

}