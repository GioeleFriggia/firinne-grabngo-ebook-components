import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Falafel Grab-and-Go Lunch
export const productData = {
  "id": 17,
  "category": "Protein Lunch Boxes",
  "dishTitle": "Falafel Grab-and-Go Lunch",
  "sourcePage": "PDF pages 11, 12, 18",
  "shortDescription": "Protein lunch box with ready-made Falafel, three salads and Green Herb Pesto.",
  "ingredients": [
    "Falafel (Ready-made)",
    "Moroccan Couscous & Sweet Potato",
    "Carrot & Seed Salad",
    "Red Quinoa, Bulgur & Beetroot",
    "Green Herb Pesto (vegan)"
  ],
  "sauce": [
    "Green Herb Pesto (vegan)"
  ],
  "proteinMethod": [
    "Spread; oil spray.",
    "Bake 200°C 12–15 min.",
    "Cool.",
    "Sauce: ready-made pesto + lemon."
  ],
  "method": [
    "Assemble the protein with listed salads and sauce, then label and chill ≤5°C."
  ],
  "packagingCode": "TBC - not provided in source PDF",
  "label": "Protein Lunch Box | Vegan sauce | Keep chilled ≤5°C | Verify supplier declarations before final labelling.",
  "photo": "/images/falafel-box.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Gluten (wheat) — bulgur & couscous",
    "Contains: Sesame — tahini pesto",
    "Optional/May contain: Tree nuts",
    "Optional/May contain: Sulphites"
  ]
};

export default function FalafelGrabAndGoLunchSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
