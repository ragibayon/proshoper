import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    console.log(req.params.id);
    const product = await Product.findById({ _id: req.params.id });
    console.log(product);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

export default router;
