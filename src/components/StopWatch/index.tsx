import Button from "../Button";
import Watch from "./Watch";
import style from './Cronometro.module.scss';
import { ITask } from "../../types/task";
import { useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface Props{
    selectedTask: ITask | undefined
}

const StopWatch = ({selectedTask}: Props) =>{
    
    const [time, setTime] = useState<number>()


    if(selectedTask?.time){
        setTime(timeToSeconds(selectedTask.time))
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch/>
            </div>
            <Button>Começar</Button>
        </div>
    );
}

export default StopWatch;