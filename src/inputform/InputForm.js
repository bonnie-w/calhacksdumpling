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
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    // Split the input value by a comma and remove leading/trailing spaces
    const newValue = e.target.value.split(',').map(item => item.trim());
    setValue(newValue);
  };

  ///////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    passToAPI();
  }

  const apiUrl = 'http://localhost:5000/api';

  const passToAPI = () => {
    fetch(apiUrl + `?js_variable=${value.join(',')}`)
    .then(response => response.json())
    .then(data => {
        setOutput(data.message);
        console.log("OUPUT MESSAGE:", data.message); // Output received from the Python server
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }

  ////////////////////

  return (
    <div className="page">
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

      {/* <div className="OutputDiv">
        {output}
      </div> */}

      {output && (
        <div className="OutputWrapper">
          <div className="OutputDiv" dangerouslySetInnerHTML={{ __html: output.replace(/\n/g, '<br>') }}>
          </div>
        </div>
      )}
    </div>
  );
};