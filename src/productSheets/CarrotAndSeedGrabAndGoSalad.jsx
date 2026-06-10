import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Carrot & Seed Grab-and-Go Salad
export const productData = {
  "id": 3,
  "category": "Salads",
  "dishTitle": "Carrot & Seed Grab-and-Go Salad",
  "sourcePage": "PDF pages 4, 6, 14",
  "shortDescription": "A crunchy, colourful, fibre-rich salad with a light dressing that retains texture for 2–3 days chilled. Perfect for patient or staff Grab & Go.",
  "ingredients": [
    "600g carrots, grated or julienned",
    "50g sunflower seeds, toasted",
    "50g pumpkin seeds, toasted",
    "2 tbsp sesame seeds (optional)",
    "1 small red onion, very finely sliced",
    "Handful fresh parsley, chopped",
    "Handful fresh coriander, chopped (optional)"
  ],
  "dressing": [
    "60ml olive oil",
    "25ml lemon juice",
    "20ml orange juice (optional)",
    "1 tbsp honey or maple syrup",
    "1 tsp Dijon mustard",
    "½ tsp ground cumin"
  ],
  "optionalAddIns": [
    "Raisins or sultanas",
    "Chopped dates or apricots",
    "Chickpeas (well drained)"
  ],
  "method": [
    "Peel and grate or julienne the carrots, gently pat dry.",
    "Lightly toast seeds in a pan for 1–2 minutes.",
    "Combine carrots, onion, herbs, and seeds.",
    "Add dressing over salad and toss to combine."
  ],
  "packagingCode": "TBC - not provided in source PDF",
  "label": "Grab-and-Go Salad | Contains sesame | Keep chilled ≤5°C | Verify supplier declarations before final labelling.",
  "photo": "/images/carrot-seed.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Sesame — seeds included",
    "Optional/May contain: Tree nuts — if added",
    "Optional/May contain: Mustard — Dijon",
    "Optional/May contain: Sulphites — check vinegars"
  ]
};

export default function CarrotAndSeedGrabAndGoSaladSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
