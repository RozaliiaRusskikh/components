import { useState } from 'react';
import Dropdown from '../components/Dropdown'

function DropdownPage() {

    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }

    const options = [
        {
            label: 'White',
            value: 'white'
        },
        {
            label: 'Blue',
            value: 'blue'
        },
        {
            label: 'Red',
            value: 'red'
        }
    ]
    return (
        <div>
            <label> Select a Color</label>
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    )
}

export default DropdownPage;