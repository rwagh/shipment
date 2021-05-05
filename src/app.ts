import express from 'express';
import index  from './routes/index';
import carrier  from './routes/carrier';
import address  from './routes/address';
import quotes  from './routes/quotes';
import rates  from './routes/rates';
import pickups  from './routes/pickups';

const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index);
app.use(carrier);
app.use(address);
app.use(quotes);
app.use(rates);
app.use(pickups);

app.listen(8080,()=>{
    console.log("Server started at 8080");
})