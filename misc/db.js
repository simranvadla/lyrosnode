import { MongoClient } from "mongodb";

let Conn

const dbConn = async (cb) => {
  const client = await MongoClient.connect("mongodb://localhost:27017/social-db");
  const Conn = client.db();
  return cb()
};

const getDb = () => Conn;

export { dbConn, getDb };
