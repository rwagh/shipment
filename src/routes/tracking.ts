import express from "express";
import { Request, Response } from "express";
import fetch from "node-fetch";
import validate from "../validators";
require("dotenv").config();
const tracking = express.Router();

let api_key = Buffer.from(`${process.env.API_KEY}`).toString("base64");
let headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${api_key}`,
};

tracking.get("/trackers/:id", async (req: Request, res: Response) => {
  let url = `${process.env.API_URL}trackers/${req.params.id}`;

  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result);
});

tracking.get("/trackers", async (req: Request, res: Response) => {
  let url = `${process.env.API_URL}trackers`;

  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result.trackers);
});

tracking.post("/trackers", async (req: Request, res: Response) => {
  let url = `${process.env.API_URL}trackers`;
  let args = req.body;
  let check = validate.tracker.check(args);
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
export default tracking;
