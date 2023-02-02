import React from 'react'
import Task from './Task'
import { useContext } from 'react';
import { context } from './contexts/context';

export default function ListeDo() {
  const {tasks,settasks,task,setTask,addTask,deleteTask,doneTask} = useContext(context);
  // const[tasks,settasks]=useState([
  //   {id:uuidv4(),nom:'Watch TV'},
  //   {id:uuidv4(),nom:'Study'},
  //   {id:uuidv4(),nom:'Eat Lunch'}
  // ])
  // const [task,setTask]=useState('');
  // const addTask=()=>{
  //   if (task.length==0){
  //     alert("Enter Task Name")
  //   }
  //   else {
  //   let ntasks=[...tasks];
  //   let ntask={};
  //   ntask.id=uuidv4();
  //   ntask.nom=task;
  //   ntasks.push(ntask);
  //   settasks(ntasks);
  //   setTask('');
  //   }
  // }
  // const deleteTask=(idp)=>{
  //   let ntasks=tasks.filter((t)=>{return t.id!=idp})
  //   settasks(ntasks);
  // }
  // let doneTask=(event)=> {

  //   console.log(event.target.parentNode.parentNode.style="margin:10px;background-color:springgreen;border-radius:5px;")
  // }
  return (
    <div>
      <h1>TO Do List</h1>
        <form>
            <input type="text"  id='txt2' value={task} placeholder="Entre Task Name"
                   onChange={(e)=>{setTask(e.target.value)}} />    
                   <input type="button" onClick={addTask} value="➕ New Task" id='add' />
        </form>
        <br></br>
          {
            tasks.map((t)=>{
              return <div key={t.id}><Task delf={()=>deleteTask(t.id)} donef={doneTask} txt={t.nom}/></div>
            })
          }
       
    </div>
  )
}
