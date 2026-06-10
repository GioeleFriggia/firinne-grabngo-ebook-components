import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Ceasar Salad
export const productData = {
  "id": 9,
  "category": "Expanded Salad Reference",
  "dishTitle": "Ceasar Salad",
  "sourcePage": "PDF pages 27, 28, 30",
  "shortDescription": "Classic salad packed full crunch and flavours. Holds well for 2–3 days chilled. Great for patient or staff Grab & Go.",
  "ingredients": [
    "Steaky Bacon (Cooked)",
    "Mayonnaise",
    "Baby Gem Lettuce",
    "Parmesan",
    "Croutons",
    "Olive Oil",
    "Mixed Herbs"
  ],
  "dressing": [
    "Mayonnaise",
    "Garlic Puree",
    "Lemon",
    "Worchester sauce",
    "Grated Parmesan"
  ],
  "method": [
    "Cut old bread into cubes, Coat the bread in 2 tablespoons of olive oil & teaspoon of garlic puree. Add the mixed herbs."
  ],
  "notes": [
    "The source PDF spells the product “Ceasar Salad” and the method text is truncated after “mixed herbs,”. No extra method text has been invented."
  ],
  "photo": "/images/product-photo-pending.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Expanded allergen reference page lists this product name only; detailed allergen ticks are not visible in extracted text. Verify supplier allergen declarations."
  ]
};

export default function CeasarSaladSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
