import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import StopWatch from '../components/StopWatch';
import { ITask } from '../types/task';
import style from './App.module.scss'; // <- css modules import

function App() {
  const [tasks, setTasks] = useState<Array<ITask>|[]>([])
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask){
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(oldTask =>({
      ...oldTask,
      isSelected: oldTask.id === selectedTask.id ? true:false
    })) )
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks} selectTask={selectTask} />
      <StopWatch selectedTask={selected} />
    </div>
  );
}

export default App;
