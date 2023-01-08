const router = require('express').Router();
const Books = require('../../models/Books')

router.post('/books', async (req, res) => {
    try {
        const bookData = await Books.create({
            //model information for books
        });
        // if book successfully added, response returned as json
        res.status(200).json(bookData)
    } catch (err) {
        res.status(400).json(err);
    }
});
// post for delete book