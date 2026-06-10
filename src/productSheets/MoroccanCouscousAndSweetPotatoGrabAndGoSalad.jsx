import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Moroccan Couscous & Sweet Potato Grab-and-Go Salad
export const productData = {
  "id": 5,
  "category": "Salads",
  "dishTitle": "Moroccan Couscous & Sweet Potato Grab-and-Go Salad",
  "sourcePage": "PDF pages 4, 8, 15",
  "shortDescription": "A bright Moroccan-inspired salad with colour and aroma that retains freshness for 2–3 days chilled. Great for patient or staff Grab & Go.",
  "ingredients": [
    "300g couscous",
    "600ml vegetable stock",
    "300g sweet potato, peeled and diced",
    "1 red pepper, diced",
    "1 yellow pepper, diced",
    "150g cherry tomatoes, halved",
    "1 small red onion, finely diced",
    "50g almonds or pumpkin seeds, toasted",
    "Handful fresh parsley, chopped",
    "Handful fresh coriander, chopped"
  ],
  "dressing": [
    "Juice of 1 lemon",
    "2 tbsp olive oil",
    "1 tbsp honey",
    "1 tsp ground cumin",
    "1 tsp ground coriander",
    "1 tsp smoked paprika",
    "¼ tsp ground cinnamon",
    "Salt and pepper"
  ],
  "method": [
    "Toss sweet potato with a little oil and roast at 200°C for 25–30 min, turning once.",
    "Heat stock to steaming, then pour over couscous.",
    "Stir spices into couscous, cover, and let sit 5 min. Fluff with a fork.",
    "Add sweet potato, peppers, tomatoes, onion, herbs, almonds or pumpkin seeds, and dressing."
  ],
  "photo": "/images/product-photo-pending.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Contains: Gluten (wheat) — couscous",
    "Optional/May contain: Tree nuts — almonds optional",
    "Optional/May contain: Sesame — if used",
    "Optional/May contain: Mustard — Dijon",
    "Optional/May contain: Sulphites — check vinegars"
  ]
};

export default function MoroccanCouscousAndSweetPotatoGrabAndGoSaladSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
