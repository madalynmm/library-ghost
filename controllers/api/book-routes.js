const router = require('express').Router();
const { Books } = require('../../models/');

// view all books in database
router.get('/viewAllBooks', async (req, res) => {
  const bookData = await Books.findAll();
})

// create new book
router.post('/books', async (req, res) => {
    try {
        const newBook = await Books.create({
          title: req.body.title,
        });
        // if book successfully added, response returned as json
        res.status(200).json(newBook)
    } catch (err) {
        res.status(400).json(err);
    }
});
// post for delete book
router.delete('/:id', async (req, res) => {
    try{
    const bookData = await Books.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
  
    if (!bookData) {
        res.status(404).json({ message: 'No book found with this id!' });
        return;
      }
  
      res.status(200).json(bookData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  