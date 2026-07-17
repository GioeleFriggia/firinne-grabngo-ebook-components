$ErrorActionPreference = "Stop"

$packageRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$payloadRoot = Join-Path $packageRoot "payload"

function Test-FirinneProject([string]$path) {
  if ([string]::IsNullOrWhiteSpace($path)) {
    return $false
  }

  return (
    (Test-Path (Join-Path $path "package.json")) -and
    (Test-Path (Join-Path $path "src\App.jsx")) -and
    (Test-Path (Join-Path $path "src\productSheets"))
  )
}

$candidates = @(
  (Join-Path (Split-Path $packageRoot -Parent) "firinne-grabngo-ebook-components"),
  (Split-Path $packageRoot -Parent),
  "C:\Users\gioel\Desktop\firinne-grabngo-ebook-components"
)

$projectRoot = $null

foreach ($candidate in $candidates) {
  if (Test-FirinneProject $candidate) {
    $projectRoot = (Resolve-Path $candidate).Path
    break
  }
}

if (-not $projectRoot) {
  Write-Host ""
  Write-Host "Non ho trovato automaticamente il progetto." -ForegroundColor Yellow
  $manualPath = Read-Host "Incolla il percorso della cartella firinne-grabngo-ebook-components"

  if (Test-FirinneProject $manualPath) {
    $projectRoot = (Resolve-Path $manualPath).Path
  }
}

if (-not $projectRoot) {
  Write-Host ""
  Write-Host "ERRORE: la cartella selezionata non sembra essere il progetto Firinne." -ForegroundColor Red
  Write-Host "Deve contenere package.json, src\App.jsx e src\productSheets." -ForegroundColor Yellow
  exit 1
}

if (-not (Test-Path $payloadRoot)) {
  Write-Host "ERRORE: manca la cartella payload del pacchetto." -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host "Progetto trovato:" -ForegroundColor Cyan
Write-Host $projectRoot -ForegroundColor White
Write-Host ""

# Backup only the files that will be replaced.
$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupRoot = Join-Path $projectRoot "backup-performance-$timestamp"
New-Item -ItemType Directory -Path $backupRoot -Force | Out-Null

$filesToBackup = @(
  "src\App.jsx",
  "src\components\LiquidIntro.jsx",
  "src\components\ProductCard.jsx",
  "src\productSheets\ProductSheetTemplate.jsx",
  "src\css\AsianNoodlePhoto.css",
  "src\productSheets\AsianNoodleGrabAndGoSalad.jsx",
  "src\productSheets\BroccoliHazelnutTomatoAndFeta.jsx",
  "src\productSheets\GochujangRoastSalmonGrabAndGoLunch.jsx",
  "src\productSheets\MoroccanCouscousAndSweetPotatoGrabAndGoSalad.jsx",
  "src\productSheets\PeriPeriChickenGrabAndGoLunch.jsx",
  "src\productSheets\RedQuinoaBulgurAndBeetrootGrabAndGoSalad.jsx",
  "src\productSheets\RoastPotatoAndChorizoGrabAndGoSalad.jsx",
  "vercel.json"
)

foreach ($relativePath in $filesToBackup) {
  $source = Join-Path $projectRoot $relativePath

  if (Test-Path $source) {
    $destination = Join-Path $backupRoot $relativePath
    $destinationParent = Split-Path -Parent $destination
    New-Item -ItemType Directory -Path $destinationParent -Force | Out-Null
    Copy-Item $source $destination -Force
  }
}

Write-Host "Backup creato: $backupRoot" -ForegroundColor DarkGray

# Copy every optimized file into the project.
Copy-Item (Join-Path $payloadRoot "*") $projectRoot -Recurse -Force

# Remove accidental nested public directory and installer leftovers.
$pathsToRemove = @(
  "public\public",
  "public\README.txt",
  "public\install-product-photos.ps1",
  "apply-update.ps1"
)

foreach ($relativePath in $pathsToRemove) {
  $target = Join-Path $projectRoot $relativePath

  if (Test-Path $target) {
    Remove-Item $target -Recurse -Force
    Write-Host "Rimosso: $relativePath" -ForegroundColor DarkGray
  }
}

# Remove obsolete duplicate photos now replaced by WebP files.
$obsoleteImages = @(
  "public\images\Gochujang Roast Salmon Grab-and-Go Lunch.jpg",
  "public\images\asian-noodle.jpg",
  "public\images\asian-noodle-real.png",
  "public\images\broccoli-hazelnut-feta.jpg",
  "public\images\broccoli-hazelnut.jpg",
  "public\images\broccoli-hazelnut-tomato-feta.jpg",
  "public\images\gochujang-salmon.jpg",
  "public\images\gochujang-roast-salmon.jpg",
  "public\images\gochujang-roast-salmon-lunch.jpg",
  "public\images\moroccan-couscous-sweet-potato.jpg",
  "public\images\peri-peri-chicken.jpg",
  "public\images\peri-peri-chicken-lunch.jpg",
  "public\images\red-quinoa-bulgur-beetroot.jpg",
  "public\images\roast-potato-chorizo.jpg"
)

foreach ($relativePath in $obsoleteImages) {
  $target = Join-Path $projectRoot $relativePath

  if (Test-Path $target) {
    Remove-Item $target -Force
  }
}

Write-Host ""
Write-Host "Ottimizzazione installata correttamente." -ForegroundColor Green
Write-Host "Sono state aggiunte immagini WebP e miniature, lazy loading, cache Vercel e intro veloce." -ForegroundColor Green
Write-Host ""

Push-Location $projectRoot

try {
  if (Test-Path (Join-Path $projectRoot "node_modules")) {
    Write-Host "Controllo build in corso..." -ForegroundColor Cyan
    npm run build

    if ($LASTEXITCODE -ne 0) {
      Write-Host ""
      Write-Host "La copia dei file e completata, ma npm run build ha restituito un errore." -ForegroundColor Yellow
      Write-Host "Il backup si trova qui: $backupRoot" -ForegroundColor Yellow
      exit $LASTEXITCODE
    }

    Write-Host ""
    Write-Host "Build completata senza errori." -ForegroundColor Green
  }
  else {
    Write-Host "node_modules non trovato: il controllo build e stato saltato." -ForegroundColor Yellow
    Write-Host "Esegui npm install e poi npm run build." -ForegroundColor Yellow
  }
}
finally {
  Pop-Location
}

Write-Host ""
Write-Host "Ora puoi avviare il progetto con: npm run dev" -ForegroundColor Cyan
Write-Host "Poi fai il commit Git e il push su main." -ForegroundColor Cyan
