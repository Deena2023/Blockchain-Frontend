import { useState } from "react"

export const AddTask = ({onAdd}) => {
    const [title,setTitile]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)
    function onSubmit(e){
        e.preventDefault()
        if(!title){
            alert('please add task')
            return
        }
        onAdd({title,day,reminder})
        setTitile('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}> 
    <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder="Add Task" value={title} onChange={(e)=>setTitile(e.target.value)}/>
        </div>
        <div className='form-control'>
        <label>Add Day & Time</label>
        <input type='text' placeholder="Add Day & Time" value={day} onChange={(e)=>setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value='save task' className='btn btn-block'/>
    
    </form>
  )
}
