const router = require('express').Router();
const { User, Books } = require('../models');


// route to render html page with searchbar. You can use this to search for books. 
router.get('/', async (req, res) => {
  res.render('book-search')
})

// route to make API request to BOOKS model, to get all books that have been added to the collection
router.get('/collection', async (req, res) => {
  // makes API request before page is loaded
  try {
    const collectionData = await Books.findAll({

    });
    console.log(collectionData)

    const collection = collectionData.map((collection) => collection.get({ plain: true }));
    console.log(collection)
    res.render('collection', {
      collection,
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
