import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Halloumi “Steak” Grab-and-Go Lunch
export const productData = {
  "id": 13,
  "category": "Protein Lunch Boxes",
  "dishTitle": "Halloumi “Steak” Grab-and-Go Lunch",
  "sourcePage": "PDF pages 10, 12, 16",
  "shortDescription": "Protein lunch box with Halloumi “Steak”, three salads and lemon–tahini sauce.",
  "ingredients": [
    "Halloumi “Steak”",
    "Broccoli, Hazelnut & Feta",
    "Carrot & Seed Salad",
    "Moroccan Couscous & Sweet Potato",
    "Lemon–Tahini"
  ],
  "sauce": [
    "Lemon–Tahini"
  ],
  "proteinMethod": [
    "Slice 1.5–2cm; oil; sumac; honey opt.",
    "Bake 200°C 10–12 min.",
    "Cool."
  ],
  "method": [
    "Assemble the protein with listed salads and sauce, then label and chill ≤5°C."
  ],
  "packagingCode": "TBC - not provided in source PDF",
  "label": "Protein Lunch Box | Keep chilled ≤5°C | Sauce pot included | Verify supplier declarations before final labelling.",
  "photo": "/images/halloumi-box.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Milk — halloumi/feta",
    "Contains: Tree nuts — hazelnuts",
    "Contains: Sesame — tahini/seeds",
    "Optional/May contain: Mustard",
    "Optional/May contain: Sulphites"
  ]
};

export default function HalloumiSteakGrabAndGoLunchSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
