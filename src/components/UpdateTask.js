import { useState,useEffect } from 'react'

import '../App.css';

const UpdateTask = (props) => {

  const [taskId, setTaskId] = useState({ 
    id: ''
  });
  
  const [task, setTask] = useState({
    id:'',
    taskname: '',
    datedue: '',
    reminder: ''
    }); 
  

  
  const inputValues = async () => { 
     setTaskId({...taskId, id: props.taskId }); 
  }  
  console.log(taskId.id)

  const getTask = async () => {
    await fetch("http://localhost/taskTrackerBackend/update.php?id=" + taskId.id)
      .then((response) => response.json())
      .then((tasks) => {
        console.log(...tasks)
        setTask({
          id: tasks.id,
          taskname: tasks.taskname,
          datedue: tasks.datedue,
          reminder: tasks.reminder
        });
      });
  }
console.log(task.taskname)
  
  
  useEffect(() => {
    inputValues();
    getTask();
  }, []);
  

  function showModal(e) {
      e.preventDefault();
    getTask();
    document.querySelector('.display').style.display = 'flex';
  }
 
  function hideModal(e) {
    e.preventDefault();
    document.querySelector('.display').style.display = 'none';
  }
 

  return (
    <div>
      <button type="button"   onClick={showModal} className="btn btn-update">UPDATE</button>
    
       <div className="modal-container display">
            <h1 className="update-header">Update Task</h1>
        <form className="new-task-form">
                <input className="form-element update" type="text" id='taskname' placeholder={task.taskName} />
                <input className="form-element update" type="text" id="datedue"  placeholder={task.dateDue} />
                <span className="">
            <label htmlFor="reminder">Reminder: </label>
                    <input type="checkbox" name="reminder" value={'checked'? 1: 0} />
                </span>
                <div>
                    <button type="submit"  className="btn btn-save-update">Save</button>
                    <button type="button" onClick={hideModal} className="btn btn-cancel">Cancel</button>
                </div>
                </form>
            </div>
    </div>
  )
}

export default UpdateTask;
