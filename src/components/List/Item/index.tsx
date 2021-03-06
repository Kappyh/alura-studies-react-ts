import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface Props extends ITask{
    selectTask: (selectedTask: ITask)=>void
}

const item = ({task, time, isSelected, 
    isCompleted, id, selectTask }:Props) =>{
    console.log('item atual:', {task, time, isSelected, isCompleted, id })
    return(
        <li className={`${style.item} ${isSelected? style.itemSelecionado: ''}`} 
        onClick={()=> selectTask({
            task,
            time,
            isSelected,
            isCompleted,
            id
        })} >
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}

export default item;