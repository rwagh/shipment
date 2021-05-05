import express from "express";
import { Request, Response } from "express";
import fetch from "node-fetch";
require("dotenv").config();
const rates = express.Router();

let api_key = Buffer.from(`${process.env.API_KEY}`).toString("base64");
let headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${api_key}`,
};

rates.post("/rates", async (req:Request, res:Response) => {
  let url = `${process.env.API_URL}rates`;
  let args = req.body;

  let response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(args)
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result);
});

export default rates;