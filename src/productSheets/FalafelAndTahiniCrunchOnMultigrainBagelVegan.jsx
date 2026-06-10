import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Falafel & Tahini Crunch on Multigrain Bagel (Vegan)
export const productData = {
  "id": 22,
  "category": "Sandwiches",
  "dishTitle": "Falafel & Tahini Crunch on Multigrain Bagel (Vegan)",
  "sourcePage": "PDF pages 24, 26",
  "shortDescription": "Vegan falafel and tahini crunch on multigrain bagel.",
  "ingredients": [
    "Baked falafel",
    "Tahini lemon dressing",
    "Cucumber ribbons",
    "Carrot slaw",
    "Spinach",
    "Pickled red onion"
  ],
  "build": [
    "Spread tahini dressing.",
    "Add spinach.",
    "Add falafel slices.",
    "Add cucumber ribbons & carrot slaw.",
    "Finish with pickled red onion."
  ],
  "prep": [
    "Bake falafel.",
    "Mix tahini+lemon.",
    "Prep veg."
  ],
  "method": [],
  "packagingCode": "TBC - not provided in source PDF",
  "label": "Vegan Sandwich | Keep chilled ≤5°C | Verify supplier declarations before final labelling.",
  "photo": "/images/falafel-bagel.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Gluten (wheat)",
    "Contains: Sesame"
  ]
};

export default function FalafelAndTahiniCrunchOnMultigrainBagelVeganSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
