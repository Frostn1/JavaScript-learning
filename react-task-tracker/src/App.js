import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()

    setTasks([...tasks, data])
  }


  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => {
      return task.id !== id;
    }));
  }

  // Toggle Reminder
  const doubleClickTask = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle,reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers : {
        'Content-type':'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, reminder:
      !task.reminder } : task
      )
    )
  }
  // Toggle Show Tasks
  const showTasks = () => {
    setShowAddTask(!showAddTask)
  }


  return (
    <Router>
      <div className="container">
        <Header title='Task Tracker' showTasks={showTasks} showAdd={showAddTask}/>
        <Route path='/' exact render={(props) => (
          <>
              { showAddTask && <AddTask onAdd={addTask}/>}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} doubleClick={doubleClickTask}/> : 'No Tasks To Show'}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
