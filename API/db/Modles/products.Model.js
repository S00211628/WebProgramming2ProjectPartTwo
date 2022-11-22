const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    minlength: true,
    trim: true,
  },
  Description:{
    type:String,
    require: true,
    minlength: true,
    trim:true,
  },
  Price:{
    type:Number,
    require: true,
  },
  _supplierId:{
    type: mongoose.Types.ObjectId,
    require:true,
  }

});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
