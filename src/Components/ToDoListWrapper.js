import { connect } from 'react-redux';
import { toggleFormOpen, onDelete, onChangeValue, onTodoSave, markTodoDone, onTodoEdit } from '../store/actions'
import List from './List/List';

function mapStateToProps(state) {
    return {
        todoData: state.todoData,
        isFormShown: state.isFormShown,
        newTodo: state.newTodo
    }
}

const mapDispatchToProps = {
    toggleFormOpen: toggleFormOpen,
    onDelete: onDelete,
    onChangeValue: onChangeValue,
    onTodoSave: onTodoSave,
    markTodoDone: markTodoDone,
    onTodoEdit: onTodoEdit
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
