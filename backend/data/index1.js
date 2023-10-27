import express, { json } from 'express';
import cors from 'cors';
import connection from './connection.js';

import a from './routesU.js';


const port = process.env.PORT || 3004;

connection();

const app = express();
app.use(json());
app.use(cors());
console.log("ll")
app.use('/a', a);




app.post("/custom_pay", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: 'rzp_test_zpcvSUNJXUqrLv',
            key_secret:'uGZApKWjnDBHcfaMiQQctHxQ',
        });

        console.log(Math.round(req.body.amount))

        const options = {
            amount: Math.round(req.body.amount)*100, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");
        res.json(order);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});


app.listen(port, () => {
    console.log("Serve list");
});
