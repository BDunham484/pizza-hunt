//import express router
const router = require('express').Router();
//import all of the html routes from html.js
const htmlRoutes = require('./html/html-routes');
//import all of the API routes from /api/index.js
const apiRoutes = require('./api');

router.use('/', htmlRoutes);
//add prefix of '/api' to all of the api routes imported from the 'api'directory
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
