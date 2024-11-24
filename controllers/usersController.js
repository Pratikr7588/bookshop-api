const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../models/users.json');

const SECRET_KEY = 'your_secret_key';

// Register User
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { username, password: hashedPassword };

  users.push(newUser);
  fs.writeFileSync('./models/users.json', JSON.stringify(users));
  res.status(201).json({ message: 'User registered successfully' });
};

// Login User
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  res.status(200).json({ message: 'Login successful', token });
};
