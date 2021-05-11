import express from 'express';
import index  from './routes/index';
import carrier  from './routes/carrier';
import address  from './routes/address';
import quotes  from './routes/quotes';
import pickups  from './routes/pickups';
import shipments  from './routes/shipments';
import tracking  from './routes/tracking';

const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index);
app.use(carrier);
app.use(address);
app.use(quotes);
app.use(pickups);
app.use(shipments);
app.use(tracking);

app.listen(8080,()=>{
    console.log("Server started at 8080");
})