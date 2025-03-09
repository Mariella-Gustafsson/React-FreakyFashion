// Importera express
const express = require('express');
const cors = require('cors'); // Importera CORS-paketet
const db = require('../db/db')
const port = 8000;
const path = require('path');


// Skapa en instans av Express
const app = express();

app.use(cors());

// Gör public mappen tillgänglig för klienten
app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get('/api/products', (req, res, next) => {

const products = db.prepare('SELECT id, name, price, brand, description, picture_url, url_slug, publish_date FROM products')
                .all();

console.log(products);
res.json(products);
  
})