import { useState } from "react"
import { MdOutlineEdit } from "react-icons/md";

import { MdDeleteOutline } from "react-icons/md";

import "./todoItem.css"
const TodoItem = (props) => {
    const [count,setCount] = useState(0)
    const [editable,setEditable] = useState(false)
    const {details} = props
    const {id,todo,onDeleteHandler} = details
    // const onChangeTodo = e => {}
    const onClickEdit = () => {
        setCount((count + 1))
        setEditable(!editable)
    }

    return(
        <li className="list-item">
            <div className="todo-container">
             <input className="todoValue" id="todoValue" value={todo} />   &nbsp;
                <p>(Updated {count} Times) </p> 
            </div>
            <div>
                <label className="edit-btn" htmlFor="todoValue" onClick={onClickEdit}>
                    <MdOutlineEdit size={30} color="white" />
                </label>  &nbsp;
                <button className="del-btn" type="button" onClick={() => onDeleteHandler(todo.id)}>
                    <MdDeleteOutline size={30} color="red"/>
                </button>
            </div>
            
        </li>
    )
}
export default TodoItem