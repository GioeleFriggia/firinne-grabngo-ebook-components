import ProductSheetTemplate from "./ProductSheetTemplate";

// Modifica qui i testi di questo prodotto.
// Questo file controlla solo la scheda: Roast Potato & Chorizo Grab-and-Go Salad
export const productData = {
  id: 6,
  category: "Salads",
  dishTitle: "Roast Potato & Chorizo Grab-and-Go Salad",
  sourcePage: "PDF pages 4, 9, 15",
  shortDescription:
    "A warm, smoky salad with vibrant colours and Mediterranean flavours that holds up well for 2–3 days. Perfect for patient or staff Grab & Go.",
  ingredients: [
    "800g baby potatoes, halved",
    "200g chorizo, sliced",
    "1 red pepper, diced",
    "1 yellow pepper, diced",
    "1 small red onion, finely sliced",
    "Handful fresh parsley, chopped",
  ],
  dressing: [
    "3 tbsp olive oil",
    "1½ tbsp red wine vinegar",
    "1 tsp honey",
    "½ tsp smoked paprika",
    "½ tsp Dijon mustard",
    "Salt and pepper",
  ],
  method: [
    "Toss potatoes with olive oil, salt, and pepper. Scatter chorizo on top.",
    "Roast at 200°C for 25–30 min, turning once.",
    "Combine potatoes, chorizo, peppers, onion, parsley, and nuts/seeds.",
    "Whisk dressing to salad.",
  ],
  photo: "/images/roast-potato-chorizo.jpg",
  unitCost: "",
  unitSellingPrice: "",
  allergens: [
    "Optional/May contain: Milk — if dairy added",
    "Optional/May contain: Tree nuts",
    "Optional/May contain: Sesame — if seeds",
    "Optional/May contain: Mustard — in dressing",
    "Optional/May contain: Sulphites — chorizo/vinegars",
  ],
};

export default function RoastPotatoAndChorizoGrabAndGoSaladSheet({
  product = productData,
  updateProduct,
}) {
  return (
    <ProductSheetTemplate product={product} updateProduct={updateProduct} />
  );
}



