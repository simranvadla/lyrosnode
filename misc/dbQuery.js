import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017/");
// const db = client.db("social-db");
const db = client.db("mydb5");
const employees = await db.collection("employees").find().toArray()
console.log(employees)

// const client = new MongoClient("mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020?replicaSet=rs1");
// const db = client.db("mydb");
// const customers = await db.collection("customers").find().toArray()
// console.log(customers)


