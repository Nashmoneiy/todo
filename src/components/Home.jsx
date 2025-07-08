import React, { useEffect, useState } from "react";
//import { useState } from "react";


const Home = () => {
    const [task, setTask] = useState([])
     const [input, setInput] = useState({
        todo:"",
        dueDate:"",
        dueTime:""
     })
     
      const handleInput = (e) => {
        e.persist();
        setInput({...input, [e.target.name]: e.target.value })
        

      }

      const handleDelete = (indexToRemove) => {
        const updatedList = task.filter((_, index) => index !== indexToRemove);
        setTask(updatedList);
        localStorage.setItem("todo-list", JSON.stringify(updatedList));
      }
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
        setInput({ list: "", dueDate:"", dueTime:""})
        alert('todo added')
       
       
        
        
        
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
                            <label className="text-dark">Activiuty</label>
                             <input type="text" value={input.list} onChange={handleInput} style={{width:"250px"}} name="todo" placeholder="Enter activity" />
                             <label className="text-dark m-2" >Date</label>
                             <input type="date" value={input.dueDate}  onChange={handleInput} name="dueDate" required />
                             <label className="text-dark m-2">Time</label>
                             <input type="time" value={input.dueTime}  onChange={handleInput} name="dueTime" placeholder="select time" />
                            <button type="submit" required className="bg-success mt-3 text-white" style={{height:"30px", width:"50px"}}>Add</button>

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
                                         left:"20px",
                                         marginTop:"-3%",
                                       
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                       }} className="float-end btn-sm me-3" onClick={() => handleDelete(index)}>remove</button>
                                       
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