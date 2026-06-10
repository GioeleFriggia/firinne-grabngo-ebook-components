import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Goats Cheese and Candied Walnut
export const productData = {
  "id": 8,
  "category": "Expanded Salad Reference",
  "dishTitle": "Goats Cheese and Candied Walnut",
  "sourcePage": "PDF pages 27, 30",
  "shortDescription": "Delicious & light salad packed full of texture and flavours. Holds well for 2–3 days chilled. Keep salad dressing on side.",
  "ingredients": [
    "Goats Cheese (cut into 3cm slices)",
    "50 g Cooked Beetroot",
    "Mixed Leaf",
    "100g Cooked Sweet Potato Wedges",
    "Walnuts (Handful)",
    "200g Sugar",
    "Squeeze Honey"
  ],
  "dressing": [
    "Balsamic Glaze"
  ],
  "method": [
    "Peel and cut sweet potato into wedges, toss in oil and season. Roast in oven until cooked through at 180 degrees.",
    "Mixed salad leaf as base of salad, add the roasted beetroot wedges, add the sweet potatoes, Place the goats’ cheese in the salad."
  ],
  "notes": [
    "The source PDF text for this method is truncated; no extra method text has been invented."
  ],
  "photo": "/images/product-photo-pending.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Expanded allergen reference page lists this product name only; detailed allergen ticks are not visible in extracted text. Verify supplier allergen declarations."
  ]
};

export default function GoatsCheeseAndCandiedWalnutSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
