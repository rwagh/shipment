import express from "express";
import { Request, Response } from "express";

import fetch from "node-fetch";
require("dotenv").config();
const index = express.Router();

let api_key = Buffer.from(`${process.env.API_KEY}`).toString("base64");
let headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${api_key}`,
};

index.get("/", async (req:Request, res:Response) => {
  res.status(200).json({ status: "it work's" });
});

index.get("/me", async (req:Request, res:Response) => {
  let url = `${process.env.API_URL}me`;
  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result);
});

export default index;