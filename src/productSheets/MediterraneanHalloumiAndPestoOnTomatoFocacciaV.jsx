import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Mediterranean Halloumi & Pesto on Tomato Focaccia (V)
export const productData = {
  "id": 19,
  "category": "Sandwiches",
  "dishTitle": "Mediterranean Halloumi & Pesto on Tomato Focaccia (V)",
  "sourcePage": "PDF pages 21, 26",
  "shortDescription": "Vegetarian halloumi and pesto sandwich on tomato focaccia.",
  "ingredients": [
    "Grilled halloumi",
    "Pesto mayo",
    "Roasted peppers",
    "Spinach",
    "Slow-roasted tomatoes"
  ],
  "build": [
    "Spread pesto mayo on focaccia.",
    "Layer spinach and roasted peppers.",
    "Add grilled halloumi slices.",
    "Finish with slow-roasted tomatoes."
  ],
  "prep": [
    "Grill halloumi.",
    "Blend pesto:mayo.",
    "Roast peppers & tomatoes."
  ],
  "method": [],
  "packagingCode": "TBC - not provided in source PDF",
  "label": "Vegetarian Sandwich | Keep chilled ≤5°C | Verify supplier declarations before final labelling.",
  "photo": "/images/halloumi-sandwich.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Gluten (wheat)",
    "Contains: Milk",
    "Contains: Egg",
    "Contains: Tree nuts"
  ]
};

export default function MediterraneanHalloumiAndPestoOnTomatoFocacciaVSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
