import express from 'express';
import Coupon from '../models/Coupon.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get purchase history for a customer
router.get('/purchases', auth, async (req, res) => {
  try {
    const coupons = await Coupon.find({ customer: req.user.id }).populate('merchant', 'name');
    res.json(coupons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get received gifts for a customer
router.get('/gifts', auth, async (req, res) => {
  try {
    const coupons = await Coupon.find({ customer: req.user.id, isUsed: false }).populate('merchant', 'name');
    res.json(coupons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;