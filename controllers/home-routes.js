const router = require('express').Router();
const { User, Books } = require('../models');


// route to render html page with searchbar. You can use this to search for books. 
router.get('/', async (req, res) => {
  res.render('book-search')
})

// route to make API request to BOOKS model, to get all books that have been added to the collection
// this data will then be available to render on the collections page
router.get('/collection', async (req, res) => {
  // makes API request before page is loaded
    try {
        const collectionData = await Books.findAll();
        if (!collectionData) {
            res.status(404).json({ message: 'No books in the collection' });
            return;
        }
        res.render('collection', collectionData);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;



// router.get('/', async (req, res) => {
//     try {
//       const bookData = await User.findAll({
//         include: [
//           {
//             model: Books,
//             attributes: ['id', 'title'],
//           },
//         ],
//       });
  
//       const galleries = dbGallerData.map((gallery) =>
//         gallery.get({ plain: true })
//       );
  
//       res.render('homepage', {
//         galleries,
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });
  
//   // GET one gallery
//   // TODO: Replace the logic below with the custom middleware
//   router.get('/gallery/:id', async (req, res) => {
//     // If the user is not logged in, redirect the user to the login page
//     if (!req.session.loggedIn) {
//       res.redirect('/login');
//     } else {
//       // If the user is logged in, allow them to view the gallery
//       try {
//         const dbGalleryData = await Gallery.findByPk(req.params.id, {
//           include: [
//             {
//               model: Painting,
//               attributes: [
//                 'id',
//                 'title',
//                 'artist',
//                 'exhibition_date',
//                 'filename',
//                 'description',
//               ],
//             },
//           ],
//         });
//         const gallery = dbGalleryData.get({ plain: true });
//         res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
//       } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
//     }
//   });
  
//   // GET one painting
//   // TODO: Replace the logic below with the custom middleware
//   router.get('/painting/:id', async (req, res) => {
//     // If the user is not logged in, redirect the user to the login page
//     if (!req.session.loggedIn) {
//       res.redirect('/login');
//     } else {
//       // If the user is logged in, allow them to view the painting
//       try {
//         const dbPaintingData = await Painting.findByPk(req.params.id);
  
//         const painting = dbPaintingData.get({ plain: true });
  
//         res.render('painting', { painting, loggedIn: req.session.loggedIn });
//       } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//       }
//     }
//   });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  