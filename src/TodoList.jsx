import { useState } from "react";
import './todo.css'
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){

    let [todos, setTodos] = useState([{Task:"sample", id: uuidv4(), isDone: false }]);
    let [newtodo, setnewtodo] = useState("");

    let addnewTask = () =>{
     setTodos((prevTodo) => {
        return [...prevTodo,{Task: newtodo, id:uuidv4(), isDone: false}]
     })
     setnewtodo("");
    };

    let  updateTask = (event) =>{
        event.preventDefault();
        setnewtodo(event.target.value)
    };

    let  deleteTask = (id) =>{
        setTodos(prevTasks=> prevTasks.filter(task => task.id !== id))
        console.log(id)
    };

    let markAsDone = (id) =>{
        setTodos((prevTodo) =>
         prevTodo.map((todo) =>{
            if(todo.id === id){
               return{
                ...todo,
                isDone: true,
               }

            }else{
                return todo;
            }
        }))
       
    }

    
    return(
    
        <div className="todo">
            <h1>Todo List</h1>
            <input placeholder="add Task" value={newtodo}  onChange={updateTask}/>
            <br></br>
            <button onClick={addnewTask} className="Add">Add Task</button>
            <br></br>  
            <hr></hr>
            <br></br>
            <h3>Task List</h3>
            <ul>
                {
                    todos.map((todo) => {
                       return <li key= {todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.Task.toUpperCase()}</span>
                       <br></br><br></br> 
                       <div className="btn">
                       <button onClick={() => markAsDone(todo.id)} className="done">Done</button>
                       <button onClick={() =>deleteTask(todo.id)}>Delete</button>
                       </div>
                       </li>
                    })
                }
            </ul>

        </div>
    )
}