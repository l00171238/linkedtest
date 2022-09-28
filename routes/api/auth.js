const express = require('express');
const router = express.Router();
//@route Get api/users
// @desc  for callback testing 'auth route'
// @acces  Private 
router.get('/', (req, res) => res.send('auth route'));
module.exports = router;