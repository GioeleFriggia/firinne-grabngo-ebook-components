import ProductSheetTemplate from "./ProductSheetTemplate";

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Gochujang Roast Salmon Grab-and-Go Lunch
export const productData = {
  id: 14,
  category: "Protein Lunch Boxes",
  dishTitle: "Gochujang Roast Salmon Grab-and-Go Lunch",
  sourcePage: "PDF pages 10, 12, 17",
  shortDescription:
    "Protein lunch box with Gochujang Roast Salmon, three salads and Gochujang Lime Mayo.",
  ingredients: [
    "Gochujang Roast Salmon",
    "Asian Noodle Salad",
    "Carrot & Seed Salad",
    "Broccoli, Hazelnut & Feta",
    "Gochujang Lime Mayo",
  ],
  sauce: ["Gochujang Lime Mayo"],
  proteinMethod: [
    "Mix 1 tbsp gochujang + 1 tsp honey + 1 tsp lime; brush.",
    "Bake 180°C 10–12 min.",
    "Cool gently.",
  ],
  method: [
    "Assemble the protein with listed salads and sauce, then label and chill ≤5°C.",
  ],
  photo: "/images/Gochujang Roast Salmon Grab-and-Go Lunch.jpg",
  unitCost: "",
  unitSellingPrice: "",
  allergens: [
    "Contains: Fish — salmon",
    "Contains: Milk — mayo; feta in salad",
    "Contains: Sesame — oil/seeds",
    "Contains: Soy — gochujang",
    "Optional/May contain: Tree nuts",
    "Optional/May contain: Mustard",
    "Optional/May contain: Sulphites",
  ],
};

export default function GochujangRoastSalmonGrabAndGoLunchSheet({
  product = productData,
  updateProduct,
}) {
  return (
    <ProductSheetTemplate product={product} updateProduct={updateProduct} />
  );
}
