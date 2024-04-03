import express from "express";
import { MongoClient } from "mongodb";

// const client = new MongoClient("mongodb://127.0.0.1:27017/");
// const db = client.db("social-db");
//////////////////
const client = new MongoClient("mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020?replicaSet=rs1");
// const client = new MongoClient("mongodb://localhost:27018,localhost:27019,localhost:27020?replicaSet=rs1");

// mongodb://host1:27017,host2:27017,host3:27017/?replicaSet=myRs
const db = client.db("mydb");
///////////////////

import cors from "cors";

const app = express();
app.use(cors());

//start server
app.listen(8080, () => {
  console.log("Server started on port 8080");
});

//setup routes
// app.get("/users", (req, res) => {
//   res.json([
//     { name: "John", age: 34 },
//     { name: "Cathy", age: 40 },
//   ]);
// });

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.get("/employees", async (req, res) => {
  const employees = await db.collection("employees").find().toArray()
  res.json(employees);
});

app.get("/customers", async (req, res) => {
  const customers = await db.collection("customers").find().toArray()
  console.log(db)
  res.json(customers);
});
