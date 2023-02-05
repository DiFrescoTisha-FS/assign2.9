const express = require("express");
const passportService = require('../services/passport');
const passport = require("passport");

const requireLogin = passport.authenticate('local', { session: false })

const router = express.Router();

const AuthenticationController = require("../controllers/authentication_controller");

router.post('/signup', AuthenticationController.signup)
router.post('/signin', requireLogin, AuthenticationController.signin)


module.exports = router;
