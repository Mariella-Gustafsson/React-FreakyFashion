// Importera express
const express = require('express');
const port = 8000;

// Skapa en instans av Express
const app = express();

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});