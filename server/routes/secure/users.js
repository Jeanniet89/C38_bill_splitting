const { welcomeText } = require('../../db/twilio/send_sms'),
  router = require('express').Router(),
  isAdmin = require('../../db/middleware/authorization/authorization'),
  passport = require('./db/middleware/authentication/authentication');

router.get(
  '/api/users/me',
  app.use(
    passport.authenticate('jwt', {
      session: false
    })
  ),
  async (req, res) => res.json(req.user)
);

router.get(
  '/api/admin',
  isAdmin(),
  app.use(
    passport.authenticate('jwt', {
      session: false
    })
  ),
  async (req, res) => {
    try {
      res.json({ message: 'admin user' });
    } catch (error) {
      res.status(401).json({ error: error.toString() });
    }
  }
);

router.patch(
  '/api/users/me',
  app.use(
    passport.authenticate('jwt', {
      session: false
    })
  ),
  async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      'name',
      'email',
      'password',
      'avatar',
      'phoneNumber'
    ];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation)
      return res.status(400).send({ error: 'invalid update!' });
    if (updates.includes('phoneNumber')) welcomeText(req.body.phoneNumber);
    try {
      updates.forEach((update) => (req.user[update] = req.body[update]));
      await req.user.save();
      res.json(req.user);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  }
);

router.post(
  '/api/users/logout',
  app.use(
    passport.authenticate('jwt', {
      session: false
    })
  ),
  async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token;
      });
      await req.user.save();
      res.clearCookie('jwt');
      res.json({ message: 'logged out!' });
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  }
);

router.post(
  '/api/users/logoutAll',
  app.use(
    passport.authenticate('jwt', {
      session: false
    })
  ),
  async (req, res) => {
    try {
      req.user.tokens = [];
      await req.user.save();
      res.clearCookie('jwt');
      res.json({ message: 'all devices logged out' });
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  }
);

router.put(
  '/api/password',
  app.use(
    passport.authenticate('jwt', {
      session: false
    })
  ),
  async (req, res) => {
    try {
      req.user.password = req.body.password;
      await req.user.save();
      res.clearCookie('jwt');
      res.json({ message: 'password updated successfully' });
    } catch (e) {
      res.json({ error: e.toString() });
    }
  }
);

router.delete(
  '/api/users/me',
  app.use(
    passport.authenticate('jwt', {
      session: false
    })
  ),
  async (req, res) => {
    try {
      await req.user.remove();
      res.clearCookie('jwt');
      res.json({ message: 'user deleted' });
    } catch (e) {
      res.status(500).json({ error: e.toString() });
    }
  }
);

module.exports = router;
