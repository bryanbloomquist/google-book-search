const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  key: { type: String, unique: true, index: true },
  author: { type: Array },
  description: { type: String },
  image: { type: String },
  link: { type: String, required: true },
  title: { type: String, required: true }
});

const Book = mongoose.model( "Book", bookSchema );

module.exports = Book;