// src/server.js
const path = require('path');

// load .env from project root (one level above src)
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

console.log('DEBUG: cwd =', process.cwd());
console.log('DEBUG: __dirname =', __dirname);
console.log('DEBUG: process.env.NODE_ENV =', process.env.NODE_ENV);
console.log('DEBUG: process.env.MONGODB_URI raw =', process.env.MONGODB_URI ? '[SET]' : '[NOT SET]');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// decide Mongo URI
let mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  if (process.env.NODE_ENV === 'production') {
    console.error('FATAL: MONGODB_URI is not set in production. Exiting.');
    process.exit(1);
  } else {
    // Development fallback (use local Mongo)
    mongoUri = 'mongodb://0.0.0.0:27017/booking_db';
    console.warn('WARNING: MONGODB_URI not set — falling back to local Mongo:', mongoUri);
  }
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Example schemas (keep your existing ones here)
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

const contactFormSchema = new mongoose.Schema({
  fullName: String,
  contact: String,
  info: String,
});
const ContactForm = mongoose.model('ContactForm', contactFormSchema);

app.post('/api/book', (req, res) => {
  const newBooking = new Booking(req.body);
  newBooking.save()
    .then(() => res.status(200).json({ message: 'Booking successfully created' }))
    .catch(err => res.status(500).json({ message: 'Error creating booking', error: err }));
});

app.post('/api/contact', (req, res) => {
  const { fullName, contact, info } = req.body;
  if (!fullName || !contact || !info) {
    return res.status(400).json({ message: 'All fields are required!' });
  }
  const newContactForm = new ContactForm(req.body);
  newContactForm.save()
    .then(() => res.status(200).json({ message: 'Contact form successfully submitted' }))
    .catch(err => res.status(500).json({ message: 'Error saving contact form', error: err }));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
