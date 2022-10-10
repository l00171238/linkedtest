const express = require('express');
const router = express.Router();
//@route Get api/users
// @desc  for callback testing 'auth route'
// @acces  Private 
router.get('/', (req, res) => {
     console.log(req.body);
    res.send('auth route')
});

module.exports = router;