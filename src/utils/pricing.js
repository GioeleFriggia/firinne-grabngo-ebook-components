export function calculateMargin(unitCost, unitSellingPrice) {
  const cost = Number(unitCost);
  const price = Number(unitSellingPrice);

  if (!unitCost || !unitSellingPrice || !price || Number.isNaN(cost) || Number.isNaN(price)) {
    return null;
  }

  return Math.round(((price - cost) / price) * 100);
}

export function formatCurrency(value) {
  if (value === '' || value === null || value === undefined || Number.isNaN(Number(value))) {
    return 'TBC';
  }
  return `€${Number(value).toFixed(2)}`;
}
