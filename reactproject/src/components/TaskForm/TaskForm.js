import React, { useRef } from 'react'
import './TaskForm.css'

function TaskForm({addItem}) {
    const descRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const descField = descRef.current;
        
        const descVal = descField.value;

        descField.value = "";

        addItem(descVal);
    }

  return (
    <section className="task-form-container">
        <h2 id="task-form-title">Add a new item to the list</h2>
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="task-form-row" id="input-form-row">
                <label>
                    Description:
                    <input 
                    type="text" 
                    name="desc"
                    ref={descRef} />
                </label>
            </div>
            <div className="task-form-row">
                <button type="submit">Add Task</button>
            </div>
        </form>
    </section> 
  )
}

export default TaskForm;
