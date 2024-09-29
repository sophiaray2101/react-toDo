import React, { useState } from 'react'
import './TaskCheckbox.css'

function TaskCheckbox({setFilterTasks}) {
    const [completeChecked, setCompleteChecked] = useState(false);
    const [incompleteChecked, setIncompleteChecked] = useState(false);

    const handleCompleteChange = () => {
        const updated = !completeChecked;
        setCompleteChecked(updated);
        setIncompleteChecked(false);
        
        if(updated)
            setFilterTasks('complete');
        else
            setFilterTasks('all');
    }

    const handleIncompleteChange = () => {
        const updated = !incompleteChecked;
        setIncompleteChecked(updated);
        setCompleteChecked(false);
        
        if(updated)
            setFilterTasks('incomplete');
        else
            setFilterTasks('all');
    }

    return (
    <div className="checkbox-container">
        <div className="checkbox-row">
            <input 
                type="checkbox" 
                id="complete-box" 
                onChange={handleCompleteChange}
                checked={completeChecked}/>
            <div className="checkbox-text">Completed Tasks</div>
        </div>
        <div className="checkbox-row">
            <input 
                type="checkbox" 
                id="icomplete-box" 
                onChange={handleIncompleteChange}
                checked={incompleteChecked
                }/>
            <div className="checkbox-text">Incomplete Tasks</div>
        </div>
    </div>
  )
}

export default TaskCheckbox;
