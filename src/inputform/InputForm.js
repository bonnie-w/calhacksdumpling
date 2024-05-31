import React, { useState, useEffect } from 'react';
import './inputform.css';

export const InputForm = () => {
  const [value, setValue] = useState([]);
  const [output, setOutput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const handleInputChange = (e) => {
    const newValue = e.target.value.split(',').map(item => item.trim());
    setValue(newValue);
  };

  const handleIngredientChange = (e) => {
    setNewIngredient(e.target.value);
  };

  const handleSubmit = async (ingredientList) => {
    ingredientList.preventDefault();
    console.log("submitted ingredient list:", ingredients);
    passToAPI();
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if (newIngredient.trim() && !ingredients.includes(newIngredient.trim())) {
      setIngredients([...ingredients, newIngredient.trim()]);
      console.log("current ingredients list:", ingredients);
      setNewIngredient("");
    }
  };

  const handleDelete = (ingredientToDelete) => {
    setIngredients(ingredients.filter(ingredient => ingredient !== ingredientToDelete));
  };

  const apiUrl = 'http://localhost:5000/api';

  const passToAPI = () => {
    fetch(apiUrl + `?js_variable=${value.join(',')}`)
    .then(response => response.json())
    .then(data => {
        setOutput(data.message);
        console.log("OUPUT MESSAGE:", data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }

  return (
    <div className="page">
      {/* <div className="InputWrapper">
        <form className="InputForm" onSubmit={handleSubmit}>
          <div className="bodyText">
            Don't know what to eat today? <br/>
            Enter ingredients from your fridge!
          </div>
          <input
            className= "temp-input"
            type="text"
            placeholder="What is in your fridge?"
            onChange={handleInputChange}
          />
          <button type="submit" className="submit-btn">
            Generate Recipe
          </button>
        </form>
      </div> */}

      <div className="InputWrapper">
        <div className="InputForm">
          <div className="bodyText">
            Don't know what to eat today? <br/> <div className='rowHeight'/>
            Enter ingredients from your fridge!
          </div>
          <div className="inline-form">
            <input
              type="text"
              value={newIngredient}
              placeholder="Add an ingredient"
              onChange={handleIngredientChange}
            />
            <button type="button" className="add-btn" onClick={handleAdd}>
              Add item
            </button>
          </div>

          <div className="ingredient-list">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredientRow">
                <text className="ingredient"> {ingredient} </text>
                <button type="button" className="delete" onClick={() => handleDelete(ingredient)}>
                  <i class="fa-solid fa-trash-can"/>
                </button>
              </div>
            ))}
          </div>

          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Generate Recipe
          </button>
        </div>
      </div>

      {output && (
        <div className="OutputWrapper">
          <text className="outputText" dangerouslySetInnerHTML={{ __html: output.replace(/\n/g, '<br>') }}/>
        </div>
      )}
    </div>
  );
};
