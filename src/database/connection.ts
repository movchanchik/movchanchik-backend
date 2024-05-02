import { MongoClient, ServerApiVersion } from "mongodb";

const DB_URL = process.env.DATABASE_URL || "mongodb+srv://inna0992:dUYWQUw50JqoSI4Q@cluster0.ufmdkfg.mongodb.net/";

const client = new MongoClient(DB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


try {
  client.connect();
  client.db("Movchanchik").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("Movchanchik");

export default db;