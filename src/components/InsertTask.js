import { useState } from 'react';

const InsertTask = () => {

    const [task, setTask] = useState({
        taskname: '',
        datedue: '',
        reminder: ''
    });

    const inputValues = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value }); 
    };


    const saveTask = async e => {
        e.preventDefault();
        
        if (task.taskname === '' || task.datedue === '') {
            alert('Please fill in all fields');
        } else {
            const endpoint = 'http://localhost/taskTrackerBackend/insertTask.php';
            await fetch(endpoint, {
                method: 'POST',
                body: JSON.stringify({ task }),
                header: {
                    'access-control-allow-origin: *': '',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((responseJson) => (
                    responseJson ? alert('New Task Saved') : alert('Task Not Saved')
                ));
            (window.location.reload())
        }
    }

    return (
        <div>
             <h1>New task</h1>
        <div className="container-new-task">
                <form className="new-task-form" onSubmit={saveTask}>
                    <input className="form-element" type="text" name='taskname' placeholder="Enter new task" onChange={inputValues} />
                    <input className="form-element" type="text" name="datedue" placeholder="Enter date due" onChange={inputValues}/>
                    <span className="form-element">
                        <label htmlFor="reminder">Reminder</label>
                            <input type="checkbox" name="reminder" value={'checked'? 1: 0} onChange={inputValues}/>
                        </span>
                    <button type="submit" className="btn btn-save">Save new task</button>
                </form>
            </div> 
        </div>    
    )
};

export default InsertTask;
