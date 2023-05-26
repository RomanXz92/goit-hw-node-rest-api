const express = require('express');
const router = express.Router();
const contactsControllers = require('../../controllers/controllers-contacts');
const { schemas } = require('../../modals/contact');
const { validateBody } = require('../../utils');
const { isValidId } = require('../../middleWares');

router.get('/', contactsControllers.getAllContacts);

router.get('/:id', isValidId, contactsControllers.getOneContact);

router.post('/', validateBody(schemas.addSchema), contactsControllers.postAddContact);

router.put('/:id', isValidId, validateBody(schemas.addSchema), contactsControllers.putUpdateContact);

router.patch(
  '/:id/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteContactSchema),
  contactsControllers.putUpdateContactFavorite,
);

router.delete('/:id', isValidId, contactsControllers.removeContact);

module.exports = router;
