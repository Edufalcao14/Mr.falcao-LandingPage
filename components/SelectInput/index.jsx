import Style from "./select.module.scss"

const Select = ({ placeholder, required, option }) => {
    return (
        <select required={required} className={Style.select}>
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