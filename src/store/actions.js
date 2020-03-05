export const TOGGLE_FORM_OPEN_ACTION = 'TOGGLE_FORM_OPEN';
export const DELETE_TODO_ACTION = 'DELETE_TODO';
export const CHANGE_FORM_VALUE_ACTION = 'CHANGE_FORM_VALUE';
export const SAVE_TODO_ACTION = 'SAVE_TODO';
export const MARK_TODO_DONE_ACTION = 'MARK_TODO_DONE';
export const EDIT_TODO_ACTION = 'EDIT_TODO';

export function toggleFormOpen() {
    return {
        type: TOGGLE_FORM_OPEN_ACTION
    }
}

export function onDelete(id) {
    return {
        type: DELETE_TODO_ACTION,
        payload: id
    }
}

export function onChangeValue(obj) {
    return {
        type: CHANGE_FORM_VALUE_ACTION,
        payload: obj
    }
}

export function onTodoSave(todo) {
    return {
        type: SAVE_TODO_ACTION,
        payload: todo,
        id: Date.now()
    }
}

export function markTodoDone(todo) {
    return {
        type: MARK_TODO_DONE_ACTION,
        payload: todo,
        id: todo.id
    }
}

export function onTodoEdit(todo) {
    return {
        type: EDIT_TODO_ACTION,
        payload: todo,
        id: todo.id
    }
}
