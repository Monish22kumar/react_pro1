import express, { json } from 'express';
import User from './modules/userm.js';  // Assumed default export from userm

const routerU = express.Router();

routerU.use(json()); // If you want to use the json middleware for this route

routerU.post('/sig', async (req, res) => {
    try {
        console.log("vanfeygerhgn");
        console.log(req.body);
        const userData = {
            umail: req.body.email,
            uname: req.body.username,
            phone: req.body.phoneNumber,
            uaadhaar: req.body.aadhaarNumber,
            upin: req.body.pinnumber
        };

        const newUser = new User(userData);
        await newUser.save();

        res.status(201).json({ message: 'User data saved successfully!' });
    } catch (error) {
        console.error('Error saving user data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default routerU;
