import isAuth from '../middlewares/isAuth';
import isAdmin from '../middlewares/isAdmin';

import { Router } from 'express';

import ListStockService from '../services/StockServices/ListStocks';

const router = Router();

router.get('/:id', isAuth, isAdmin, ListStockService.execute);

export default router;
