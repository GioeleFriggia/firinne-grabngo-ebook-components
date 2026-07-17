export const supplierInfo = {
  labelSupplier: {
    name: "Cafe Brands",
    codes: [
      "FIR001 – 49mm Round Label – 10,000 per Case",
      "FIR002 – 64mm Round Label – 6,000 per Case",
    ],
    email: "info@cafebrands.ie",
    website: "https://www.cafebrands.ie/software/",
  },
  packagingSupplier: {
    name: "Sysco",
  },
};

export const saladPackagingProducts = [
  {
    code: "5014567",
    item: "Round Black Paper Food Container 150 Series 24oz",
    packSize: "1x300 EA",
  },
  {
    code: "5014569",
    item: "Vegware Round Black Window Lid 150 Series",
    packSize: "1x300 EA",
  },
];

export function isSaladCategory(category) {
  return String(category ?? "")
    .trim()
    .toLowerCase()
    .includes("salad");
}
