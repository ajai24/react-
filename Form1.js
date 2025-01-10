import React, { useState } from "react";

export default function Form1() {
    const [formData, setFormData] = useState({
      name: "",
      roll: "",
      gender: "",
      city: "",
      phone: "",
    });
  
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  
    function formSubmit(event) {
      event.preventDefault();
      console.log("Form Data Submitted: ", formData);
    }
  
    return (
      <>
        <form onSubmit={formSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
  
          <label>
            Roll:{" "}
            <input
              type="text"
              name="roll"
              value={formData.roll}
              onChange={handleInputChange}
            />
          </label>
          <br />
  
          <label>
            Gender:{" "}
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />
  
          <label>
            City:{" "}
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </label>
          <br />
  
          <label>
            Phone:{" "}
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>
          <br />
  
          <button type="submit">Signup</button>
        </form>
  
        <h1>The Name is: {formData.name}</h1>
        <h1>The Roll is: {formData.roll}</h1>
        <h1>The Gender is: {formData.gender}</h1>
        <h1>The City is: {formData.city}</h1>
        <h1>The Phone is: {formData.phone}</h1>
      </>
    );
  }