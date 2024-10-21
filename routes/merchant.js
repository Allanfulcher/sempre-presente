import express from 'express';
import Coupon from '../models/Coupon.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all coupons for a merchant
router.get('/coupons', auth, async (req, res) => {
  try {
    const coupons = await Coupon.find({ merchant: req.user.id });
    res.json(coupons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Mark a coupon as used
router.put('/coupons/:id/use', auth, async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      return res.status(404).json({ msg: 'Coupon not found' });
    }

    if (coupon.merchant.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    coupon.isUsed = true;
    await coupon.save();

    res.json(coupon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update coupon value
router.put('/coupons/:id', auth, async (req, res) => {
  try {
    const { value } = req.body;
    const coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      return res.status(404).json({ msg: 'Coupon not found' });
    }

    if (coupon.merchant.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    coupon.value = value;
    await coupon.save();

    res.json(coupon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;