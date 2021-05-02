import express from 'express';
import routes  from './routes';

const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(8080,()=>{
    console.log("Server started at 8080");
})