import React, { useEffect, useState } from "react";
//import { useState } from "react";


const Home = () => {
    const [task, setTask] = useState([])
     const [input, setInput] = useState({
        todo:"",
     })
      const handleSubmit = (e) => {
        e.preventDefault();
        if (input.todo.trim() === "") {
            alert("task can not be empty")
            
        }
        const newTask = {
            text: input.todo,
            dueDate:input.dueDate,
            dueTime:input.dueTime,
            timestamp: new Date().toLocaleString()
            
        }
        
      //  let list = JSON.parse(localStorage.getItem("todo-list")) || [];
        const updatedList = [...task, newTask];
        setTask(updatedList)
        localStorage.setItem("todo-list", JSON.stringify(updatedList))
        setInput({ todo: ""})
        alert('todo added')
        const [input, setInput] = useState({
            todo:"",
            dueDate:"",
            dueTime:""

        })
        
        
        
      }
      const handleInput = (e) => {
        e.persist();
        setInput({...input, [e.target.name]: e.target.value })
        

      }

      const handleDelete = (indexToRemove) => {
        const updatedList = task.filter((_, index) => index !== indexToRemove);
        setTask(updatedList);
        localStorage.setItem("todo-list", JSON.stringify(updatedList));
      }

      useEffect(() => {
        const list = JSON.parse(localStorage.getItem("todo-list")) || [];
        setTask(list)
      }, [])
    return (
        <div mt-5>
            <section className="d-flex flex-column justify-content-center align-items-center bg-light text-center mt-4">
                <div className="container">
                    <div className="d-flex">
                        <p>To-Do-App</p>
                       
                    </div>
                     <div className="">
                           <form action="" onSubmit={handleSubmit}>
                             <input type="text" value={input.list} onChange={handleInput} name="todo" placeholder="Enter activity" />
                             <input type="date"  onChange={handleInput} name="dueDate" />
                             <input type="time"  onChange={handleInput} name="dueTime" />
                            <button type="submit" className="bg-success mt-3 text-white" style={{height:"30px", width:"50px"}}>Add</button>

                           </form>
                            <ul style={{listStyleType: "none"}}>
                                {task.map((item, index) => (
                                    <li key={index } style={{textDecoration: "none", height:"50px"}} className="m-3 bg-dark text-white">
                                        <div><strong>{item.text}</strong></div>
                                       <div> <small>on {item.dueDate}  by {item.dueTime}</small> </div>
                                        
                                       <button style={{
                                        background: "red",
                                        color:"white",
                                        border: "none",
                                         marginTop:"-30px",
                                         marginRight:"10px",
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                       }} className="float-end mb-3 btn-sm" onClick={() => handleDelete(index)}>remove</button>
                                    </li>
                                  
                                ))}
                            </ul>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Home;