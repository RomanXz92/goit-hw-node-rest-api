const { HttpError } = require('../helpers');
const contactServise = require('../modals/contacts');

const { ctrlWrapper } = require('../utils');

const getAllContacts = async (req, res) => {
  const result = await contactServise.listContacts();
  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactServise.getContactById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const postAddContact = async (req, res) => {
  const add = await contactServise.addContact(req.body);
  res.status(201).json(add);
};

const putUpdateContact = async (req, res) => {
  const { id } = req.params;
  const update = await contactServise.updateContact(id, req.body);
  if (!update) {
    throw HttpError(400);
  }
  res.json(update);
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  const deleter = await contactServise.removeContact(id);
  if (!deleter) {
    throw HttpError(400);
  }
  res.json({ message: 'contact deleted' });
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  postAddContact: ctrlWrapper(postAddContact),
  putUpdateContact: ctrlWrapper(putUpdateContact),
  removeContact: ctrlWrapper(removeContact),
};
