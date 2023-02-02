import React from 'react'
import { createContext,useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export  const context = createContext();

export default function ContextProvider({children}) {
    const[tasks,settasks]=useState([
        {id:uuidv4(),nom:'Watch TV'},
        {id:uuidv4(),nom:'Study'},
        {id:uuidv4(),nom:'Eat Lunch'}
    ])
    const [task,setTask]=useState('');
    const addTask=()=>{
    if (task.length==0){
        alert("Enter Task Name")
    }
    else {
    let ntasks=[...tasks];
    let ntask={};
    ntask.id=uuidv4();
    ntask.nom=task;
    ntasks.push(ntask);
    settasks(ntasks);
    setTask('');
    }
    }
    const deleteTask=(idp)=>{
    let ntasks=tasks.filter((t)=>{return t.id!=idp})
    settasks(ntasks);
    }
    let doneTask=(event)=> {

    console.log(event.target.parentNode.parentNode.style="margin:10px;background-color:springgreen;border-radius:5px;")
    }
  return (
    <div>
        <context.Provider value={{tasks,settasks,task,setTask,addTask,deleteTask,doneTask}}>
            {children}
        </context.Provider>
    </div>
  )
}
