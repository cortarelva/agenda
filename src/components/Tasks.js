
import { useState, useEffect } from 'react';
import DeleteTask from './DeleteTask';
import UpdateTask from './UpdateTask.js';

import '../App.css';
const Tasks = () => {

const endpoint = 'http://localhost/taskTrackerBackend/visualize.php';
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  

  const getTasks = async () => { 
    try {
      const response = await fetch(endpoint);
      const result = await response.json();
      setData(result.tasks);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }


  useEffect(() => { 
    getTasks();
    }, []);
  
    
if (loading) return "Loading...";
if (error) return "Error!";

  return (  
    <div className="container-task-list">
      <h1>Tasks</h1>
      <ul className="task-list">
          {Object.values(data).map(task => (
            <li className="list-item-header" key={task.id}> 
              <DeleteTask taskId={task.id} />
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Date Due</th>
                    <th>Reminder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="list-item-body">
                    <td>{task.taskname}</td>
                    <td>{task.datedue}</td>
                    <td>{task.reminder ? <span style={{ color: 'red'}}>Reminder</span>: <span>No Reminder</span>}</td>
                  </tr>
                </tbody>
              </table>
              <UpdateTask taskId={task.id}/>
            </li>
          ))}
        </ul>
    </div>
  );
}
  


export default Tasks;
