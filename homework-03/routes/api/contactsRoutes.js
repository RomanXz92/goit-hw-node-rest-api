const express = require('express');
const router = express.Router();
const contactsControllers = require('../../controllers/controllers-contacts');
const schemas = require('../../schemas/contactsSchemas');
const { validateBody } = require('../../utils');

router.get('/', contactsControllers.getAllContacts);

// router.get('/:id', contactsControllers.getOneContact);

// router.post('/', validateBody(schemas.addSchema), contactsControllers.postAddContact);

// router.put('/:id', validateBody(schemas.addSchema), contactsControllers.putUpdateContact);

// router.delete('/:id', contactsControllers.removeContact);

module.exports = router;
