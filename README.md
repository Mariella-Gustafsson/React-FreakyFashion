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
      Öppna projektmappen i ditt valda utvecklingsverktyg. Om du använder Visual Studio Code, kör:  
      cd React-FreakyFashion  
      code .

3. **Installera beroenden på serversidan**

   Starta den inbyggda terminalen och kör:  
    cd server  
    npm install
    
4. **Skapa och initiera databasen**

    node db/setup.js

5. **Starta backend-servern**

    npm run dev

6. **Installera beroenden på clientsidan**

    Start en ny inbyggd terminal och kör:  
    cd client  
    npm install

7. **Starta frontend-servern**

    npm run dev
