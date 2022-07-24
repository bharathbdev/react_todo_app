import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../../redux/actions/todoAction';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleComplete = () => {
        dispatch(toggleTodo({ id: id, completed: !completed }));
    };

    const handleRemove = () => {
        dispatch(removeTodo({ id : id}));
    };
    return (
            <div >
        <span >
          <input
              type="checkbox"
              checked={completed}
              onChange={handleComplete}
          >
          </input>
            {title}
        </span>
                <button  onClick={handleRemove}>
                    Delete
                </button>
            </div>

    );
};

export default TodoItem;
