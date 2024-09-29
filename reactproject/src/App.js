import  React, {useState } from "react";

import TaskForm from "./components/TaskForm/TaskForm";
import TaskItemContainer from "./components/TaskItemContainer/TaskItemContainer";
import TaskCheckbox from "./components/TaskCheckbox/TaskCheckbox";

import "./App.css"

function App() {
  const [items, setItems] = useState([]);

  const [filterTasks, setFilterTasks] = useState('all');

  const getFilterTasks = () => {
    let filteredItems = items;
    
    if(filterTasks === 'complete')
        filteredItems = items.filter(item => item.complete);
    else if(filterTasks === 'incomplete')
        filteredItems = items.filter(item => !item.complete);
    
    // sort function makes it so the incomplete tasks are first, then the complete
    // if return val is negative, then a was false and b was true, so a will go first
    return filteredItems.sort((a,b) => a.complete - b.complete);
  }

  const addItem = (desc) => {
    const newItems = [...items, {desc, complete:false}];
    setItems(newItems);
  }

  const deleteItem = (desc) => {
    const newItems = items.filter(item => item.desc !== desc);
    setItems(newItems);
  }


  const updateCompleteStatus = (desc) => {
    const newItems = items.map(item =>
      item.desc === desc ? {...item, complete:!item.complete} : item
    );
    setItems(newItems);
  }

  return (
    <div className="App">
      <header className="page-header">
        <h3 class="page-title">Task List</h3>
        <ul class="nav-bar">
          <li class="nav-bar-item"><a href="#">Home</a></li>
          <li class="nav-bar-item"><a href="#">Tasks</a></li>
          <li class="nav-bar-item"><a href="#">Contact</a></li>
        </ul>
      </header>
      <TaskForm addItem={addItem}/>
      <TaskCheckbox setFilterTasks={setFilterTasks}/>
      <TaskItemContainer items={getFilterTasks()} deleteItem={deleteItem} updateCompleteStatus={updateCompleteStatus}/>
    </div>
  );
}

export default App;
