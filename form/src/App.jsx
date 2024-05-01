import React, { useState } from 'react';

function FormComponent() {
  // State to hold input values
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    city: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Submitted Data:', formData);
    // You might want to do something with the data, like sending it to a server
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <br />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <br />
      <select
        name="city"
        value={formData.city}
        onChange={handleChange}
      >
        <option value="">Select City</option>
        <option value="newyork">New York</option>
        <option value="losangeles">Los Angeles</option>
        <option value="chicago">Chicago</option>
        <option value="houston">Houston</option>
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
