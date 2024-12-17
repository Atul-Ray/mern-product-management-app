import express from 'express';
import { connectDB } from './config/db.js';
import productRouter from './routes/product.route.js';





const app=express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  

app.use(express.json());

app.use("/api/products",productRouter)

const PORT=process.env.PORT


app.listen(PORT,()=>{
    connectDB();
    console.log('server started at'+PORT);
    
})