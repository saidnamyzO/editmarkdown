// make a router and set routes as if this is root
const express = require('express');
const router = express.Router();

// set the content of this as root
router.get('/new', (req, res) => {
    res.render('articles/new');
});

module.exports = router; // export this file
