import 'reflect-metadata';
import express from 'express';
import * as dotenv from 'dotenv';
import './database/connect'
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import stockRoutes from './routes/stockRoutes';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/stock', stockRoutes);
app.listen(process.env.PORT, () => console.log(`Conectado na porta ${process.env.PORT}`));