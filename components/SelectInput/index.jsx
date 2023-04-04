import Style from "./select.module.scss"

const Select = ({ placeholder, required, option, name, id , onChange }) => {
    return (
        <select
            id={id}
            name={name}
            required={required}
            onChange={onChange}
            className={Style.select}
        >
            <option value="">{placeholder}</option>
            {option?.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default Select;