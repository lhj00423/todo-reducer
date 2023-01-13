import React from 'react';

const TodoLists = ({todos, toggleTodo, deleteTodo }) => {
    return (
        <div>
            <ul>
                 {todos.map(todo=><li key={todo.id}><span onClick={()=>toggleTodo}>{todo.text}</span>
                 <button onClick={()=>{deleteTodo(todo.id)}}>삭제</button></li>)}
            </ul>
        </div>
    );
};

export default TodoLists;