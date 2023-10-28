import React, {useState} from 'react'
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
}