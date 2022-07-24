import React from 'react';
import { useSelector } from 'react-redux';
const TotalCompleteItems = () => {
    const todos = useSelector((state) => state.todos);
    const getCompletedTodo = () => {
        return todos.filter((x) => x.completed).length;
    };
    return <h4 >Total Complete Items: {getCompletedTodo()}</h4>;
};

export default TotalCompleteItems;
