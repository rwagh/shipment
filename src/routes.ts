import express from "express";
import fetch from "node-fetch";
require("dotenv").config();
const routes = express.Router();

let api_key = Buffer.from(`${process.env.API_KEY}`).toString("base64");
let headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${api_key}`,
};

routes.get("/", async (req, res) => {
  res.status(200).json({ status: "it work's" });
});

routes.get("/me", async (req, res) => {
  let url = `${process.env.API_URL}me`;
  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result);
});
routes.get("/carriers", async (req, res) => {
  let url = `${process.env.API_URL}carriers`;
  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result);
});

routes.get("/addresses", async (req, res) => {
  let url = `${process.env.API_URL}addresses`;
  let response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result);
});

routes.post("/addresses", async (req, res) => {
  let url = `${process.env.API_URL}addresses`;
  let add = {
    company: "Muster-Company",
    first_name: "Max",
    last_name: "Mustermann",
    street: "Musterstraße",
    street_no: "42",
    zip_code: "54321",
    city: "Musterstadt",
    country: "DE",
    email: "max@mustermann.baz",
    phone: "+491234567890",
  };
  let response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(add),
  });
  let result = await response.json();
  console.log(result);
  res.status(200).json(result);
});

export default routes;