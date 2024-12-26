import { useState } from "react";
import "./Bookform.css";

export const BookForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    destination: "",
    people: 1,
    arrival: "",
    departure: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.status === 200) {
        alert("Booking request placed! We will contact you shortly.");
      } else {
        alert("An error occurred! Please try again later.");
      }
    } catch (error) {
      alert("An error occurred! Please try again later.");
    }
    setFormData({
      name: "",
      email: "",
      contact: "",
      destination: "",
      people: 1,
      arrival: "",
      departure: "",
    });
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <div className="inputbox">
        <h3>Your Name*</h3>
        <input
          type="text"
          placeholder="Name"
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="inputbox">
        <h3>Email Address*</h3>
        <input
          type="email"
          id="email"
          placeholder="abc@gmail.com"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="inputbox">
        <h3>Contact Number*</h3>
        <input
          type="tel"
          placeholder="Number"
          required
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <div className="inputbox">
        <h3>Enter Your destination*</h3>
        <input
          type="text"
          placeholder="destination"
          required
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        />
      </div>

      <div className="inputbox">
        <h3>Enter the number of people</h3>
        <input
          type="number"
          min="1"
          max="15"
          placeholder="number"
          required
          name="people"
          value={formData.people}
          onChange={handleChange}
        />
      </div>
      <div className="inputbox">
        <h3>Arrival</h3>
        <input
          type="date"
          id="cap"
          required
          name="arrival"
          value={formData.arrival}
          onChange={handleChange}
        />
      </div>
      <div className="inputbox">
        <h3>Departure</h3>
        <input
          type="date"
          id="cap"
          required
          name="departure"
          value={formData.departure}
          onChange={handleChange}
        />
      </div>
      <div className="sub-btn">
        <button type="submit" className="subbtn">
          Book now
        </button>
      </div>
    </form>
  );
};
