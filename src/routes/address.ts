import express from "express";
import { Request, Response } from "express";
import fetch from "node-fetch";
require("dotenv").config();
const address = express.Router();

let api_key = Buffer.from(`${process.env.API_KEY}`).toString("base64");
let headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${api_key}`,
};

address.get("/addresses/:id", async (req:Request, res:Response) => {
  let url = `${process.env.API_URL}addresses/${req.params.id}`;
  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  let result = await response.json();
  res.status(200).json(result);
});

address.get("/addresses", async (req:Request, res:Response) => {
  let url = `${process.env.API_URL}addresses`;
  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  let result = await response.json();
  res.status(200).json(result.addresses);
});

address.post("/addresses", async (req:Request, res:Response) => {
  let url = `${process.env.API_URL}addresses`;
  let add = req.body;
  let response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(add),
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result);
});

export default address;
