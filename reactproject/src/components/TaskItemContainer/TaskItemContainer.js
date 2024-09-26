import React from 'react'
import TaskItem from '../TaskItem/TaskItem';
import './TaskItemContainer.css'

function TaskItemContainer({items, deleteItem, updateCompleteStatus }) {
  const taskList = items.map(item =>
    <TaskItem 
      desc={item.desc}
      complete={item.complete}
      key={item.desc}
      deleteItem={deleteItem}
      updateCompleteStatus={updateCompleteStatus}
     />
  );
  
  
  return (
    <section className="task-item-container">
      {taskList}
    </section>
  )
}

export default TaskItemContainer;