import { useEffect, useMemo, useState } from "react";
import {
  Euro,
  Package,
  Pencil,
  Printer,
  Save,
  ShieldAlert,
} from "lucide-react";
import { calculateMargin } from "../utils/pricing";
import {
  isSaladCategory,
  saladPackagingProducts,
  supplierInfo,
} from "../data/supplierInfo";
import "../css/ProductDetail.css";
import "../css/SupplierInfo.css";

function safeArray(items) {
  return Array.isArray(items) ? items : [];
}

function valueOrTbc(value) {
  return value === null || value === undefined || value === "" ? "TBC" : value;
}

function formatPrintDate() {
  return new Intl.DateTimeFormat("en-GB", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

function ListSection({ title, items, ordered = false }) {
  const list = safeArray(items);

  if (list.length === 0) return null;

  const Tag = ordered ? "ol" : "ul";

  return (
    <div className="sheet-section">
      <h2>{title}</h2>
      <Tag>
        {list.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </Tag>
    </div>
  );
}

function PrintListSection({ title, items, ordered = false }) {
  const list = safeArray(items);

  if (list.length === 0) return null;

  const Tag = ordered ? "ol" : "ul";

  return (
    <section className="print-card">
      <h2>{title}</h2>
      <Tag>
        {list.map((item, index) => (
          <li key={`print-${title}-${index}`}>{item}</li>
        ))}
      </Tag>
    </section>
  );
}

export default function ProductSheetTemplate({ product, updateProduct }) {
  const [draft, setDraft] = useState(product);

  useEffect(() => {
    setDraft(product);
  }, [product]);

  const margin = useMemo(() => {
    if (!draft) return null;
    return calculateMargin(draft.unitCost, draft.unitSellingPrice);
  }, [draft]);

  const printDate = useMemo(() => formatPrintDate(), []);

  if (!draft) return null;

  function updateField(field, value) {
    setDraft((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function saveChanges() {
    if (typeof updateProduct !== "function") return;

    updateProduct({
      ...draft,
      unitCost: draft.unitCost === "" ? "" : Number(draft.unitCost),
      unitSellingPrice:
        draft.unitSellingPrice === "" ? "" : Number(draft.unitSellingPrice),
    });
  }

  function handlePrint() {
    window.print();
  }

  const unitCostValue = valueOrTbc(draft.unitCost);
  const unitSellingPriceValue = valueOrTbc(draft.unitSellingPrice);
  const marginValue = margin === null ? "TBC" : `${margin}%`;
  const isSalad = isSaladCategory(draft.category);
  const packagingProducts = isSalad ? saladPackagingProducts : [];

  return (
    <article className="product-sheet">
      <div className="sheet-toolbar no-print">
        <span>
          <Pencil size={16} /> Editable demo sheet
        </span>

        <div>
          <button type="button" onClick={saveChanges}>
            <Save size={16} /> Save
          </button>

          <button type="button" onClick={handlePrint}>
            <Printer size={16} /> Print / PDF
          </button>
        </div>
      </div>

      <div className="screen-sheet">
        <section className="pdf-page pdf-page-one">
          <header className="sheet-header">
            <div>
              <p className="eyebrow small">{draft.category}</p>
              <h1>{draft.dishTitle}</h1>
              <p>{draft.shortDescription}</p>

              {draft.sourcePage && (
                <p className="source-note">Source: {draft.sourcePage}</p>
              )}
            </div>

            <div
              className="firinne-label-frame"
              aria-label={`${draft.dishTitle} photo frame`}
            >
              <div className="firinne-label-inner">
                <div className="firinne-label-brand">
                  <span>FÍRINNE</span>
                  <small>～ HONEST HEALTHY FOOD ～</small>
                </div>

                <div className="firinne-photo-box">
                  <img src={draft.photo} alt={draft.dishTitle} />
                </div>
              </div>
            </div>
          </header>

          <section className="sheet-grid main-grid">
            <ListSection title="Ingredients" items={draft.ingredients} />
            <ListSection title="Dressing" items={draft.dressing} />
            <ListSection title="Sauce" items={draft.sauce} />
            <ListSection title="Optional add-ins" items={draft.optionalAddIns} />
            <ListSection
              title="Protein method"
              items={draft.proteinMethod}
              ordered
            />
            <ListSection title="Build" items={draft.build} ordered />
            <ListSection title="Prep" items={draft.prep} />
            <ListSection title="Recipe / Method" items={draft.method} ordered />

            <div className="sheet-section allergen-box">
              <h2>
                <ShieldAlert size={18} /> Allergen information
              </h2>

              <div className="allergen-tags">
                {safeArray(draft.allergens).map((allergen, index) => (
                  <span key={`${allergen}-${index}`}>{allergen}</span>
                ))}
              </div>

              <p className="note">
                Verify final supplier allergen declarations before live
                production and labelling.
              </p>
            </div>
          </section>

          {safeArray(draft.notes).length > 0 && (
            <section className="sheet-section notes-box">
              <h2>Source notes</h2>
              <ul>
                {safeArray(draft.notes).map((note, index) => (
                  <li key={`note-${index}`}>{note}</li>
                ))}
              </ul>
            </section>
          )}
        </section>

        <section className="pdf-page pdf-page-two">
          <section className="sheet-grid bottom-grid">
            <div className="sheet-section packaging-box">
              <h2>
                <Package size={18} /> Suppliers & packaging
              </h2>

              <div className="supplier-details">
                <section className="supplier-card">
                  <h3>Label supplier</h3>
                  <strong className="supplier-name">
                    {supplierInfo.labelSupplier.name}
                  </strong>

                  <ul className="supplier-code-list">
                    {safeArray(supplierInfo.labelSupplier.codes).map((code) => (
                      <li key={code}>{code}</li>
                    ))}
                  </ul>

                  <div className="supplier-links">
                    <a href={`mailto:${supplierInfo.labelSupplier.email}`}>
                      {supplierInfo.labelSupplier.email}
                    </a>

                    <a
                      href={supplierInfo.labelSupplier.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cafe Brands software
                    </a>
                  </div>
                </section>

                <section className="supplier-card">
                  <h3>Packaging supplier</h3>
                  <strong className="supplier-name">
                    {supplierInfo.packagingSupplier.name}
                  </strong>

                  {isSalad && (
                    <ul className="supplier-code-list">
                      {packagingProducts.map((product) => (
                        <li key={product.code}>
                          <strong>{product.code}</strong> – {product.item}
                          {product.packSize ? ` – ${product.packSize}` : ""}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </div>
            </div>

            <div className="sheet-section costing-box">
              <h2>
                <Euro size={18} /> Costing information
              </h2>

              <section className="sheet-grid commercial-grid">
                <div className="info-tile">
                  <Euro size={20} />
                  <span>Unit cost</span>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="TBC"
                    value={draft.unitCost ?? ""}
                    onChange={(event) =>
                      updateField("unitCost", event.target.value)
                    }
                  />
                </div>

                <div className="info-tile">
                  <Euro size={20} />
                  <span>Unit selling price</span>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="TBC"
                    value={draft.unitSellingPrice ?? ""}
                    onChange={(event) =>
                      updateField("unitSellingPrice", event.target.value)
                    }
                  />
                </div>

                <div className="info-tile margin-tile">
                  <span>Margin %</span>
                  <strong>{marginValue}</strong>
                </div>
              </section>
            </div>
          </section>
        </section>
      </div>

      <div className="print-root">
        <section className="print-page">
          <header className="print-topbar">
            <span>{printDate}</span>
            <span>Firinne Grab n Go Range</span>
            <span />
          </header>

          <section className="print-hero">
            <div className="print-hero-text">
              <p className="print-category">{draft.category}</p>
              <h1>{draft.dishTitle}</h1>
              <p>{draft.shortDescription}</p>

              {draft.sourcePage && (
                <p className="print-source">Source: {draft.sourcePage}</p>
              )}
            </div>

            <div className="print-label-frame">
              <div className="print-label-inner">
                <div className="print-label-brand">
                  <span>FÍRINNE</span>
                  <small>~ HONEST HEALTHY FOOD ~</small>
                </div>

                <div className="print-photo-box">
                  <img src={draft.photo} alt={draft.dishTitle} />
                </div>
              </div>
            </div>
          </section>

          <section className="print-grid print-main-grid">
            <PrintListSection title="Ingredients" items={draft.ingredients} />
            <PrintListSection title="Dressing" items={draft.dressing} />
            <PrintListSection title="Sauce" items={draft.sauce} />
            <PrintListSection
              title="Optional add-ins"
              items={draft.optionalAddIns}
            />
            <PrintListSection
              title="Protein method"
              items={draft.proteinMethod}
              ordered
            />
            <PrintListSection title="Build" items={draft.build} ordered />
            <PrintListSection title="Prep" items={draft.prep} />
            <PrintListSection
              title="Recipe / Method"
              items={draft.method}
              ordered
            />

            <section className="print-card print-allergen-card">
              <h2>
                <ShieldAlert size={14} /> Allergen information
              </h2>

              <div className="print-allergen-tags">
                {safeArray(draft.allergens).map((allergen, index) => (
                  <span key={`print-allergen-${index}`}>{allergen}</span>
                ))}
              </div>

              <p className="print-note">
                Verify final supplier allergen declarations before live
                production and labelling.
              </p>
            </section>
          </section>
        </section>

        <section className="print-page">
          <header className="print-topbar">
            <span>{printDate}</span>
            <span>Firinne Grab n Go Range</span>
            <span />
          </header>

          <section className="print-grid print-second-grid">
            <section className="print-card print-packaging-card">
              <h2>
                <Package size={14} /> Suppliers & packaging
              </h2>

              <div className="print-supplier-grid">
                <div className="print-supplier-box">
                  <span>Label supplier</span>
                  <strong>{supplierInfo.labelSupplier.name}</strong>

                  <ul>
                    {safeArray(supplierInfo.labelSupplier.codes).map((code) => (
                      <li key={`print-${code}`}>{code}</li>
                    ))}
                  </ul>

                  <p className="print-supplier-contact">
                    {supplierInfo.labelSupplier.email}
                    <br />
                    {supplierInfo.labelSupplier.website}
                  </p>
                </div>

                <div className="print-supplier-box">
                  <span>Packaging supplier</span>
                  <strong>{supplierInfo.packagingSupplier.name}</strong>

                  {isSalad && (
                    <ul>
                      {packagingProducts.map((product) => (
                        <li key={`print-packaging-${product.code}`}>
                          <strong>{product.code}</strong> – {product.item}
                          {product.packSize ? ` – ${product.packSize}` : ""}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>

            <section className="print-card print-costing-card">
              <h2>
                <Euro size={14} /> Costing information
              </h2>

              <div className="print-cost-grid">
                <div className="print-cost-box">
                  <Euro size={18} />
                  <span>Unit cost</span>
                  <strong>{unitCostValue}</strong>
                </div>

                <div className="print-cost-box">
                  <Euro size={18} />
                  <span>Unit selling price</span>
                  <strong>{unitSellingPriceValue}</strong>
                </div>

                <div className="print-margin-box">
                  <span>Margin %</span>
                  <strong>{marginValue}</strong>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    </article>
  );
}
