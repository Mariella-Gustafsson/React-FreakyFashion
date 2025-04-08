const Database = require('better-sqlite3');
const db = new Database('db/products-database.db');

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
    INSERT INTO products (name, price, brand, picture_url, description, SKU, publish_date, url_slug)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const products = [
    ['Blommig klänning', 599, 'SunBloom Couture', '/images/Klänning.jpg', 'Denna ljusgula klänning kombinerar romantik med sommarfräschör. Med mjuka blommönster, eleganta ärmar som sitter över axlarna och en djup V-ringning skapas ett smickrande dekolletage. Det luftiga materialet är perfekt för varma dagar. Klänningen är idealisk för picknickar, bruncher eller sommarfester – matcha den med sandaler eller klackar och stora solglasögon för en fulländad look!', 'XCR323', '2024-10-03', 'blommig-klanning'],
    ['Jeansjacka', 299, 'Denim & Co.', '/images/JeansJacka.jpg', 'Denna ljusa jeansjacka är en tidlös klassiker med en avslappnad passform. Tillverkad av mjukt denim erbjuder den både stil och komfort. Jackan har en traditionell knäppning, två bröstfickor och en lätt tvättad finish som ger en fräsch och modern känsla. Perfekt att bära över t-shirts eller klänningar för en casual look.', 'VNM345', '2024-10-10', 'jeansjacka'],
    ['Rosa kappa', 799, 'Urban Elegance', '/images/RosaKappa.jpg', 'Denna knälånga ljusrosa kappa är en elegant och stilren ytterplagg som förvandlar varje outfit. Tillverkad av mjukt och värmande material erbjuder den både komfort och stil. Den har en klassisk krage och knäppning fram för en smickrande passform. Perfekt för både vardag och festliga tillfällen, kan kappan enkelt kombineras med klänningar, byxor eller jeans för en sofistikerad look.', 'WRE799', '2024-10-13', 'rosa-kappa'],
    ['Vit elegant klänning', 499, 'Urban Elegance', '/images/VitAxelKlänning.jpg', 'Denna vita mjuka klänning är en perfekt kombination av elegans och komfort. Klänningen är knälång och har ett fint fall som ger rörelse och lätthet, vilket gör att den flödar vackert när du går. Tyget är mjukt och bekvämt mot huden, vilket gör den idealisk för både avslappnade tillfällen och mer uppklädda event. Den enkla, rena vita färgen ger klänningen en fräsch och tidlös känsla, och den minimalistiska designen gör den lätt att styla med olika accessoarer. Denna klänning är ett måste för sommargarderoben och passar perfekt för en lunch, picknick eller en lättare kvällsutflykt.', 'BBB565', '2025-03-30', 'vit-elegant-klanning'],
    ['Röd Kofta', 199, 'PureCotton', '/images/RödKofta.jpg', 'En röd kofta i tunn, mjuk bomull som ger en lätt och luftig känsla. Den är i en vacker, livfull röd färg som ger ett fräscht och energiskt intryck. Tyget är lätt och behagligt, vilket gör koftan perfekt för mildare väder eller som ett lager över en topp när du vill ha något som är både stiligt och bekvämt. Koftan har en avslappnad passform och är designad för att ge en ledig, men ändå feminin, look. De långa ärmarna och den öppna framkanten gör den enkel att slänga på sig för att snabbt förvandla en enkel outfit till något mer genomtänkt. Perfekt för vardagsbruk, både hemma och när du är på språng.', 'BCW143', '2025-03-16', 'rod-kofta1997'],
    ['Grön sommarklänning', 449, 'Lunaria', '/images/GrönSommarKlänning.jpg', 'Denna grönklädda klänning med axelband utstrålar både friskhet och feminin elegans. Klänningen är prydd med vita blommor, vilket ger ett härligt och livligt mönster. Den sitter åt vid midjan tack vare ett elastiskt band, vilket framhäver en vacker silhuett och ger en smickrande passform. Från midjan och ner faller klänningen vackert och lätt till knäna, vilket ger en sofistikerad och bekväm look. Perfekt för både en avslappnad sommardag eller en elegant kväll ute, där du vill känna dig både bekväm och stilfull.', 'VGU454', '2025-03-28', 'gron-sommar-klanning'],
    ['Off-shoulder sommarklänning', 299, 'PureCotton', '/images/SommarKlänning.jpg', 'Denna gula off-shoulder maxiklänning utstrålar både solig energi och feminin elegans. Klänningen har en vacker off-shoulder-design som blottar axlarna och ger en mjuk, romantisk känsla. Den har ett blommigt mönster med gula blommor, vilket ger en härlig, livlig touch och fångar sommaren i sitt bästa ljus. Klänningen är uppskuren längs benet, vilket tillför en lekfull detalj samtidigt som den behåller sin elegans. Den långa kjolen faller vackert till golvet, vilket ger klänningen en dramatiskt stilren look. Perfekt för både festliga tillfällen och somrig vardagslyx, denna klänning gör ett starkt intryck där du än går.', 'MNL555', '2025-03-10', 'offshoulder-klanning'],
    ['Svart blus', 249, 'Sunbloom Couture', '/images/SvartBlus.jpg', 'Denna eleganta svartblus i siden är prydd med stiliga vita prickar som ger en lekfull touch. Med sina mjuka linjer och lätta material faller blusen vackert och ger en lyxig känsla. De guldiga knapparna fram ger en chic kontrast och förhöjer blusens sofistikerade look. Perfekt för både kontoret och kvällsevenemang, kan denna blus enkelt stylas med både kjolar och byxor för en tidlös outfit.', 'XMN956', '2025-03-13', 'svart-blus']
  ];

  products.forEach(product => insert.run(...product));
  
  console.log('Databasen har skapats och fylld med initial data.');
} else {
  console.log('Databasen finns redan och innehåller data.');
}

db.close();