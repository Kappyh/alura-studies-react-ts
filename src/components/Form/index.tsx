import React from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid';

export default class Form extends React.Component<{
    setTasks:React.Dispatch<React.SetStateAction<Array<ITask>>>
}>{
    state = {
        task: "",
        time: "00:00"
    }

    addTask(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        this.props.setTasks(oldState=>[
            ...oldState,
            {
                ...this.state,
                isSelected: false,
                isCompleted: false,
                id: uuidv4()
            }
        ])
        this.setState({
            task: '',
            time: '00:00:00'
        });
    }

    render(){
        return(
            <form action="" className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text"
                    value={this.state.task}
                    onChange={evt=>this.setState({...this.state, task: evt.target.value})}
                     name="tarefa" id="tarefa" placeholder="o que você quer estudar" required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" step={1} name="tempo" 
                    value={this.state.time}
                    onChange={evt=> this.setState({ ...this.state, time: evt.target.value})}
                    id="tempo" min={"00:00:00"} max={"01:30:00"} required/>
                </div>
                <Button type="submit">Adicionar</Button>
            </form>
        );
    }
}