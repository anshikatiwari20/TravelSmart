import React from 'react';
import './Form.css';

export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to MongoDB for saving
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);

    // Submit the contact form data to the backend
    fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formObject),
    })
      .then(response => response.json())
      .then(data => {
        alert('Contact form submitted successfully!');
        e.target.reset();
      })
      .catch((error) => {
        alert("Error saving contact form.");
        console.error('Error:', error);
      });
  };

  return (
    <form className="form" id="contact-form" onSubmit={handleSubmit}>
      <div className="inputbox">
        <h3>Your Name*</h3>
        <input type="text" required name="fullName" />
      </div>
      <div className="inputbox">
        <h3>Contact Number*</h3>
        <input type="tel" maxLength="10" placeholder="Number" required pattern="[0-9]{10}" name="contact" />
      </div>
      <div className="inputbox">
        <h3>Description*</h3>
        <textarea placeholder="Write to us" required name="info"></textarea>
      </div>
      <div className="sub-btn">
        <button type="submit" className="subbtn">Submit</button>
      </div>
    </form>
  );
}
