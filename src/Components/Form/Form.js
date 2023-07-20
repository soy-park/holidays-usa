import React, { useState } from 'react';

const Form = ({ filter, clearFilter }) => {
    const [formData, setFormData] = useState("")

    const handleChange = (event) => {
        setFormData(event.target.value)
    }
  
    const handleSearch = (event) => {
        event.preventDefault();
        filter(formData);
    }

    const clearFilter = () => {
        setFormData("")
        clearFilter();
    }

    return (
        <form>
            <input
                type="text"
                id="holiday"
                name="holiday"
                placeholder='Search holiday'
                value={formData}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={clearFilter}>Clear</button>
        </form>
    )
}

export default Form;