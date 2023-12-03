
import dotenv from "dotenv"
console.log("app");
import  connectDB  from "./db/index.js"

/*
import express  from  "express"
( async ()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URIs}/${DB_NAME}`)
        application.on("error",  (error) =>{
            console.log("ERRR:" ,  error);
            throw error
        })


        application.listen(process.env.PORT, () => {
            console.log(`App is listen on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR: ", error)
        throw err

    }
})()

*/

dotenv.config({
    path: './env'
})
connectDB()