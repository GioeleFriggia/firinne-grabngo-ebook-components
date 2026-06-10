import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Tuna & Sweetcorn Melt on Baguette
export const productData = {
  "id": 21,
  "category": "Sandwiches",
  "dishTitle": "Tuna & Sweetcorn Melt on Baguette",
  "sourcePage": "PDF pages 23, 26",
  "shortDescription": "Tuna and sweetcorn melt on baguette.",
  "ingredients": [
    "Tuna mayo",
    "Sweetcorn",
    "Spring onion",
    "Light cheese (optional)",
    "Lettuce"
  ],
  "build": [
    "Add thin cheese layer to baguette (optional).",
    "Spread tuna mix evenly.",
    "Top with lettuce.",
    "Close baguette firmly."
  ],
  "prep": [
    "Drain tuna well.",
    "Mix tuna/corn/onion.",
    "Use cheese layer for moisture control."
  ],
  "method": [],
  "packagingCode": "TBC - not provided in source PDF",
  "label": "Sandwich | Keep chilled ≤5°C | Verify supplier declarations before final labelling.",
  "photo": "/images/tuna-baguette.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Gluten (wheat)",
    "Contains: Fish",
    "Contains: Egg",
    "Contains: Milk"
  ]
};

export default function TunaAndSweetcornMeltOnBaguetteSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
