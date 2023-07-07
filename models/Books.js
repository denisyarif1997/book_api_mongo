const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Membuat skema buku
const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  published_date: {
    type: Date,
    default: Date.now,
  },
  publisher: {
    type: String,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;