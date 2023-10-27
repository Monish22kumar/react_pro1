import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const dburl = process.env.DB_URL;

const connect = function() {
  mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true, family: 4 })
    .then(() => {
      console.log("The database is connected");
    }).catch((err) => {
      console.log(err);
    })
}

export default connect;
