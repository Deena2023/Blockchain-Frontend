
const Task = ({task}) => {
  return (
    <div className = {`task ${task.reminder?'reminder':''}`} >
      <h3>{task.title}</h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task