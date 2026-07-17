import ProductSheetTemplate from "./ProductSheetTemplate";

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Broccoli, Hazelnut, Tomato & Feta
export const productData = {
  id: 2,
  category: "Salads",
  dishTitle: "Broccoli, Hazelnut, Tomato & Feta",
  sourcePage: "PDF pages 4, 13",
  shortDescription: "Concise salad card from the PDF source material.",
  ingredients: ["Broccoli blanched", "Cherry tomatoes", "Hazelnuts", "Feta"],
  dressing: [
    "Olive oil",
    "Lemon",
    "Red wine vinegar",
    "Honey",
    "Dijon",
    "Salt & pepper",
  ],
  method: ["Combine.", "Dress.", "Add feta last."],
  photo: "/images/broccoli-hazelnut-feta.jpg",
  unitCost: "",
  unitSellingPrice: "",
  allergens: [
    "Contains: Milk — feta",
    "Contains: Tree nuts — hazelnuts",
    "Optional/May contain: Sesame — if seeds",
    "Optional/May contain: Mustard — Dijon",
    "Optional/May contain: Sulphites — red wine vinegar may contain",
  ],
};

export default function BroccoliHazelnutTomatoAndFetaSheet({
  product = productData,
  updateProduct,
}) {
  return (
    <ProductSheetTemplate product={product} updateProduct={updateProduct} />
  );
}


