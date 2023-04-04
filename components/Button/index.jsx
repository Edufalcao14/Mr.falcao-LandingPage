import Style from "./button.module.scss"

const Button = (props) => {

        if (props.kind == 1) {
                return <button
                        className={Style.button}
                        type={props.type}>
                        {props.title}
                </button>

        } else if (props.kind == 2) {
                return <button
                        className={Style.button2}
                        type={props.type}>
                        {props.title}
                </button>
        }
}

export default Button;