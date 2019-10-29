# Esri JavaScript 4.x Typescript App

Autor: Zdeněk Jankovský

----------------
Tato aplikace vznikla jako ukázka aplikace pro workshop ArcGIS API for JavaScript 4.x pro uživatelskou [Konferenci GIS Esri v ČR 2019](https://www.arcdata.cz/zpravy-a-akce/akce/konference) organizovanou společností [ARCDATA PRAHA, s.r.o.](https://www.arcdata.cz).

Aplikace demonstruje použití a nastavení přidružených nástrojů s Esri JavaScript API 4.13 a to [TypeScript](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html), [Sass](https://developers.arcgis.com/javascript/latest/guide/styling/), [ArcGIS CLI](https://github.com/Esri/arcgis-js-cli).

Základ aplikace pomocí TypeScript je vytvořen podle návodu v dokumentaci [JS API](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html), kompilace Sass pomocí Grunt a začlení změny motivu je převzato z [aplikace jsapi-styles](https://github.com/jcfranco/jsapi-styles), šablona souborů pro widget byla vygenerována pomocí nástroje [@arcgis/cli](https://github.com/Esri/arcgis-js-cli).

## Zprovoznění a běh aplikace
Aplikace je založena na prostředí Node.js a balíčkovacím systému npm.

Pro zprovoznění si stáhněte Git repozitář, ve formě zip, nebo lépe pomocí `git clone`. Aplikace bude ve stavu poslední revize. V tuto chvíli proveďte příkaz `npm install`. Měli by se instalovat všechny potřebné závislosti. Kompiler/balíček `typescript` není součástí závislostí, neboť používám globální instalaci (`npm install -g typescript`).

Repozitory má pomocí tagů vyznačeny hlavní konfigurační a provozní body kódu. Po instalaci všech závislostí je možné se přepnout na tag `1-typescript-aplikace` a následně provést kompilaci TypeScriptu pomocí příkazu `tsc -w`. Aplikace by měla být k dispozici: ideální je využít editoru VSCode a jeho LiveServeru a spustit aplikaci pomocí tohoto doplňku. Aplikace bude v základní verzi, ve stavu dle dokumentace [pro zprovoznění aplikace TypeScript](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html).

V každém dalším kroku přibývá určitá funkčnost. Po každém kroku je vhodné znovu nastartovat kompiler TypeScript. Po přidání Sass souborů je nutné kompilovat i tyto: to je možné pomocí příkazu `npm run sass-dev`; po každé změně tagu v Git je vhodné kompiler také restartovat.
> Poznámka: pokud byste očekávali pozměněný styl aplikace, který ale zůstává stále stejný, zkontrolujte, zda vám `npm install` nepřemazal soubor `sass/my-theme/main.scss`; k jeho správné verzi se můžete vrátit jednoduše pomocí resetu změn Git repozitáře.


## Odkazy a případně další zdroje

  - [Aplikace pro testování motivu ArcGIS JS API 4.x](https://github.com/jcfranco/jsapi-styles)
  - [Další informace o motivech JS API](https://github.com/Esri/jsapi-resources/blob/master/4.x/npm/demo/SASS.md)
  - [CSS BEM metodologie](http://getbem.com/)
  - [BEM - pojmenovávací konvence](https://www.vzhurudolu.cz/prirucka/bem)
  - [JavaScript API Widgets View](https://github.com/Esri/arcgis-js-api/tree/4master/widgets)
  - [Widget Development](https://developers.arcgis.com/javascript/latest/guide/custom-widget/)
  - Editor [VSCode](https://code.visualstudio.com/) - užitečná a použitá rozšíření jsou k dispozici v repozitáři v souboru `extensions.json` (soubor je možné načíst pomocí doplňku [CodeSync](https://marketplace.visualstudio.com/items?itemName=golf1052.code-sync))
