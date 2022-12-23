const router = require('express').Router();
const Wishlist = require('../../models/Books')

// route to add a book to your collection or wishlist
router.post('/wishlist', async (req, res) => {
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

module.exports = router;