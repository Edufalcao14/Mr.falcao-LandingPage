import Style from "./inputText.module.scss"

const Input = ({type , placeholder , regex , requiered}) => {
    return <input
    type={type}
    placeholder={placeholder}
    pattern={regex}
    required = {requiered}
    className={Style.inputText}
/>
}

export default Input;