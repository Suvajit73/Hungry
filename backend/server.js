import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import {connectDB} from './config/db.js';

import path from 'path'
import { fileURLToPath } from 'url';

import userRouter from './routes/userRoute.js';
import itemRouter from './routes/itemRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


const app = express();
const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


//Middleware..............................................
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ['https://hungry-frontend-9swq.onrender.com','https://hungry-admin.onrender.com'];
        if(!origin || allowedOrigins.includes(origin)){
            callback(null, true)
        }
        else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
})
)
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//Database .........................................
connectDB()

//Routes................................................
app.use('/api/user', userRouter)
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))) 
app.use('/api/items', itemRouter)
app.use('/api/cart', cartRouter)
app.use('/api/orders', orderRouter)


app.get('/', (req,res) => {
    res.send('API IS WORKING')
})


app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
    
})