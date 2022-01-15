// import { MongoClient } from "mongodb";

// const uri = process.env.URI_DB;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = client.connect();

// process.on("SIGINT", async () => {
//   const client = await db.close();
//   console.log("Connection DB closed");
//   process.exit(1);
// });

// export default db;

import mongoose from "mongoose";

const { connect, connection } = mongoose;
const uri = process.env.URI_DB;

const db = connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on("connected", () => {
  console.log("Mongoose connected to DB");
});

connection.on("err", (err) => {
  console.log(`Mongoose connection error: ${err.message}`);
});

connection.on("disconnected", () => {
  console.log("Mongoose disconnected from DB");
});

process.on("SIGINT", async () => {
  connection.close();
  console.log("Connection DB closed");
  process.exit(1);
});

export default db;
