import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// console.log(`mongodb+srv://akhilesh:Hajipur@cluster0.arvsrzb.mongodb.net/${DB_NAME}`);
// console.log(`mongodb+srv://akhilesh:Hajipur@cluster0.arvsrzb.mongodb.net/?retryWrites=true&w=majority`);


const conectDB = async () =>{
  try {
   const dbConn =  await mongoose.connect(`mongodb+srv://akhilesh:Hajipur@cluster0.arvsrzb.mongodb.net/${DB_NAME}`);
   console.log(`dbConn`, dbConn.connection.host);
  } catch (error) {
    console.log("err yha se hai" , error) ;
    process.exit(1)
  }
}

export default conectDB
/*
import express from "express"
const app =  express()
const conectDB =  async  () =>{
    try{
      const connectionInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MongoDb`);
      app.on("error" , (error) =>{
        console.log(error);
      throw error
      })
      
      app.listen(process.env.PORT, () =>{
        console.log(`App is listening on port ${process.env.PORT}`);
      })
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

*/