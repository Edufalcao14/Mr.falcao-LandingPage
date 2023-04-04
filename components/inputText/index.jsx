import Style from "./inputText.module.scss"

const Input = ({ type, placeholder, regex, requiered, value, name, id, onChange, onBlur }) => {
    return <input
        name={name}
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        pattern={regex}
        required={requiered}
        className={Style.inputText}
        onChange={onChange}
        onBlur={onBlur}

    />
}

export default Input;