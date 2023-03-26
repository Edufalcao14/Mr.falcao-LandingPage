import Style from "./button.module.scss"

const Button = (props) => {

        if (props.type == 1) {
                return <button className={Style.button}> {props.title} </button>
        }else if(props.type==2){
                return <button className={Style.button2}> {props.title} </button>
        }
}

export default Button;