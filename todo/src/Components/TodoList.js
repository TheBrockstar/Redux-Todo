import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import {handleInput, todoAdd, todoComplete, todoDelete} from '../Actions'; 

const TodoList = props => {

    const addSubmit = e => {
        e.preventDefault();
        props.todoAdd();
    }

    return  (
        <section className="todo-list">
            <div className="container">
                <div className="todos">
                    {props.todos.map(
                        todo => <Todo key={todo.id} completed={todo.completed} complete={props.todoComplete} id={todo.id} text={todo.text}/>
                    )}
                </div>
                <div className="todo-form">
                    <form onSubmit={addSubmit}>
                        <div className="new-todo container">
                            <label htmlFor="new-todo">Add task here</label>
                            <input type="text" name="new-todo" id="new-todo" value={props.currentInputText} onChange={(e) => props.handleInput(e.currentTarget.value)}/>
                        </div>
                        <div className="add-todo todo-button" onClick={addSubmit}>Add Task</div>
                    </form>
                        <div className="remove-todo todo-button" onClick={() => props.todoDelete()}>Remove Task</div>
                </div>
            </div>
        </section>
    )
}

const connectMyProps = state => (
    {   
        todos: state.todos,
        currentInputText: state.currentInputText
    }
)

export default connect(connectMyProps, { handleInput, todoAdd, todoComplete, todoDelete })(TodoList);