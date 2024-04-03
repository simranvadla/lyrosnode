import  {MongoClient} from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020")
const db = client.db("social-db")
await db.collection("emp").insertOne({name:"John"})
const employees = await db.collection("emp").find().toArray()
console.log(employees)



