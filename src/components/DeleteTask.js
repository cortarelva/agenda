import { useState } from 'react';

const DeleteTask = (props) => {
    
    const [task, setTask] = useState({ id: props.taskId });



    const inputValues = () => {
        setTask({ id: props.taskId }); 
    };


    const deleteTask = async () => {
        
        if (window.confirm("Are you sure you want to delete this task?")) {

            await fetch('http://localhost/taskTrackerBackend/delete.php?id=' + task.id)
                .then((response) => response.json())
                .then((responseJson) => (
                    responseJson ? alert('Task Deleted') : alert('Error Deleting Task')
                ));
            (window.location.reload())
        }else{
            alert("Task not deleted")
        }
    }   


    return(
    <div>
            <button type='button' onMouseOver={inputValues} onClick={deleteTask} className="btn btn-delete">DELETE</button>
    </div>
    )
};

export default DeleteTask;
