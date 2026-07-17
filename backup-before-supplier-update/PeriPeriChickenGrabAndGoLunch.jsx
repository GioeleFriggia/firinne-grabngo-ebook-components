import ProductSheetTemplate from "./ProductSheetTemplate";

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Peri–Peri Chicken Grab-and-Go Lunch
export const productData = {
  id: 16,
  category: "Protein Lunch Boxes",
  dishTitle: "Peri–Peri Chicken Grab-and-Go Lunch",
  sourcePage: "PDF pages 10, 12, 18",
  shortDescription:
    "Protein lunch box with Peri–Peri Chicken Breast, three salads and Peri–Peri Mayo.",
  ingredients: [
    "Peri–Peri Chicken Breast",
    "Roast Potato & Chorizo",
    "Broccoli, Hazelnut & Feta",
    "Carrot & Seed Salad",
    "Peri–Peri Mayo",
  ],
  sauce: ["Peri–Peri Mayo"],
  proteinMethod: ["Coat 2–3 tbsp peri–peri.", "Bake 200°C 18–20 min.", "Cool."],
  method: [
    "Assemble the protein with listed salads and sauce, then label and chill ≤5°C.",
  ],
  photo: "/images/peri-peri-chicken.jpg",
  unitCost: "",
  unitSellingPrice: "",
  allergens: [
    "Contains: Milk — mayo; feta",
    "Contains: Egg — mayo",
    "Contains: Sulphites — chorizo/vinegar",
    "Contains: Sesame — carrot salad",
    "Optional/May contain: Tree nuts",
  ],
};

export default function PeriPeriChickenGrabAndGoLunchSheet({
  product = productData,
  updateProduct,
}) {
  return (
    <ProductSheetTemplate product={product} updateProduct={updateProduct} />
  );
}


