const express = require('express');
const router = express.Router();
//@route Get api/users
// @desc  for callback testing 'user route'
// @acces  Public     
router.get('/', (req, res) => res.send('user route'));
module.exports = router;