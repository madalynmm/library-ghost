const router = require('express').Router();
const Collection = require('../../models/Books')

// route to show our collection
router.post('/collection', async (req, res) => {
    try {
        const bookData = await Books.create({
            //model information for books
        });
        // if collection successfully renders 
        res.status(200).json(bookData)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;