import ProductSheetTemplate from './ProductSheetTemplate';

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Satay Crunch
export const productData = {
  "id": 10,
  "category": "Expanded Salad Reference",
  "dishTitle": "Satay Crunch",
  "sourcePage": "PDF pages 28, 30",
  "shortDescription": "Asian salad packed full of textures and flavours. Holds well for 2–3 days chilled. Keep salad dressing on side.",
  "ingredients": [
    "Mixed Greens",
    "Charred Broccoli",
    "Pickled Cucumber",
    "Carrot Ribbons",
    "Sesame",
    "Peanuts",
    "Rice wine vinegar",
    "Sugar"
  ],
  "dressing": [
    "Satay Peanuts",
    "Honey",
    "Soya",
    "Garlic",
    "Ginger",
    "Sugar",
    "Lime"
  ],
  "method": [
    "To make the satay dressing add 6 tablespoons of crunchy peanut butter, squeeze of 1 Lime, 2 tablespoons of sugar.",
    "Use of this dressing to marinade firm tofu. Minimum 2 hours to infuse flavour.",
    "To pickle the veg, add 5 tablespoons of rice wine vinegar, 5 tablespoons of sugar, teaspoon of chili flakes.",
    "To cook the tofu, pan fry until coloured and allow to cool.",
    "Toast Sesame in a dry pan until coloured. Toast peanuts in a dry pan slowly. Once toasted allow cool slightly.",
    "Assemble the Salad with a base of mixed greens, pickled vegetables, grilled tofu. Garnished with tossed peanuts & Sesame."
  ],
  "notes": [
    "Parts of the source PDF text are truncated; the visible wording has been preserved without inventing missing text."
  ],
  "photo": "/images/product-photo-pending.svg",
  "unitCost": "",
  "unitSellingPrice": "",
  "allergens": [
    "Expanded allergen reference page lists this product name only; detailed allergen ticks are not visible in extracted text. Verify supplier allergen declarations."
  ]
};

export default function SatayCrunchSheet({ product = productData, updateProduct }) {
  return <ProductSheetTemplate product={product} updateProduct={updateProduct} />;
}
