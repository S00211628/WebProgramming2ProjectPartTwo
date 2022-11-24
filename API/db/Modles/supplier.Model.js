const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
  SupplierName: {
    type: String,
    require: true,
    minlength: 3,
    trim: true,
  },
});


const Supplier = mongoose.model("Suppliers", SupplierSchema);

module.exports = { Supplier };