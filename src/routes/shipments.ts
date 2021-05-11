import express from "express";
import { Request, Response } from "express";
import fetch from "node-fetch";
import validate from "../validators";
require("dotenv").config();
const shipments = express.Router();

let api_key = Buffer.from(`${process.env.API_KEY}`).toString("base64");
let headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${api_key}`,
};

shipments.get("/shipments/:id", async (req: Request, res: Response) => {
  let url = `${process.env.API_URL}shipments/${req.params.id}`;

  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result);
});

shipments.get("/shipments", async (req: Request, res: Response) => {
  let url = `${process.env.API_URL}shipments`;

  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result.shipments);
});

shipments.post("/shipments", async (req: Request, res: Response) => {
  let url = `${process.env.API_URL}shipments`;
  let args = req.body;
  let check = validate.shipments.check(args);
  if (check.length > 0) {
    res.status(400).json({ error: check[0].message });
  } else {
    let response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(args),
    });
    let result = await response.json();
    console.log(result);
    res.status(200).json(result);
  }
});

shipments.put("/shipments/:id", async (req: Request, res: Response) => {
  let url = `${process.env.API_URL}shipments/${req.params.id}`;
  let args = req.body;

  let response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(args),
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result);
});

shipments.delete("/shipments/:id", async (req: Request, res: Response) => {
  let url = `${process.env.API_URL}shipments/${req.params.id}`;

  let response = await fetch(url, {
    method: "DELETE",
    headers: headers,
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result);
});

export default shipments;
