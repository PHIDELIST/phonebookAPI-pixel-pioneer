import express from 'express';
import config from './src/db/config.js';
import phoneBookRoutes from './src/routes/phoneBookRoutes.js';

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Routes
phoneBookRoutes(app);
app.get("/",(req,res)=>{

    res.send("API that adds contacts to phone book");
})
app.listen(config.port,()=>{
    
    console.log(`Server is running on  ${config.url}`);
});