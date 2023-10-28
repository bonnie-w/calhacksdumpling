/*import React, {useState} from 'react'
import './inputform.css'

export const InputForm = () => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();
        console.log(value)
    }
    return (
        <>
        <div className='InputWrapper'>
            <form className='InputForm' onSubmit={handleSubmit}>
                <input type="text" className='input-input' placeholder='What is in your fridge?' onChange={(e) => setValue(e.target.value)}/>
                <button type='submit' className='submit-btn'> Submit! </button>
            </form>
        </div>
        </>
    )
}*/

import React, { useState, useEffect } from 'react';
import './inputform.css';

export const InputForm = () => {
  const [value, setValue] = useState([]);

  const handleInputChange = (e) => {
    // Split the input value by a comma and remove leading/trailing spaces
    const newValue = e.target.value.split(',').map(item => item.trim());
    setValue(newValue);
  };

  ///////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
  
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }), // Send the 'value' to the server
    });
  
    if (response.ok) {
      const aiResults = await response.json();
      console.log(aiResults); // Handle AI results here
    }
  };

  ////////////////////

  return (
    <>
      <div className="InputWrapper">
        <form className="InputForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-input"
            placeholder="What is in your fridge?"
            onChange={handleInputChange}
          />
          <button type="submit" className="submit-btn">
            Generate Recipe
          </button>
        </form>
      </div>
    </>
  );
};