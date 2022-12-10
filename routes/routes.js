import express from 'express';
import { Router } from 'express';
import { fetchProducts, storeData, searchbyText, fetchProducts_decreasing, fetchProducts_increasing, fetchProduct } from '../controllers/controllers.js';

const router = Router();

router.get('/products', fetchProducts);
router.get('/products/increasing', fetchProducts_increasing);
router.get('/products/decreasing', fetchProducts_decreasing);
router.get('/products/:id', fetchProduct);
router.get('/products/search/:text', searchbyText);



router.post('/user/storeData', storeData);






export default router;