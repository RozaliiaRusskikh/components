import { useState } from 'react'
import { GoChevronDown } from 'react-icons/go'

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        //CLOSE DROPDOWN
        setIsOpen(false);
        // ACTIVE OPTION
        onChange(option)
    }

    const renderedDropdownItems = options.map((item) => {
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(item)} key={item.value}>{item.label}</div>
    })

    let content = 'Select...';
    if (value) {
        content = value.label
    }

    return (
        <div className='w-48 relative'>
            <div className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleClick}>{content}
                <GoChevronDown />
            </div>
            {isOpen && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedDropdownItems}</div>}
        </div>
    )
}

export default Dropdown;