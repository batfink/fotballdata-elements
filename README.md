# fotballdata-elements

**Custom html elementer for visning av fiks data**

- `npm i` - Installerer node moduler og bower componenter og kjører `npm start`
- `npm start` – Kjører først `npm run build` og når det er ferdig `npm run watch` og `npm run serve` parallelt.
- `npm run watch` – Overvåker endringer i index.js, og kjører `npm run build` som bundler es6-moduler med rollup, transpilerer til es5/umd med babel, og lagrer resultatet i "dist".
- `npm run serve` – Starter browser-sync, server filer fra www, dist, og bower_components og restarter ved endringer i "dist".

_css kommer senere…_
