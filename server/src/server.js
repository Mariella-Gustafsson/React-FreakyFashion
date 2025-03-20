// Importera express
const express = require('express');
const cors = require('cors'); // Importera CORS-paketet
const db = require('../db/db')
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser');


// Skapa en instans av Express
const app = express();

app.use(bodyParser.json());

app.use(cors());

// Gör public mappen tillgänglig för klienten
app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get('/api/products/:url_slug', (req, res, next) => {

  const slug = req.params.url_slug;

  const product = db.prepare('SELECT id, name, price, brand, description, picture_url, url_slug, publish_date FROM products WHERE url_slug = ?')
                  .get(slug);

  res.json(product);
    
  })

app.get('/api/products', (req, res, next) => {

  const products = db.prepare(`
    SELECT id, 
          name, 
          price, 
          brand, 
          description, 
          picture_url, 
          url_slug, 
          publish_date 
    FROM products`)
        .all();

  res.json(products);
  });

app.post('/api/products', (req, res, next) => {

  const { product_name, description, picture_url, brand, SKU, price, publish_date, url_slug } = req.body;
  const product = { product_name, description, picture_url, brand, SKU, price, publish_date, url_slug };

  const insert = db.prepare(`
    INSERT INTO products (name,
                          description,
                          picture_url,
                          brand,
                          SKU, 
                          price,
                          publish_date, 
                          url_slug) 
    VALUES (@product_name, 
            @description, 
            @picture_url, 
            @brand, 
            @SKU,
            @price,
            @publish_date,
            @url_slug)`
  );

  insert.run(product);

  res.status(201).send();

})