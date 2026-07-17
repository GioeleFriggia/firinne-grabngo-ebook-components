import ProductSheetTemplate from "./ProductSheetTemplate";

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Asian Noodle Grab-and-Go Salad
export const productData = {
  id: 4,
  category: "Salads",
  dishTitle: "Asian Noodle Grab-and-Go Salad",
  sourcePage: "PDF pages 4, 7, 14",
  shortDescription:
    "A vibrant, aromatic noodle salad with crunch, freshness, and colour that holds up well for 2–3 chilled. Well-suited for patient or staff Grab & Go.",
  ingredients: [
    "400g cooked noodles (rice noodles or egg noodles work best)",
    "1 red pepper, thinly sliced",
    "1 yellow pepper, thinly sliced",
    "1 green pepper, thinly sliced",
    "1 small red onion, thinly sliced",
    "2 carrots, julienned",

    "2 spring onions, sliced",
    "Handful fresh coriander, chopped",
    "Handful fresh mint, chopped",
    "2 tbsp toasted sesame seeds",
  ],
  dressing: [
    "60ml soy sauce",
    "40ml rice vinegar",
    "20ml sesame oil",
    "1 tbsp vegetable oil",
    "1 tbsp honey or brown sugar",
    "1 garlic clove, minced",
    "1 tsp grated fresh ginger",
    "1 tsp chilli flakes",
  ],
  method: [
    "Cook noodles, drain, rinse under cold water, then toss in a little oil.",
    "Combine noodles, vegetables, herbs, and seeds.",
    "Whisk together soy sauce, rice vinegar, oils, honey, garlic, ginger, and chilli.",
    "Pour dressing over salad and mix thoroughly.",
  ],
  photo: "/images/asian-noodle.jpg",
  unitCost: "",
  unitSellingPrice: "",
  allergens: [
    "Contains: Sesame — oil/seeds",
    "Contains: Soy — soy sauce",
    "Optional/May contain: Gluten (wheat) — possible in soy/noodles",
    "Optional/May contain: Egg — if egg noodles",
    "Optional/May contain: Peanuts — optional",
    "Optional/May contain: Tree nuts — optional",
    "Optional/May contain: Mustard",
    "Optional/May contain: Sulphites",
  ],
};

export default function AsianNoodleGrabAndGoSaladSheet({
  product = productData,
  updateProduct,
}) {
  return (
    <ProductSheetTemplate product={product} updateProduct={updateProduct} />
  );
}


