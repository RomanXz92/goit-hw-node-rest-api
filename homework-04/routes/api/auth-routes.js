const express = require('express');
const router = express.Router();
const authControllers = require('../../controllers/auth-controllers');
const { schemas } = require('../../modals/user');
const { validateBody } = require('../../utils');
const { authentificate } = require('../../middleWares');

router.post('/register', validateBody(schemas.userRegistrSchema), authControllers.register);
router.post('/login', validateBody(schemas.userLoginSchema), authControllers.login);
router.get('/current', authentificate, authControllers.getCurrent);
router.post('/logout', authentificate, authControllers.logout);
module.exports = router;
