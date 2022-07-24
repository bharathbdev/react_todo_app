import * as React from 'react';
import { ADDTODO, TOGGLETODO, REMOVETODO } from "../actionTypes";

const initialState = [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false },
    { id: 3, title: 'todo3', completed: true },
    { id: 4, title: 'todo4', completed: false },
    { id: 5, title: 'todo5', completed: false },
]

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: action.payload.completed,
            };
            return [...state, todo]
        case TOGGLETODO:
            const index = state.findIndex((x) => x.id == action.payload.id);
             state[index]['completed'] = action.payload.completed;
             return state
        case REMOVETODO:
            return state.filter((x) => x.id != action.payload.id);
        default:
            return state;
    }
};
export default todos;


