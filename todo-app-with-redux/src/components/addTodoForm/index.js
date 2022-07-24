import * as React from 'react';
import { useState } from 'react';
import { addTodo } from '../../redux/actions/todoAction';
import { useDispatch } from 'react-redux';

const AddTodoForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(
            addTodo({
                title: value,
                completed: false,
            })
        );
    };

    return (
        <form onSubmit={onSubmit} >
            <label >Name</label>
            <input
                type="text"
                placeholder="Add todo..."
                value={value}
                onChange={(event) => setValue(event.target.value)}
            >
            </input>
            <button type="submit" className="btn btn-primary mb-2">
                Submit
            </button>
        </form>
    );
};

export default AddTodoForm;
