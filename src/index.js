import dotenv from 'dotenv'
import connectDb from "./DB/index.js";
dotenv.config({
    path:'./env'
})
connectDb()









// import express from "express"
// const app =express()
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   } catch (error) {
//     console.log("error", error);
//     throw error;
//   }
// })();
