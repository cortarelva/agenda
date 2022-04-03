import { useState,useEffect } from 'react'

import '../App.css';

const UpdateTask = (props) => {

  const [task, setTask] = useState('');
  

  
  const inputValues = async(e) => { 
      e.preventDefault();
      setTask(
        {
          'id': props.taskId,
          'taskname': props.taskName,
          'datedue': props.dateDue,
          'reminder': props.reminDer
        }
      );
  }  

  console.log(task.id, task.taskname, task.datedue, task.reminder);
 
  useEffect(() => {
    inputValues();
  },[]);
  

  function showModal() {
    document.querySelector('.display').style.display = 'flex';
  }
 
  function hideModal(e) {
    e.preventDefault();
    document.querySelector('.display').style.display = 'none';
  }
 

  return (
    <div>
      <button type="button" onMouseOver={inputValues}  onClick={showModal} className="btn btn-update">UPDATE</button>
    
       <div className="modal-container display">
            <h1 className="update-header">Update Task</h1>
        <form className="new-task-form">
                <input className="form-element update" type="text" id='taskname' placeholder={task.taskname} />
                <input className="form-element update" type="text" id="datedue"  placeholder={task.datedue} />
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

export default UpdateTask
