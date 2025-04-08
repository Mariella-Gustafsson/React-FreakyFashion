# Freaky Fashion

Detta är en fullstack-applikation byggd med **Express**, **React**, och **Better-SQLite3**.  
Projektet inkluderar även ett skript för att skapa och konfigurera en databas.

## Funktionalitet

Denna applikation föreställer en fiktiv sida för en butik som säljer modekläder som heter Freaky Fashion.  
I webbplatsen ingår:  
- **Header**: Med enkel sökfunktion. Finns på alla sidorna som tillhör e-handeln.
- **Footer**: Med accordionkomponent på mobilversionen. Finns på alla sidorna som tillhör e-handeln.
- **Startsida**: Innehåller hero (statisk), spots (statiska) och produktlista (dynamisk).  
- **Produktlista**: Listar de 8 senaste produkterna från databasen. Produkter som publicerades för mindre än 7 dagar sen erhåller en badge med texten "Nyhet".  
- **Detaljsida**: Är dynamisk och länkas till från startsidan. Det finns en varukorgsknapp för att lägga till produkterna i varukorgen. Texten på knappen ändras beroende på om produkten finns i varukorgen eller inte, men har inte ännu ändrat stylingen så att knappen t.ex. får en annan färg om produkten är eller inte i varukorgen. Detaljsidan innehåller även en karusell som visar alla produkter från databasen (Notera att karusellen kanske inte fungerar helt optimalt för närvarande.)
- **Varukorgssida**: Man kan komma till varukorgssidan från "basket" ikonen i headern. Denna sida listar alla produkter som finns i varukorgen. Här går det att ändra kvantitet och ta bort produkter från varukorgen.  
- **Checkoutsida**: Det finns en checkoutsida som man kommer till om man trycker på "kassa" knappen från varukorgen, men denna sida är i stort sett statisk.
- **Adminsidor**: Det finns två adminsidor med följande url: http://serverurl/admin/products som listar alla produkter i databasen (här går det att ta bort produkter från databasen) och http://serverurl/admin/products/new där man kan lägga till en ny produkt i databasen.  

Alla delar är responsiva förutom adminsidorna.

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
