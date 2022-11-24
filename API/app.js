const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");

// Load in Mongoose models

const { Supplier, Product } = require("./db/Modles");

// Load Middleware
app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/* Route Handlers*/

/* Delivery Routers */

/*
 Get /deliveries
 Purpose: Get all Deliveries
*/
app.get("/suppliers", (req, res) => {
  // We want to return an array of all the deliveries in the database
  Supplier.find({}).then((Supplier) => {
    res.send(Supplier);
  });
});

/* 
Post /deliveries
Purpose: Create a Delivery
*/
app.post("/suppliers", (req, res) => {
  // We want to create a new delivery and return a new delivery doc to the user with and id
  // The delivery info fields will be past in via the json request body.

  let SupplierName = req.body.SupplierName;

  let newSupplier = new Supplier({
    SupplierName,
  });
  newSupplier.save().then((supplierDoc) => {
    // The full supplierDoc is returned (incl. id)
    res.send(supplierDoc);
  });
});

/* 
Patch /deliveries
Purpose: Updated a specified Delivery
*/

app.patch("/suppliers/:id", (req, res) => {
  // We want to update the specified Delivery, with the new values specified in the Json body of the request
  Supplier.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.send({'message': 'updated successfully'})
  });
});

/* 
Delete /deliveries
Purpose: Delete a delivery
*/

app.delete("/suppliers/:id", (req, res) => {
  // we want to delete the specified delivery
  Supplier.findOneAndRemove({
    _id: req.params.id,
  }).then((removedSupplierDoc) => {
    res.send(removedSupplierDoc);
  });
});

/*
    GET /suppliers/:productID/products
    Purpose: Get all the products that a certain supplier has.
*/
app.get("/suppliers/:supplierId/products", (req, res) => {
  // We want to return all products that belong to a specific supplier
  Product.find({
    _supplierId: req.params.supplierId,
  }).then((products) => {
    res.send(products);
  });
});

/* 
 Get /suppliers/:supplierId/products/:productsId
 Purpose: get supplier and product from certain id and product id
*/

app.get("/suppliers/:supplierId/products/:productsId", (req,res) => {
    // We want to get the details from a certain product i.e product and supplier id
    Product.findOne({
        _id: req.params.productsId,
        _supplierId: req.params.supplierId
    }).then((product) => {
        res.send(product)
    })
});

/*
    GET /suppliers/:productID/products
    Purpose: Create a new task under a specific supplier.
*/
app.post("/suppliers/:supplierId/products", (req, res) => {
  // We want to create a new product for a supplier, specified by SupplierID
  let newProduct = new Product({
    title: req.body.title,
    Description: req.body.Description,
    Price: req.body.Price,
    _supplierId: req.params.supplierId,
  });

  newProduct.save().then((newProductDoc) => {
    res.send(newProductDoc);
  });
});

/*
    Patch /suppliers/:productId/products/:productsId
    Purpose: Update an existing product
*/

app.patch("/suppliers/:supplierId/products/:productsId", (req, res) => {
  // We want to update a a specific product (specified by productId)
  Product.findOneAndUpdate(
    {
      _id: req.params.productsId,
      _supplierId: req.params.supplierId,
    },
    {
      $set: req.body
    }
  ).then(() => {
    res.send({ message:'Added successfully!'});
  });
});

/*
    Delete /suppliers/:productId/products/:productsId
    Purpose: Delete an existing product
*/

app.delete("/suppliers/:supplierId/products/:productsId", (req, res) => {
  // We want to delete a specific products (specified by productId)
  Product.findOneAndRemove({
    _id: req.params.productsId,
    _supplierId: req.params.supplierId,
  }).then((removedProductDoc) => {
    res.send(removedProductDoc);
  });
});

/*
    Delete /suppliers/:productId/products/
    Purpose: Delete all products that a supplier has
*/

app.delete("/suppliers/:supplierId/products/", (req, res) => {
  // We want to delete a specific products (specified by productId)
  Product.deleteMany({
    _supplierId: req.params.supplierId,
  }).then((removedProductDoc) => {
    res.send(removedProductDoc);
  });
});


app.listen(3000, () => {
  console.log("server  is listening on port 3000");
});
 