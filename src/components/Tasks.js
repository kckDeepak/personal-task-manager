import { React, useState} from 'react'
import "./Tasks.css"
import { NavLink } from 'react-router-dom';

const Tasks = () => {

    const [tasks, updateTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    const addTask = (e)=>{
        e.preventDefault();
        if(!newTask.trim()) return;

        const task = {
            id: Date.now(),
            title: newTask,
            completed: false,
        };
        updateTasks([...tasks, task]);
        setNewTask("");
    };

    const toggleTask = (id)=>{
        updateTasks(tasks.map(task =>
            task.id === id?{ ...task, completed: !task.completed} :task
        ));
    }

  return (
    <div>
        <h1>Tasks</h1>

        <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="tasks" >Tasks</NavLink>
            <NavLink to="about" >About</NavLink>
        </nav>

        <form onSubmit={addTask}>
            <input
                type="text"
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
                placeholder="Add a new task"
            ></input>
            <button type='submit'>Add task</button>
        </form>

        <ul>
            {
                tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type='checkbox'
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        ></input>
                        <span>{task.title}</span>
                    </li>
                ))
            }
        </ul>

        <p>
            These are the available tasks : {tasks.length}
        </p>
    </div>
  )
}

export default Tasks