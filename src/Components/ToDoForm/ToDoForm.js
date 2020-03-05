import React from 'react';
import styles from './ToDoForm.module.css'

function ToDoForm({newTodo, onChangeValue, onTodoSave, toggleFormOpen}) {
    
    function onSave(e) {
        e.preventDefault();
        onTodoSave(newTodo);
    }
    
    return (
            <form className = { styles.form_wrap } onSubmit = { onSave }>
                <div className = { styles.input_wrap }>
                    <input className = { styles.input } type='text' value={ newTodo.title } onChange={ (e) => onChangeValue({title: e.target.value}) } />
                </div>
                <div className = { styles.btn_wrap }>
                    <button type = 'submit' className = { styles.form_btn }>Save</button>
                    <button className = { styles.form_btn } onClick={toggleFormOpen}>Cancel</button>
                </div>
            </form>
    );
}

export default ToDoForm;
