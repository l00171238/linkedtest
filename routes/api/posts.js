const express = require('express');
const router = express.Router();
//@route Get api/posts
// @desc  for callback testing 'posts route'
// @acces  Public     
router.get('/', (req, res) => res.send('user posts'));
module.exports = router;