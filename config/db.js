import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDB_uri = process.env.mongoDB_Url;

const connectdb = async () => {
  try {
    mongoose.connect(mongoDB_uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectdb;

//connecting db with mongodb without mongoose

// import { MongoClient, ServerApiVersion } from "mongodb";
// import dotenv from "dotenv";

// dotenv.config();

// const mongoDB = process.env.mongoDB_Url;

// const client = new MongoClient(mongoDB, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// const connectdb = async () => {
//   try {
//     await client.connect();
//     console.log("DB Connected");
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default connectdb;
