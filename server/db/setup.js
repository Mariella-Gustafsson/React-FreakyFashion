const Database = require('better-sqlite3');
const db = new Database('db/database.db'); // Ändra sökväg om det behövs

// Skapa en tabell om den inte redan finns
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_name TEXT NOT NULL,
    price INTEGER NOT NULL,
    brand TEXT NOT NULL,
    picture_url TEXT NOT NULL,
    description TEXT NOT NULL,
    SKU TEXT NOT NULL UNIQUE,
    publish_date TEXT NOT NULL,
    url_slug TEXT NOT NULL UNIQUE
  );
`);

const rowCount = db.prepare('SELECT COUNT(*) AS count FROM products').get().count;

if (rowCount === 0) {
  // Lägg till initiala produkter
  const insert = db.prepare(`
    INSERT INTO products (product_name, price, brand, picture_url, description, SKU, publish_date, url_slug)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const products = [
    ['Blommig klänning', 599, 'SunBloom Couture', '/images/Klänning.jpg', 'Denna ljusgula klänning kombinerar romantik med sommarfräschör. Med mjuka blommönster, eleganta ärmar som sitter över axlarna och en djup V-ringning skapas ett smickrande dekolletage. Det luftiga materialet är perfekt för varma dagar. Klänningen är idealisk för picknickar, bruncher eller sommarfester – matcha den med sandaler eller klackar och stora solglasögon för en fulländad look!', 'XCR323', '2024-10-03', 'blommig-klanning'],
    ['Jeansjacka', 299, 'Denim & Co.', '/images/JeansJacka.jpg', 'Denna ljusa jeansjacka är en tidlös klassiker med en avslappnad passform. Tillverkad av mjukt denim erbjuder den både stil och komfort. Jackan har en traditionell knäppning, två bröstfickor och en lätt tvättad finish som ger en fräsch och modern känsla. Perfekt att bära över t-shirts eller klänningar för en casual look.', 'VNM345', '2024-10-10', 'jeansjacka'],
    ['Rosa kappa', 799, 'Urban Elegance', '/images/RosaKappa.jpg', 'Denna knälånga ljusrosa kappa är en elegant och stilren ytterplagg som förvandlar varje outfit. Tillverkad av mjukt och värmande material erbjuder den både komfort och stil. Den har en klassisk krage och knäppning fram för en smickrande passform. Perfekt för både vardag och festliga tillfällen, kan kappan enkelt kombineras med klänningar, byxor eller jeans för en sofistikerad look.', 'WRE799', '2024-10-13', 'rosa-kappa']
  ];

  products.forEach(product => insert.run(...product));
  
  console.log('Databasen har skapats och fylld med initial data.');
} else {
  console.log('Databasen finns redan och innehåller data.');
}

db.close();