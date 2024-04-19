import { MongoClient } from "mongodb";

// const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = 'mongodb+srv://javadbinabdullah:LzBWrnmeHlrAcuCR@cluster0.i91yobj.mongodb.net/ums?retryWrites=true&w=majority&appName=Cluster0'
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;