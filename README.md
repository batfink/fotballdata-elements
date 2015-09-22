# fotballdata-elements

**Custom html elementer for visning av fiks data**

- `postinstall` -> Installerer bower componenter og kjører `npm start`
- `start` -> Kjører `watch:js`, `watch:css` og `serve` parallelt
- `preserve` -> Kjøres automatisk før `serve`, og sørger for at `build:js` og `build:css` kjøres før `serve`
- `serve` -> Starter browser-sync, server filer fra www, dist, og bower_components og restarter ved endringer i "dist"
- `watch:js` -> Overvåker index.js og kjører `build:js` ved endringer
- `watch:css` -> Overvåker css/* og kjører `build:css` ved endringer
- `build:js` -> Bundler es6-moduler med rollup, transpilerer til es5/umd med babel, og lagrer resultatet i "dist"
- `build:css` -> Bygger css med postcss og lagrer resultat i "dist"

**For å bruke**

*Første gang*

`npm i` – dette installerer node moduler, bower componenter og kjører start

index.html i www åpnes dermed i default browser på localhost:3000

*Etter første gang*

`npm start` – siden man da allerede har node moduler og bower componenter installert trenger man ikke gjøre dette en gang til

**Status**

Foreløpig kun ferdig med grunnleggende oppsett av arbeidsflyt, ingen integrasjon mot fiks ennå
