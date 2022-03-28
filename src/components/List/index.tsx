import React from "react";
import { ITask } from "../../types/task";
import Item from "./Item";
import style from './List.module.scss';

interface Props{
    tasks: Array<ITask>,
    selectTask: (selectedTask: ITask)=>void
}


const List = ({tasks, selectTask}: Props)=>{
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task)=>(
                   <Item key={task.id}
                    selectTask={selectTask}
                    {...task }/> 
                ))}
            </ul>
        </aside>
    );
};

export default List;