import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../todoItem';
const TodoList = () => {

    const todos = useSelector((state) => state.todos);

    return (
        <ul >
            {todos.map((todo) => (
                <TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id}/>
            ))}
        </ul>
    );
};

export default TodoList;
