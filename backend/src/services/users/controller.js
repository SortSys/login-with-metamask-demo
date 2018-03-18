import db from '../../db';

const User = db.models.User;

export const find = (_, res, next) =>
  User.findAll()
    .then(users => res.json(users))
    .catch(next);

export const get = (_, res, next, id) =>
  User.findById(id)
    .then(user => res.json(user))
    .catch(next);

export const create = () => {};