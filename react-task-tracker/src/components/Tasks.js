import Task from './Task'
const Tasks = ({tasks,  onDelete , doubleClick}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} doubleClick={doubleClick}/>
            ))}
        </>
    )
}

export default Tasks
