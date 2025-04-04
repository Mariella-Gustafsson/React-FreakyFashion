# Freaky Fashion

Detta är en fullstack-applikation byggd med **Express**, **React**, och **Better-SQLite3**.  
Projektet inkluderar även ett skript för att skapa och konfigurera en databas.

## Teknologier
- **Backend:** Express.js  
- **Frontend:** React.js  
- **Databas:** Better-SQLite3  

## Projektstruktur
- **`/backend`** – Express-servern  
- **`/frontend`** – React-applikationen  
- **`/db`** – SQLite-databasen och setup-skript  

## Installation och Setup

1. **Klona repo**  
   Kör följande kommando i terminalen
   git clone https://github.com/Mariella-Gustafsson/React-FreakyFashion.git
   cd React-FreakyFashion

2. **Installera beroenden på serversidan**

    cd server
    npm install
    
3. **Skapa och initiera databasen**

    node db/setup.js

4. **Starta backend-servern**

    npm run dev

5. **Installera beroenden på clientsidan**

    cd ..
    cd client
    npm install

6. **Starta frontend-servern**

    npm run dev
