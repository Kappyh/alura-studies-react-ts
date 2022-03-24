import React from "react";
import Item from "./Item";
import style from './List.module.scss';

const List = ()=>{
    const tasks = [{
        task: 'React',
        time: '02:00:00'
    },
    {
        task: 'Java',
        time: '05:00:00'
    },
    {
        task: 'Javascript',
        time: '01:00:00'
    }]

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index)=>(
                   <Item key={index} {...task }/> 
                ))}
            </ul>
        </aside>
    );
};

export default List;