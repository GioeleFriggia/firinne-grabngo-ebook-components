# Firinne Grab n Go Range - React demo

Web app statica React/Vite per presentare l'e-book Firinne Grab n Go Range.

## Avvio

```bash
npm install
npm run dev
```

Apri l'indirizzo mostrato dal terminale, di solito `http://localhost:5173`.

## Come modificare i testi dei prodotti

Ogni prodotto ha un componente/file dedicato dentro:

```text
src/productSheets/
```

Esempi:

```text
src/productSheets/RedQuinoaBulgurAndBeetrootGrabAndGoSalad.jsx
src/productSheets/AsianNoodleGrabAndGoSalad.jsx
src/productSheets/TandooriChickenGrabAndGoLunch.jsx
src/productSheets/RoastChickenCaesarOnCiabatta.jsx
```

Dentro ogni file trovi:

```js
export const productData = {
  dishTitle: '...',
  ingredients: [...],
  dressing: [...],
  method: [...],
  allergens: [...]
}
```

Modifica direttamente quei testi. Non aprire `docs/source-material.pdf` con l'editor di testo: è un file binario, quindi VS Code lo mostra con caratteri strani. Aprilo con il visualizzatore PDF.

## Dove modificare la grafica generale

- `src/productSheets/ProductSheetTemplate.jsx` controlla il layout comune delle schede.
- `src/css/ProductDetail.css` controlla la grafica delle schede prodotto.
- `src/css/Ebook.css` controlla lista, sidebar e pagina e-book.
- `src/css/Home.css` controlla la home.

## Note importanti

I campi `unitCost`, `unitSellingPrice`, `margin`, `packagingCode` e `label` sono editabili nella demo. Il margine viene calcolato automaticamente quando inserisci cost e selling price.
