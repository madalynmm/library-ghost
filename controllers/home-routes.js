const router = require('express').Router();
const { User, Books } = require('../models');


// route to get search results
// router.get('/', async (req, res) => {
//     const bookData = await Books.findAll();
//     return res.json(bookData);
// });


// route to get one dish
// router.get('/BookAssignment', async (req, res) => {
//     try {
//         const bookData = await bookData.findByPk(req.params.id);
//         if (!bookData) {
//             res.status(404).json({ message: 'No dish with this id!' });
//             return;
//         }
//         const dish = dishData.get({ plain: true });
//         res.render('dish', dish);
//     } catch (err) {
//         res.status(500).json(err);
//     };
// });

// module.exports = router;



router.get('/', async (req, res) => {
    try {
      const bookData = await User.findAll({
        include: [
          {
            model: Books,
            attributes: ['id', 'title'],
          },
        ],
      });
  
      const galleries = dbGallerData.map((gallery) =>
        gallery.get({ plain: true })
      );
  
      res.render('homepage', {
        galleries,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // GET one gallery
  // TODO: Replace the logic below with the custom middleware
  router.get('/gallery/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, allow them to view the gallery
      try {
        const dbGalleryData = await Gallery.findByPk(req.params.id, {
          include: [
            {
              model: Painting,
              attributes: [
                'id',
                'title',
                'artist',
                'exhibition_date',
                'filename',
                'description',
              ],
            },
          ],
        });
        const gallery = dbGalleryData.get({ plain: true });
        res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  });
  
  // GET one painting
  // TODO: Replace the logic below with the custom middleware
  router.get('/painting/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, allow them to view the painting
      try {
        const dbPaintingData = await Painting.findByPk(req.params.id);
  
        const painting = dbPaintingData.get({ plain: true });
  
        res.render('painting', { painting, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  