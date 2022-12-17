import { useState } from 'react'

function Dropdown({ options, selection, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        //CLOSE DROPDOWN
        setIsOpen(false);
        // ACTIVE OPTION
        onSelect(option)
    }

    const renderedDropdownItems = options.map((item) => {
        return <div onClick={() => handleOptionClick(item)} key={item.value}>{item.label}</div>
    })

    let content = 'Select...';
    if(selection) {
        content = selection.label
    }

    return <div>
        <div onClick={handleClick}>{content}</div>
        {isOpen && <div>{renderedDropdownItems}</div>}
    </div>
}

export default Dropdown;