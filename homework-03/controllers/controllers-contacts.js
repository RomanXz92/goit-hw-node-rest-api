const { HttpError } = require('../helpers');
const { Contact } = require('../modals/contact');
// const contactServise = require('../modals/contacts');
// const Contact = require('../modals/contact');
const { ctrlWrapper } = require('../utils');

const getAllContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const postAddContact = async (req, res) => {
  const add = await Contact.create(req.body);
  res.status(201).json(add);
};

const putUpdateContact = async (req, res) => {
  const { id } = req.params;
  const update = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!update) {
    throw HttpError(404);
  }
  res.json(update);
};

const putUpdateContactFavorite = async (req, res) => {
  const { id } = req.params;
  const update = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!update) {
    throw HttpError(404);
  }
  res.json(update);
};

const removeContact = async (req, res) => {
  const { id } = req.params;
  const deleter = await Contact.findByIdAndDelete(id);
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
  putUpdateContactFavorite: ctrlWrapper(putUpdateContactFavorite),
  removeContact: ctrlWrapper(removeContact),
};
