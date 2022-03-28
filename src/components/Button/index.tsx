import React from "react";
import style from './Button.module.scss';

export default class Button extends React.Component<{
    type?: "submit"| "reset" | "button" | undefined;
}>{
    render(){
        const { type = "button"} = this.props;
        return(
            <button
            type={type}
             className={style.botao}>{this.props.children}</button>
        );
    }
};

