import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Roast Chicken Caesar on Ciabatta
export const productData = {
  "id": 18,
  "category": "Sandwiches",
  "dishTitle": "Roast Chicken Caesar on Ciabatta",
  "sourcePage": "PDF pages 20, 26",
  "shortDescription": "Roast chicken Caesar sandwich on ciabatta.",
  "ingredients": [
    "Roast chicken breast",
    "Little gem lettuce",
    "Grated parmesan",
    "Crispy bacon (optional)",
    "Caesar mayo",
    "Black pepper"
  ],
  "build": [
    "Open ciabatta and spread Caesar mayo.",
    "Add lettuce leaves.",
    "Add sliced chicken.",
    "Top with parmesan and bacon (optional).",
    "Finish with cracked black pepper."
  ],
  "prep": [
    "Slice chicken.",
    "Wash/dry lettuce.",
    "Prepare Caesar mayo.",
    "Keep bacon separate."
  ],
  "method": [],
  "packagingCode": "TBC - not provided in source PDF",
  "label": "Sandwich | Keep chilled ≤5°C | Verify supplier declarations before final labelling.",
  "photo": "/images/chicken-caesar.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Gluten (wheat)",
    "Contains: Milk",
    "Contains: Egg"
  ]
};

export default function RoastChickenCaesarOnCiabattaSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
