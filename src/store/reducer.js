import {
    TOGGLE_FORM_OPEN_ACTION,
    DELETE_TODO_ACTION,
    CHANGE_FORM_VALUE_ACTION,
    SAVE_TODO_ACTION,
    MARK_TODO_DONE_ACTION,
    EDIT_TODO_ACTION
} from "./actions";

const initialState = {
    todoData: [
        {
            id: 1,
            title: '1. Check daughter\'s home work',
            isDone: false
        },
        {
            id: 2,
            title: '2. Do my home work',
            isDone: false
        },
        {
            id: 3,
            title: '3. Don\'t forget to sleep)',
            isDone: false
        },
    ],
    isFormShown: false,
    newTodo: {title:'', isDone: false}
};

export default function (state = initialState, action) {
    
    function createTodo() {
        return {...state, newTodo: {title:'', isDone: false}, todoData: [...state.todoData, {...action.payload, id: action.id}], isFormShown: !state.isFormShown};
    }
    
    function updateTodo() {
        return {...state, newTodo: {title:'', isDone: false}, todoData: state.todoData.map(item => item.id === action.payload.id ? action.payload : item), isFormShown: !state.isFormShown}
    }

    switch (action.type) {
        case TOGGLE_FORM_OPEN_ACTION:
            // debugger;
            return {...state, newTodo: {title:'', isDone: false}, isFormShown: !state.isFormShown};
        case DELETE_TODO_ACTION:
            // debugger;
            return {...state, todoData: state.todoData.filter(item => item.id !== action.payload)};
        case CHANGE_FORM_VALUE_ACTION:
            // debugger;
            return {...state, newTodo: {...state.newTodo, ...action.payload}};
        case SAVE_TODO_ACTION:
            // debugger;
            return action.payload.id ? updateTodo() : createTodo();
        case MARK_TODO_DONE_ACTION:
            return {...state, todoData: state.todoData.map(item => item.id !== action.id ? item : {...action.payload, isDone: !action.payload.isDone} )};
        case EDIT_TODO_ACTION:
            // debugger;
            return {...state, newTodo: action.payload, isFormShown: !state.isFormShown};
        default:
            return state
    }
}

