import { useEffect, useState } from 'react';
import { Euro, Package, Pencil, Printer, Save, ShieldAlert } from 'lucide-react';
import { calculateMargin } from '../utils/pricing';
import '../css/ProductDetail.css';

function ListSection({ title, items, ordered = false }) {
  if (!items || items.length === 0) return null;
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <div className="sheet-section">
      <h2>{title}</h2>
      <Tag>
        {items.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </Tag>
    </div>
  );
}

export default function ProductSheetTemplate({ product, updateProduct }) {
  const [draft, setDraft] = useState(product);
  const margin = calculateMargin(draft.unitCost, draft.unitSellingPrice);

  useEffect(() => {
    setDraft(product);
  }, [product]);

  function updateField(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function saveChanges() {
    updateProduct({
      ...draft,
      unitCost: draft.unitCost === '' ? '' : Number(draft.unitCost),
      unitSellingPrice: draft.unitSellingPrice === '' ? '' : Number(draft.unitSellingPrice)
    });
  }

  return (
    <article className="product-sheet">
      <div className="sheet-toolbar no-print">
        <span><Pencil size={16} /> Editable demo sheet</span>
        <div>
          <button onClick={saveChanges}><Save size={16} /> Save</button>
          <button onClick={() => window.print()}><Printer size={16} /> Print / PDF</button>
        </div>
      </div>

      <header className="sheet-header">
        <div>
          <p className="eyebrow small">{draft.category}</p>
          <h1>{draft.dishTitle}</h1>
          <p>{draft.shortDescription}</p>
          {draft.sourcePage && <p className="source-note">Source: {draft.sourcePage}</p>}
        </div>
        <div className="firinne-label-frame" aria-label={`${draft.dishTitle} photo frame`}>
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

      <section className="sheet-grid commercial-grid">
        <div className="info-tile">
          <Euro size={20} />
          <span>Unit cost</span>
          <input type="number" step="0.01" placeholder="TBC" value={draft.unitCost} onChange={(event) => updateField('unitCost', event.target.value)} />
        </div>
        <div className="info-tile">
          <Euro size={20} />
          <span>Unit selling price</span>
          <input type="number" step="0.01" placeholder="TBC" value={draft.unitSellingPrice} onChange={(event) => updateField('unitSellingPrice', event.target.value)} />
        </div>
        <div className="info-tile margin-tile">
          <span>Margin %</span>
          <strong>{margin === null ? 'TBC' : `${margin}%`}</strong>
        </div>
      </section>

      <section className="sheet-grid main-grid">
        <ListSection title="Ingredients" items={draft.ingredients} />
        <ListSection title="Dressing" items={draft.dressing} />
        <ListSection title="Sauce" items={draft.sauce} />
        <ListSection title="Optional add-ins" items={draft.optionalAddIns} />
        <ListSection title="Protein method" items={draft.proteinMethod} ordered />
        <ListSection title="Build" items={draft.build} ordered />
        <ListSection title="Prep" items={draft.prep} />
        <ListSection title="Recipe / Method" items={draft.method} ordered />
      </section>

      {draft.notes?.length > 0 && (
        <section className="sheet-section notes-box">
          <h2>Source notes</h2>
          <ul>{draft.notes.map((note, index) => <li key={`note-${index}`}>{note}</li>)}</ul>
        </section>
      )}

      <section className="sheet-grid bottom-grid">
        <div className="sheet-section packaging-box">
          <h2><Package size={18} /> Packaging codes and label</h2>

          <div className="packaging-status">
            <span>Packaging code</span>
            <strong>Pending confirmation</strong>
          </div>

          <div className="packaging-status">
            <span>Label text</span>
            <strong>Pending confirmation</strong>
          </div>

          <div className="label-reference">
            <p className="reference-title">Reference data available:</p>
            <p>Dish title, ingredients, allergens and sauce/dressing information are available from the source material.</p>
          </div>

          <div className="example-label">
            <span>Example format only</span>
            <p>Protein Lunch Box | Keep chilled ≤5°C | Sauce pot included | Verify supplier declarations before final labelling.</p>
          </div>
        </div>

        <div className="sheet-section allergen-box">
          <h2><ShieldAlert size={18} /> Allergen information</h2>
          <div className="allergen-tags">
            {draft.allergens.map((allergen, index) => <span key={`${allergen}-${index}`}>{allergen}</span>)}
          </div>
          <p className="note">Verify final supplier allergen declarations before live production and labelling.</p>
        </div>
      </section>
    </article>
  );
}
