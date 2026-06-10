import ProductSheetTemplate from "./ProductSheetTemplate";

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Red Quinoa, Bulgur & Beetroot Grab-and-Go Salad
export const productData = {
  id: 1,
  category: "Salads",
  dishTitle: "Red Quinoa, Bulgur & Beetroot Grab-and-Go Salad",
  sourcePage: "PDF pages 4, 5, 13",
  shortDescription:
    "A robust, flavour-packed salad that holds up well for 2–3 days chilled. Ideal for patient or staff Grab & Go.",
  ingredients: [
    "300g red quinoa, rinsed",
    "300g bulgur wheat",
    "600ml water or light vegetable stock",
    "350g cooked beetroot, diced",
    "1 medium carrot, grated or julienned",
    "1 small red cheese crumbled",

    "60g toasted pumpkin seeds",
    "Handful fresh parsley, chopped",
    "Handful fresh mint, chopped",
  ],
  dressing: [
    "70ml extra virgin olive oil",
    "25ml lemon juice",
    "15ml cider vinegar",
    "1 tbsp honey",
    "1 tsp Dijon mustard",
    "½ tsp ground cumin",
    "½ tsp salt",
    "Black pepper",
  ],
  method: [
    "Cook quinoa and bulgur, then let cool completely.",
    "Combine quinoa, bulgur, beetroot, carrot, onion, cucumber, herbs, and seeds.",
    "Whisk dressing ingredients together.",
    "Pour dressing over salad; mix gently.",
  ],
  photo: "/images/product-photo-pending.svg",
  unitCost: "",
  unitSellingPrice: "",
  allergens: [
    "Contains: Gluten (wheat) — bulgur",
    "Optional/May contain: Milk — feta optional",
    "Optional/May contain: Tree nuts — optional",
    "Optional/May contain: Sesame — if seeds added",
    "Optional/May contain: Mustard — Dijon",
    "Optional/May contain: Sulphites — vinegars may contain",
  ],
};

export default function RedQuinoaBulgurAndBeetrootGrabAndGoSaladSheet({
  product = productData,
  updateProduct,
}) {
  return (
    <ProductSheetTemplate product={product} updateProduct={updateProduct} />
  );
}
