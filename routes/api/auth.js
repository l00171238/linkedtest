const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');

const User =  require('../../models/User')

//@route Get api/users
// @desc  for callback testing 'auth route'
// @acces  Private

//using user from  model and sending the details in respose
router.get('/', auth,async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
}
});

module.exports = router;