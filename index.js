import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();


const app =express();

app.get('/',(req,res)=>{
    res.send("Billing Software");
})

const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`);
})