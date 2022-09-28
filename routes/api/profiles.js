const express = require('express');
const router = express.Router();
//@route Get api/profile
// @desc  for callback testing 'profiles route'
// @acces  Public
router.get('/', (req, res) => res.send('profile route'));
module.exports = router;