import React, { useState } from 'react'

function Create() {
    const [task, setTask] = useState()

    const handleAdd = () => {}
  return (
    <div className='create_form'>
        <input type="text" name="" id="" placeholder='Enter Task'/>
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create