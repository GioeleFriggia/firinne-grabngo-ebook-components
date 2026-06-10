import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Korean-Style Beef Bulgogi Wrap
export const productData = {
  "id": 20,
  "category": "Sandwiches",
  "dishTitle": "Korean-Style Beef Bulgogi Wrap",
  "sourcePage": "PDF pages 22, 26",
  "shortDescription": "Beef bulgogi style wrap with gochujang mayo and pickled slaw.",
  "ingredients": [
    "Sliced cooked beef",
    "Gochujang mayo",
    "Pickled slaw",
    "Sesame seeds",
    "Coriander"
  ],
  "build": [
    "Spread gochujang mayo on wrap.",
    "Add beef slices.",
    "Add pickled slaw.",
    "Sprinkle sesame seeds & coriander.",
    "Roll tightly."
  ],
  "prep": [
    "Mix gochujang mayo.",
    "Make slaw.",
    "Warm wraps."
  ],
  "method": [],
  "photo": "/images/product-photo-pending.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Gluten (wheat)",
    "Contains: Sesame",
    "Contains: Soy"
  ]
};

export default function KoreanStyleBeefBulgogiWrapSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
