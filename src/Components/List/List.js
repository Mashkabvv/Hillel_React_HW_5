import React from 'react';

//Components
import ToDoList from '../ToDoList/ToDoList';
import ToDoForm from '../ToDoForm/ToDoForm';

function List({ todoData, isFormShown, newTodo, toggleFormOpen, onDelete, onChangeValue, onTodoSave, markTodoDone, onTodoEdit }) {
    return (
        <>
            <ToDoList
                isFormShown = { isFormShown }
                todoData = { todoData }
                toggleFormOpen = { toggleFormOpen }
                onDelete = {onDelete}
                onTodoEdit = {onTodoEdit}
                markTodoDone = {markTodoDone}
            />
            {isFormShown ?
                <ToDoForm
                    newTodo = {newTodo}
                    onChangeValue = {onChangeValue}
                    onTodoSave = {onTodoSave}
                    toggleFormOpen = {toggleFormOpen}
                /> : null}
        </>
        )
}

export default List;
