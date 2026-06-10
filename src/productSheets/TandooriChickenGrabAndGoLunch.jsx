import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Tandoori Chicken Grab-and-Go Lunch
export const productData = {
  "id": 12,
  "category": "Protein Lunch Boxes",
  "dishTitle": "Tandoori Chicken Grab-and-Go Lunch",
  "sourcePage": "PDF pages 10, 12, 16",
  "shortDescription": "Protein lunch box with Tandoori Chicken Breast, three salads and sauce.",
  "ingredients": [
    "Tandoori Chicken Breast",
    "Moroccan Couscous & Sweet Potato",
    "Carrot & Seed Salad",
    "Red Quinoa, Bulgur & Beetroot",
    "Mint Raita (or Dairy-Free Coriander Chutney)"
  ],
  "sauce": [
    "Mint Raita (or Dairy-Free Coriander Chutney)"
  ],
  "proteinMethod": [
    "Place on lined tray.",
    "2 tbsp tandoori paste each (+1 tbsp yogurt opt).",
    "Bake 180°C 18–20 min.",
    "Cool fully."
  ],
  "method": [
    "Assemble the protein with listed salads and sauce, then label and chill ≤5°C."
  ],
  "packagingCode": "TBC - not provided in source PDF",
  "label": "Protein Lunch Box | Keep chilled ≤5°C | Sauce pot included | Verify supplier declarations before final labelling.",
  "photo": "/images/tandoori-box.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Milk — yogurt; feta in salads",
    "Contains: Gluten (wheat) — bulgur/couscous",
    "Contains: Sesame — carrot salad",
    "Optional/May contain: Tree nuts",
    "Optional/May contain: Mustard",
    "Optional/May contain: Sulphites"
  ]
};

export default function TandooriChickenGrabAndGoLunchSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
