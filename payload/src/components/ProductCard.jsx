import { calculateMargin, formatCurrency } from "../utils/pricing";

export default function ProductCard({ product, isSelected, onSelect }) {
  const margin = calculateMargin(product.unitCost, product.unitSellingPrice);
  const imageSource = product.thumbnail || product.photo;

  function handleImageError(event) {
    const image = event.currentTarget;

    if (!image.dataset.fallbackApplied && product.photo !== imageSource) {
      image.dataset.fallbackApplied = "true";
      image.src = product.photo;
    }
  }

  return (
    <button
      className={`product-card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <img
        className={product.thumbnail ? "real-product-photo" : ""}
        src={imageSource}
        alt={product.dishTitle}
        loading={isSelected ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={isSelected ? "high" : "low"}
        width="84"
        height="84"
        sizes="84px"
        onError={handleImageError}
      />

      <div>
        <span>{product.category}</span>
        <strong>{product.dishTitle}</strong>
        <small>
          {formatCurrency(product.unitSellingPrice)} •{" "}
          {margin === null ? "Margin TBC" : `${margin}% margin`}
        </small>
      </div>
    </button>
  );
}
