const { Router } = require('express');
const cartsControllerBd = require('../controller/carts.controller.bd');
const permisions = require('../middlewares/permissions');
const stripe = require('stripe')('sk_test_51NPVbOAxxODsKhcP6vMfEAmJHf2PWkupi7Df3xSQoROVPMugbxpwmYxDNv5lwB92E7II7QfgWl9yLfCNNgBBxrAE00nS76bKz0');
const router = Router();

router.post('/', cartsControllerBd.createCarts);
router.get('/', cartsControllerBd.bdgetCart);
router.get('/:cid', cartsControllerBd.bdgetCartId);
router.post('/:cid/product/:pid', cartsControllerBd.addProductToCart);
router.delete('/:cid/product/:pid', cartsControllerBd.deleteProductToCart);
router.put('/:cid', cartsControllerBd.cartUpdate);
router.put('/:cid/product/:pid', cartsControllerBd.updateQuantityProduct);
router.delete('/:cid', cartsControllerBd.deleteToCart);
router.get('/:cid/purchase', cartsControllerBd.purchase);
router.post('/payments/payment-intents', cartsControllerBd.paymentProcess);
module.exports = router;