const { HttpError } = require('../helpers');
const { Contact } = require('../modals/contact');
const { ctrlWrapper } = require('../utils');

const getAllContacts = async (req, res) => {
  // const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  // const skip = (page - 1) * limit;
  const result = await Contact.find({}, '-createdAt -updatedAt').populate(
    // 'owner',
    'name email',
  );
  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  if (result.owner !== owner) {
    throw HttpError(400);
  }
  res.json(result);
};

const postAddContact = async (req, res) => {
  const { _id: owner } = req.user;
  const add = await Contact.create(...req.body);
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
