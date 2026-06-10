import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Smoked Salmon, Cream Cheese & Dill on Rye
export const productData = {
  "id": 23,
  "category": "Sandwiches",
  "dishTitle": "Smoked Salmon, Cream Cheese & Dill on Rye",
  "sourcePage": "PDF pages 25, 26",
  "shortDescription": "Smoked salmon, cream cheese and dill sandwich on rye.",
  "ingredients": [
    "Smoked salmon",
    "Cream cheese or vegan alternative",
    "Cucumber",
    "Thin red onion",
    "Fresh dill",
    "Lemon juice"
  ],
  "build": [
    "Spread cream cheese on rye.",
    "Add sliced cucumber.",
    "Add smoked salmon.",
    "Add thin onion slices.",
    "Finish with dill & lemon juice."
  ],
  "prep": [
    "Mix cream cheese+dill.",
    "Slice cucumber thin.",
    "Assemble chilled."
  ],
  "method": [],
  "packagingCode": "TBC - not provided in source PDF",
  "label": "Sandwich | Keep chilled ≤5°C | Verify supplier declarations before final labelling.",
  "photo": "/images/salmon-rye.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Gluten (wheat)",
    "Contains: Fish",
    "Contains: Milk"
  ]
};

export default function SmokedSalmonCreamCheeseAndDillOnRyeSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
