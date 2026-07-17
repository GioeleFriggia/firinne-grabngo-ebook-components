$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectRoot

Write-Host ""
Write-Host "Aggiornamento eBook Firinne..." -ForegroundColor Cyan

$required = @(
  ".\src\productSheets\ProductSheetTemplate.jsx",
  ".\src\productSheets"
)

foreach ($item in $required) {
  if (-not (Test-Path $item)) {
    throw "Cartella progetto non riconosciuta. Estrai il contenuto dello ZIP direttamente dentro la cartella firinne-grabngo-ebook-components."
  }
}

# Backup dei file che verranno modificati
$backupFolder = ".\backup-before-supplier-update"
New-Item -ItemType Directory -Force -Path $backupFolder | Out-Null
Copy-Item ".\src\productSheets\ProductSheetTemplate.jsx" "$backupFolder\ProductSheetTemplate.jsx" -Force

# Copia nuovi file condivisi e fotografie
New-Item -ItemType Directory -Force -Path ".\src\data" | Out-Null
New-Item -ItemType Directory -Force -Path ".\src\css" | Out-Null
New-Item -ItemType Directory -Force -Path ".\public\images" | Out-Null

Copy-Item ".\update-files\src\data\supplierInfo.js" ".\src\data\supplierInfo.js" -Force
Copy-Item ".\update-files\src\css\SupplierInfo.css" ".\src\css\SupplierInfo.css" -Force
Copy-Item ".\update-files\public\images\*.jpg" ".\public\images\" -Force

$templatePath = ".\src\productSheets\ProductSheetTemplate.jsx"
$content = Get-Content $templatePath -Raw -Encoding UTF8

# Aggiunge gli import una sola volta
if ($content -notmatch 'supplierInfo') {
  $content = $content.Replace(
    'import { calculateMargin } from "../utils/pricing";',
    "import { calculateMargin } from `"../utils/pricing`";`r`nimport { supplierInfo } from `"../data/supplierInfo`";"
  )
}

if ($content -notmatch 'SupplierInfo\.css') {
  $content = $content.Replace(
    'import "../css/ProductDetail.css";',
    "import `"../css/ProductDetail.css`";`r`nimport `"../css/SupplierInfo.css`";"
  )
}

$screenSupplier = @'
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
                    {supplierInfo.labelSupplier.codes.map((code) => (
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
                </section>
              </div>
            </div>
'@

$screenPattern = '(?s)            <div className="sheet-section packaging-box">.*?            </div>\r?\n\r?\n            <div className="sheet-section costing-box">'
$screenReplacement = $screenSupplier + "`r`n            <div className=`"sheet-section costing-box`">"
$newContent = [regex]::Replace($content, $screenPattern, $screenReplacement, 1)

if ($newContent -eq $content -and $content -notmatch 'Suppliers & packaging') {
  throw "Non sono riuscito a trovare la sezione packaging nella visualizzazione normale."
}
$content = $newContent

$printSupplier = @'
            <section className="print-card print-packaging-card">
              <h2>
                <Package size={14} /> Suppliers & packaging
              </h2>

              <div className="print-supplier-grid">
                <div className="print-supplier-box">
                  <span>Label supplier</span>
                  <strong>{supplierInfo.labelSupplier.name}</strong>

                  <ul>
                    {supplierInfo.labelSupplier.codes.map((code) => (
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
                </div>
              </div>
            </section>
'@

$printPattern = '(?s)            <section className="print-card print-packaging-card">.*?            </section>\r?\n\r?\n            <section className="print-card print-costing-card">'
$printReplacement = $printSupplier + "`r`n            <section className=`"print-card print-costing-card`">"
$newContent = [regex]::Replace($content, $printPattern, $printReplacement, 1)

if ($newContent -eq $content -and $content -notmatch 'print-supplier-grid') {
  throw "Non sono riuscito a trovare la sezione packaging nella versione di stampa."
}
$content = $newContent

Set-Content $templatePath -Value $content -Encoding UTF8

# Aggiorna le sette fotografie nei veri file delle schede prodotto
$photoUpdates = @{
  "RedQuinoaBulgurAndBeetrootGrabAndGoSalad.jsx" = "/images/red-quinoa-bulgur-beetroot.jpg"
  "BroccoliHazelnutTomatoAndFeta.jsx" = "/images/broccoli-hazelnut-feta.jpg"
  "AsianNoodleGrabAndGoSalad.jsx" = "/images/asian-noodle.jpg"
  "MoroccanCouscousAndSweetPotatoGrabAndGoSalad.jsx" = "/images/moroccan-couscous-sweet-potato.jpg"
  "RoastPotatoAndChorizoGrabAndGoSalad.jsx" = "/images/roast-potato-chorizo.jpg"
  "GochujangRoastSalmonGrabAndGoLunch.jsx" = "/images/gochujang-salmon.jpg"
  "PeriPeriChickenGrabAndGoLunch.jsx" = "/images/peri-peri-chicken.jpg"
}

foreach ($fileName in $photoUpdates.Keys) {
  $path = Join-Path ".\src\productSheets" $fileName
  if (-not (Test-Path $path)) {
    Write-Warning "File non trovato: $path"
    continue
  }

  Copy-Item $path (Join-Path $backupFolder $fileName) -Force
  $sheet = Get-Content $path -Raw -Encoding UTF8
  $newPhoto = $photoUpdates[$fileName]
  $sheet = [regex]::Replace(
    $sheet,
    'photo:\s*["''][^"'']+["'']',
    ('photo: "' + $newPhoto + '"'),
    1
  )
  Set-Content $path -Value $sheet -Encoding UTF8
}

Write-Host ""
Write-Host "Aggiornamento completato." -ForegroundColor Green
Write-Host "Sono stati aggiunti:" -ForegroundColor Green
Write-Host "- Cafe Brands come label supplier"
Write-Host "- codici FIR001 e FIR002"
Write-Host "- email e sito Cafe Brands"
Write-Host "- Sysco come packaging supplier"
Write-Host "- le 7 fotografie reali"
Write-Host "- sezione fornitori anche nella stampa/PDF"
Write-Host ""
Write-Host "Ora esegui: npm run dev" -ForegroundColor Cyan
