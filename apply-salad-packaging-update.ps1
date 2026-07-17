$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectRoot

$templatePath = ".\src\productSheets\ProductSheetTemplate.jsx"
$supplierPath = ".\src\data\supplierInfo.js"

if (-not (Test-Path $templatePath)) {
  throw "Estrai lo ZIP direttamente nella cartella principale del progetto."
}

New-Item -ItemType Directory -Force -Path ".\src\data" | Out-Null
New-Item -ItemType Directory -Force -Path ".\backup-before-salad-packaging" | Out-Null
Copy-Item $templatePath ".\backup-before-salad-packaging\ProductSheetTemplate.jsx" -Force
if (Test-Path $supplierPath) {
  Copy-Item $supplierPath ".\backup-before-salad-packaging\supplierInfo.js" -Force
}
Copy-Item ".\update-files\supplierInfo.js" $supplierPath -Force

$content = Get-Content $templatePath -Raw -Encoding UTF8
$content = $content -replace 'import \{\s*supplierInfo\s*\} from "\.\./data/supplierInfo";', 'import { getPackagingCodes, supplierInfo } from "../data/supplierInfo";'

if ($content -notmatch 'const packagingCodes = getPackagingCodes') {
  $content = $content.Replace(
    'const marginValue = margin === null ? "TBC" : `${margin}%`;',
    'const marginValue = margin === null ? "TBC" : `${margin}%`;`r`n  const packagingCodes = getPackagingCodes(draft.category);'
  )
}

$oldScreen = @'
                <section className="supplier-card">
                  <h3>Packaging supplier</h3>
                  <strong className="supplier-name">
                    {supplierInfo.packagingSupplier.name}
                  </strong>
                </section>
'@

$newScreen = @'
                <section className="supplier-card">
                  <h3>Packaging supplier</h3>
                  <strong className="supplier-name">
                    {supplierInfo.packagingSupplier.name}
                  </strong>

                  {packagingCodes.length > 0 && (
                    <ul className="supplier-code-list">
                      {packagingCodes.map((packaging) => (
                        <li key={packaging.code}>
                          <strong>{packaging.code}</strong> – {packaging.item}
                          {packaging.packSize && ` – ${packaging.packSize}`}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
'@

if ($content.Contains($oldScreen)) {
  $content = $content.Replace($oldScreen, $newScreen)
}

$oldPrint = @'
                <div className="print-supplier-box">
                  <span>Packaging supplier</span>
                  <strong>{supplierInfo.packagingSupplier.name}</strong>
                </div>
'@

$newPrint = @'
                <div className="print-supplier-box">
                  <span>Packaging supplier</span>
                  <strong>{supplierInfo.packagingSupplier.name}</strong>

                  {packagingCodes.length > 0 && (
                    <ul>
                      {packagingCodes.map((packaging) => (
                        <li key={`print-packaging-${packaging.code}`}>
                          <strong>{packaging.code}</strong> – {packaging.item}
                          {packaging.packSize && ` – ${packaging.packSize}`}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
'@

if ($content.Contains($oldPrint)) {
  $content = $content.Replace($oldPrint, $newPrint)
}

Set-Content $templatePath -Value $content -Encoding UTF8

Write-Host ""
Write-Host "Aggiornamento completato." -ForegroundColor Green
Write-Host "I codici 5014567 e 5014569 sono stati aggiunti solo alle Salads."
Write-Host "Ora esegui: npm run dev" -ForegroundColor Cyan
