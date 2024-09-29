import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import './TaskItem.css'

function TaskItem({desc, complete, deleteItem, updateCompleteStatus}) {

  const handleComplete = () => {
    updateCompleteStatus(desc);
  }

  const handleDelete = (e) => {
    deleteItem(desc);
  }

  const buttonContent = 
    complete ?
    <button className="complete-task-button" onClick={handleComplete}></button> :
    <button className="incomplete-task-button" onClick={handleComplete}></button>

  const taskItemClass = 
    complete ?
    "task-item complete" : 
    "task-item";


  return (
    <div className={taskItemClass}>
      <div className="delete-item" onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan} /></div>
      <p>{desc}</p>
      {buttonContent}
    </div>
  )
}

export default TaskItem;
