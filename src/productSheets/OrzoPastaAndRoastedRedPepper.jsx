import ProductSheetTemplate from "./ProductSheetTemplate";

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Orzo Pasta & Roasted Red Pepper
export const productData = {
  id: 7,
  category: "Expanded Salad Reference",
  dishTitle: "Orzo Pasta & Roasted Red Pepper",
  sourcePage: "PDF pages 27, 30",
  shortDescription:
    "Flavourful short cut pasta dish. Delicious served hot or cold. Holds well for 2–3 days chilled. Great for patient or staff Grab & Go.",
  ingredients: [
    "250g Roast Red Peppers",
    "6 Tablespoon Olive Oil",
    "100g Pine Nuts",
    "500g Orzo Pasta",
    "1 tablespoon of Vegetable Bouillion (1 litre of stock approx)",
    "2 tsp of Garlic Puree",
    "250g Rocket",
    "100ml of cooking white wine",
  ],
  dressing: ["100g Fresh Basil", "½ Juice of Lemon", "Parmesan Cheese"],
  method: [
    "Heat a pan on a medium heat. Add olive oil and garlic. Cook for about 2–3 minutes then add the orzo pasta. Coat the pasta.",
  ],
  notes: [
    "The source PDF text for this method is truncated after “Coat the past…”. No extra method text has been invented.",
  ],
  packagingCode: "TBC - not provided in source PDF",
  label:
    "Expanded salad reference | Keep chilled ≤5°C | Verify supplier declarations before final labelling.",
  photo: "/images/orzo-red-pepper.svg",
  unitCost: "",
  unitSellingPrice: "",
  allergens: [
    "Expanded allergen reference page lists this product name only; detailed allergen ticks are not visible in extracted text. Verify supplier allergen declarations.",
  ],
};

export default function OrzoPastaAndRoastedRedPepperSheet({
  product = productData,
  updateProduct,
}) {
  return (
    <ProductSheetTemplate product={product} updateProduct={updateProduct} />
  );
}
