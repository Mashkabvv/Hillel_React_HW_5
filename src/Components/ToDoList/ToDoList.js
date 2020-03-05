import React from 'react';
import styles from './ToDoList.module.css'
import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoList({ todoData, isFormShown, toggleFormOpen, onDelete, markTodoDone, onTodoEdit }) {
    console.log(isFormShown);
    return (
        <div className = { styles.container }>
            {isFormShown ? <div className = {styles.background} /> : null}
            <div className = { styles.wrap }>
                <header className = { styles.header }>
                    <button className = { styles.btn_add } onClick = { toggleFormOpen }>ADD</button>
                </header>
                <div className = { styles.list_wrap }>
                    {
                        todoData.map(item => {
                            return <ToDoItem
                                key = {item.id}
                                todoItem = {item}
                                onDelete = {onDelete}
                                onTodoEdit = {onTodoEdit}
                                markTodoDone = {markTodoDone}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ToDoList;
