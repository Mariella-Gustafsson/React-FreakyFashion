// Importera better-sqlite3
const Database = require('better-sqlite3');

// Skapa en databasanslutning till en SQLite-databas (eller skapa en om den inte finns)
const db = new Database('./db/products-database.db', {
});

// Exportera databasen så att den kan användas i andra delar av applikationen
module.exports = db;