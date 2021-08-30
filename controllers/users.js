import { v4 as uuidv4 } from "uuid";

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firsName} added to the database`);
};

export const getUserById = (req, res) => {
  const { id } = req.params;

  const foundUser = user.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteById = (req, res) => {
  const { id } = req.params;

  users = users.filter((person) => person.id !== id);

  res.send(`User with the id ${id} deleted from the database.`);
};

export const updateUserWithId = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const userToBeUpdated = users.find((user) => user.id === id);

  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  res.send(`User with the id ${id} has been updated`);
};
