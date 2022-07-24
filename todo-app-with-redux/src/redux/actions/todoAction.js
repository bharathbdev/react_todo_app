import { ADDTODO, TOGGLETODO, REMOVETODO } from "../actionTypes";

export const addTodo = (obj) =>
    (dispatch) => {
        const todo = {
            title: obj.title,
            completed: obj.completed,
        };
        dispatch({type: ADDTODO, payload: todo})
    }

export const toggleTodo = (obj) =>
    (dispatch) => {
        const todo = {
            id: obj.id,
            completed: obj.completed,
        };
        dispatch({type: TOGGLETODO, payload: todo});
    }

export const removeTodo = (obj) =>
    (dispatch) => {
        const todo = {
            id: obj.id
        };
        dispatch({type: REMOVETODO, payload: todo});
    }

