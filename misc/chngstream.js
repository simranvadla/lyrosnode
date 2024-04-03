import { MongoClient } from "mongodb";

// const client = new MongoClient("mongodb://127.0.0.1:27017/");
// const db = client.db("social-db");

const uri =
  "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020?replicaSet=rs1";

// Replace the uri string with your MongoDB deployment's connection string.

const client = new MongoClient(uri);

let changeStream;

async function run() {
  try {
    // changeStream = client.watch();

    // const database = client.db("mydb");
    // changeStream = database.watch();

    const database = client.db("mydb");
    const customers = database.collection("customers");
    changeStream = customers.watch();

    for await (const change of changeStream) {
      console.log("Received change:\n", change);
    }
    await changeStream.close();
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
