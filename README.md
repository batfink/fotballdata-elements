# fotballdata-elements

**CUSTOM HTML ELEMENTER FOR VISNING AV DATA FRA FIKS**

- `postinstall` -> Installerer bower componenter og kjører `npm start`
- `start` -> Kjører `watch:js`, `watch:css` og `serve` parallelt
- `preserve` -> Kjøres automatisk før `serve` og sørger for at `build:js` og `build:css` kjøres først
- `serve` -> Starter browser-sync, server filer fra www, dist, og bower_components og restarter ved endringer i "dist"
- `watch:js` -> Overvåker index.js og kjører `build:js` ved endringer
- `watch:css` -> Overvåker css/* og kjører `build:css` ved endringer
- `build:js` -> Bundler es6-moduler med rollup, transpilerer til es5/umd med babel, og lagrer resultatet i "dist"
- `build:css` -> Bygger css med postcss og lagrer resultat i "dist"

**BRUK**

**Første gang**

`npm i` – dette installerer node moduler, bower componenter og kjører `start`

index.html i www åpnes dermed i default browser på localhost:3000

**Etter første gang**

Siden node moduler og bower componenter nå allerede er installert, holder det å kjøre `npm start`.

Dersom man ønsker å kjøre noen av de andre scriptene direkte, for å f.eks. kun bygge js, kan man gjøre det slik:  `npm run build:js`

**STATUS**

Har skrevet fotballdata.js som henter data fra fotballdata.no, og api.js som bruker alle metodene og skriver resultatet ut i konsollet i nettleseren.

Neste punkt blir å lage custom elements som bruker fotballdata.js. Har begynt såvidt på <afk-matches>.
