const router = require('express').Router();
const { User } = require('../../models/User')


// route to create a new user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
// route to login
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res.status(404).json({ message: 'Login failed. Please try again!' });
        return;
      }
  
      const validPassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!validPassword) {
        res.status(400).json({ message: 'Login failed. Please try again!' });
        return;
      }
      res.status(200).json({ message: 'You are now logged in!' });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Logout
router.post('/logout', (req, res) => {
    // When the user logs out, the session is destroyed
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;