$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$productsFile = Join-Path $projectRoot "src\data\products.js"

if (-not (Test-Path $productsFile)) {
  Write-Host "ERRORE: estrai il contenuto dello ZIP direttamente nella cartella principale del progetto." -ForegroundColor Red
  Write-Host "Deve esistere: src\data\products.js" -ForegroundColor Yellow
  exit 1
}

$content = Get-Content $productsFile -Raw -Encoding UTF8

$replacements = [ordered]@{
  "/images/red-quinoa.svg" = "/images/red-quinoa-bulgur-beetroot.jpg"
  "/images/broccoli-hazelnut.svg" = "/images/broccoli-hazelnut-feta.jpg"
  "/images/asian-noodle.svg" = "/images/asian-noodle.jpg"
  "/images/asian-noodle-real.png" = "/images/asian-noodle.jpg"
  "/images/moroccan-couscous.svg" = "/images/moroccan-couscous-sweet-potato.jpg"
  "/images/potato-chorizo.svg" = "/images/roast-potato-chorizo.jpg"
  "/images/salmon-box.svg" = "/images/gochujang-salmon.jpg"
  "/images/peri-peri-box.svg" = "/images/peri-peri-chicken.jpg"
}

$changed = 0
foreach ($old in $replacements.Keys) {
  if ($content.Contains($old)) {
    $content = $content.Replace($old, $replacements[$old])
    $changed++
    Write-Host "Sostituito: $old" -ForegroundColor Green
  }
}

Set-Content -Path $productsFile -Value $content -Encoding UTF8

Write-Host ""
Write-Host "Aggiornamento completato. Sostituzioni eseguite: $changed" -ForegroundColor Cyan
Write-Host "Ora esegui: npm run dev" -ForegroundColor Cyan
