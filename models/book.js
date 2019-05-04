const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  key: {type: String, index: true },
  author: { type: Array, default: "No Author" },
  description: { type: String, default: "No Description" },
  image: { type: String, default: "https://via.placeholder.com/150" },
  link: { type: String, required: true },
  title: { type: String, required: true }
});

const Book = mongoose.model( "Book", bookSchema );

module.exports = Book;