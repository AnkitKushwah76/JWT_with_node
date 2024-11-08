const Book = require("../models/Book");

// create a new book
exports.createBook = async (req, res) => {
  const { bookName, book_author_name } = req.body;
  const user_id = req.user._id;
  try {
    const book = await Book.create({
      bookName,
      book_author_name,
      user: user_id,
    });
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
