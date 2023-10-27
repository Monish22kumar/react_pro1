const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());

// MongoDB connection setup
mongoose.connect('mongodb://0.0.0.0:27017/ekart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('db connected'))
  .catch((err) => {
    console.log(err);
  });

// Define a MongoDB schema with the new field names
const userSchema = new mongoose.Schema({
  username: String,   // Renamed "name" to "username"
  fname: String,      // Added "fname" field
  lname: String,      // Added "lname" field
  phoneno: String,    // Renamed "phone" to "phoneno"
  pwd: String,        // Renamed "address" to "pwd"
});

const User = mongoose.model('User', userSchema);

app.post('/api/users', async (req, res) => {
  try {
    const { username, fname, lname, phoneno, email, pwd } = req.body;  // Adjusted field names

    const user = new User({ username, fname, lname, phoneno, pwd });  // Adjusted field names
    await user.save();

    res.status(201).json({ message: 'User data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving user data' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
