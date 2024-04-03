import express from "express";
import cors from "cors"
import { MongoClient } from "mongodb";
app.use(cors())
const client = new MongoClient(
  "mongodb://127.0.0.1:27017"
);
const db = client.db("social-db");

var app = express();
app.listen(8080, function () {
  console.log("Server started on port 8080");
});
app.get("/users", function (req, res) {
  const users = { name: "John" };
  res.json(users);
});
app.get("/posts", function (req, res) {
  const posts = { postId: 1 };
  res.json(posts);
});

app.get("/employees", async function (req, res) {
  const employees = await db.collection("employees").find().toArray();
  res.json(employees); 
});

app.post()

// const products = [
//     {"id":1,"name":"Product 1","price":100,"image":"http://localhost:8080/images/1.png"},
//     {"id":2,"name":"Product 2","price":110,"image":"http://localhost:8080/images/2.png"},
//     {"id":3,"name":"Product 3","price":190,"image":"http://localhost:8080/images/3.png"},
//     {"id":4,"name":"Product 4","price":150,"image":"http://localhost:8080/images/4.png"},
//     {"id":5,"name":"Product 5","price":180,"image":"http://localhost:8080/images/5.png"},
//     {"id":6,"name":"Product 6","price":170,"image":"http://localhost:8080/images/6.png"},
//     {"id":7,"name":"Product 7","price":123,"image":"http://localhost:8080/images/7.png"},
//     {"id":8,"name":"Product 8","price":145,"image":"http://localhost:8080/images/8.png"}
// ]
