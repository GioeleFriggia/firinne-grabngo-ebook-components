import { calculateMargin, formatCurrency } from '../utils/pricing';

export default function ProductCard({ product, isSelected, onSelect }) {
  const margin = calculateMargin(product.unitCost, product.unitSellingPrice);

  return (
    <button className={`product-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <img src={product.photo} alt={product.dishTitle} />
      <div>
        <span>{product.category}</span>
        <strong>{product.dishTitle}</strong>
        <small>{formatCurrency(product.unitSellingPrice)} • {margin === null ? 'Margin TBC' : `${margin}% margin`}</small>
      </div>
    </button>
  );
}
