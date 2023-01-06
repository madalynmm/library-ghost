const router = require('express').Router();

// route to get search results
router.get('/', async (req, res) => {
    res.render('book-search');
});

// route to get one dish
router.get('/collection', async (req, res) => {
    try {
        const dishData = await Dish.findByPk(req.params.id);
        if (!dishData) {
            res.status(404).json({ message: 'No dish with this id!' });
            return;
        }
        const dish = dishData.get({ plain: true });
        res.render('dish', dish);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;
