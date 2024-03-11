import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import  TodoItem from "../TodoItem/todoItem"

import "./todo.css"

const Todo = () => {
    const [task,setTask] = useState("")
    const [todosList,setTodosList] = useState([])

    const onChangeTodo = e => {
        setTask(e.target.value)
    }
    const onHandleSubmit = e => {
        e.preventDefault()

        if (task === "") {
            alert("Enter task")
        }
        else {
            const newTodo = {
                id: uuidv4(),
                todo: task,
            }
            setTodosList([...todosList,newTodo])
            setTask("")
        }
    }

    const onDeleteHandler = (id) => {
        const newTodosList = todosList.filter((eachTodo) => eachTodo.id !== id)
        setTodosList(newTodosList)
    }
    
    return(
        <div className="outer-container"> 
        <div className="inner-container">
            <h1 className="todo-heading">Day Goals!</h1>
                <form className="form" onSubmit={onHandleSubmit}>
                    <input className="todo-input" value={task} onChange={onChangeTodo} placeholder="Add a Todo" />
                    <button className="add-button" type="submit">Add Todo</button>
                </form>
                <ul className="todo-item-container">
                    {
                        todosList.map((eachTodo) => (
                            <TodoItem key={eachTodo.id} details={eachTodo} onDeleteHandler={onDeleteHandler} />
                        ))
                    }
                </ul>
        </div>
        </div>
    )
}
export default Todo