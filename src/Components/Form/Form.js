import React, { useState } from 'react';
import '../Form/Form.css';

const Form = (props) => {
    const [formData, setFormData] = useState("")

    const handleChange = (event) => {
        setFormData(event.target.value)
    }
  
    const handleSearch = (event) => {
        event.preventDefault();
        props.filter(formData);
    }

    const clearFilter = () => {
        setFormData("")
        props.clearFilter();
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
            <div className="form-buttons">
                <button className="search-btn" onClick={handleSearch}>Search</button>
                <button className="clear-btn" onClick={clearFilter}>Clear</button>
            </div>
        </form>
    )
}

export default Form;