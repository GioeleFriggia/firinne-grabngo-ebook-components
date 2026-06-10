import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Miso–Lime Chicken Grab-and-Go Lunch
export const productData = {
  "id": 15,
  "category": "Protein Lunch Boxes",
  "dishTitle": "Miso–Lime Chicken Grab-and-Go Lunch",
  "sourcePage": "PDF pages 10, 12, 17",
  "shortDescription": "Protein lunch box with Miso–Lime Chicken, three salads and Lime–Sesame Dressing.",
  "ingredients": [
    "Miso–Lime Chicken Thighs",
    "Asian Noodle Salad",
    "Red Quinoa, Bulgur & Beetroot",
    "Carrot & Seed Salad",
    "Lime–Sesame Dressing"
  ],
  "sauce": [
    "Lime–Sesame Dressing"
  ],
  "proteinMethod": [
    "Mix 1 tbsp miso + 1 tsp lime + 1 tsp honey (+1/2 tsp sesame oil opt); spoon.",
    "Bake 200°C 20–25 min.",
    "Cool & slice or leave whole."
  ],
  "method": [
    "Assemble the protein with listed salads and sauce, then label and chill ≤5°C."
  ],
  "packagingCode": "TBC - not provided in source PDF",
  "label": "Protein Lunch Box | Contains soy and sesame | Keep chilled ≤5°C | Sauce pot included | Verify supplier declarations before final labelling.",
  "photo": "/images/miso-chicken-box.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Soy — miso/dressing",
    "Contains: Gluten (wheat) — bulgur in quinoa salad",
    "Contains: Sesame — dressing/seeds",
    "Optional/May contain: Sulphites"
  ]
};

export default function MisoLimeChickenGrabAndGoLunchSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
