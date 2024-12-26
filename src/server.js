const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://0.0.0.0:27017/booking_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// MongoDB Schema and Model for Booking (no change here, as it's working fine)
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  destination: String,
  people: Number,
  arrival: Date,
  departure: Date,
});

const Booking = mongoose.model('Booking', bookingSchema);

// MongoDB Schema and Model for Contact Form
const contactFormSchema = new mongoose.Schema({
  fullName: String,
  contact: String,
  info: String,
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

// POST route to handle booking form submission (no changes here)
app.post('/api/book', (req, res) => {
  const { name, email, contact, destination, people, arrival, departure } = req.body;

  const newBooking = new Booking({
    name,
    email,
    contact,
    destination,
    people,
    arrival,
    departure,
  });

  newBooking.save()
    .then(() => {
      res.status(200).json({ message: "Booking successfully created" });
    })
    .catch((err) => {
      console.error('Error creating booking:', err);  // Log the error
      res.status(500).json({ message: "Error creating booking", error: err });
    });
});

// POST route to handle contact form submission
app.post('/api/contact', (req, res) => {
  const { fullName, contact, info } = req.body;

  // Validate input (no need for email check since it's removed)
  if (!fullName || !contact || !info) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  const newContactForm = new ContactForm({
    fullName,
    contact,
    info,
  });

  newContactForm.save()
    .then(() => {
      res.status(200).json({ message: "Contact form successfully submitted" });
    })
    .catch((err) => {
      console.error('Error saving contact form:', err);  // Log the error
      res.status(500).json({ message: "Error saving contact form", error: err });
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
