import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Charred Chicken Taco Salad
export const productData = {
  "id": 11,
  "category": "Expanded Salad Reference",
  "dishTitle": "Charred Chicken Taco Salad",
  "sourcePage": "PDF pages 28, 29, 30",
  "shortDescription": "Versatile colourful dish suited for Spring/Summer. Holds well for 2–3 days chilled. Fresh crisp salad full of carbohydrates.",
  "ingredients": [
    "Blackened Spiced Chicken Fillet",
    "Washed Cos Lettuce",
    "Sweetcorn",
    "Red Onion",
    "Cherry Tomato",
    "Avocado",
    "Pickled Red Onion",
    "Shredded Carrot",
    "Toasted Tortilla Salad",
    "Olive Oil",
    "Coriander"
  ],
  "dressing": [
    "Chipotle Lime Dressing"
  ],
  "method": [
    "Marinate the chicken in a 2 tablespoon of olive oil and tablespoon of blackened Cajun Chicken. Rest over night or a minimum."
  ],
  "notes": [
    "The source PDF text for this recipe is truncated after “or a mini…”. No extra method text has been invented."
  ],
  "photo": "/images/product-photo-pending.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Expanded allergen reference page lists this product name only; detailed allergen ticks are not visible in extracted text. Verify supplier allergen declarations."
  ]
};

export default function CharredChickenTacoSaladSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
