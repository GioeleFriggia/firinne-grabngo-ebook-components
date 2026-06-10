import { getProductSheetComponent } from '../productSheets';

export default function ProductDetail({ product, updateProduct }) {
  const ProductSheet = getProductSheetComponent(product.id);

  if (!ProductSheet) {
    return <div className="empty-state">Product sheet not found.</div>;
  }

  return <ProductSheet product={product} updateProduct={updateProduct} />;
}
