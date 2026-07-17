$ErrorActionPreference = "Stop"

$repoRoot = (Get-Location).Path
$packageRoot = $PSScriptRoot

if (-not (Test-Path (Join-Path $repoRoot "package.json")) -or
    -not (Test-Path (Join-Path $repoRoot "src\productSheets"))) {
    throw "Apri PowerShell nella cartella principale della repository prima di eseguire questo script."
}

$imageSource = Join-Path $packageRoot "public\images"
$imageTarget = Join-Path $repoRoot "public\images"

New-Item -ItemType Directory -Path $imageTarget -Force | Out-Null
Copy-Item -Path (Join-Path $imageSource "*") -Destination $imageTarget -Force

$updates = @(
    @{
        File = "src\productSheets\BroccoliHazelnutTomatoAndFeta.jsx"
        Old  = 'photo: "/images/product-photo-pending.svg"'
        New  = 'photo: "/images/broccoli-hazelnut-tomato-feta.jpg"'
    },
    @{
        File = "src\productSheets\GochujangRoastSalmonGrabAndGoLunch.jsx"
        Old  = '"photo": "/images/product-photo-pending.svg"'
        New  = '"photo": "/images/gochujang-roast-salmon-lunch.jpg"'
    },
    @{
        File = "src\productSheets\MoroccanCouscousAndSweetPotatoGrabAndGoSalad.jsx"
        Old  = 'photo: "/images/product-photo-pending.svg"'
        New  = 'photo: "/images/moroccan-couscous-sweet-potato.jpg"'
    },
    @{
        File = "src\productSheets\PeriPeriChickenGrabAndGoLunch.jsx"
        Old  = '"photo": "/images/product-photo-pending.svg"'
        New  = '"photo": "/images/peri-peri-chicken-lunch.jpg"'
    },
    @{
        File = "src\productSheets\RedQuinoaBulgurAndBeetrootGrabAndGoSalad.jsx"
        Old  = 'photo: "/images/product-photo-pending.svg"'
        New  = 'photo: "/images/red-quinoa-bulgur-beetroot.jpg"'
    },
    @{
        File = "src\productSheets\RoastPotatoAndChorizoGrabAndGoSalad.jsx"
        Old  = 'photo: "/images/product-photo-pending.svg"'
        New  = 'photo: "/images/roast-potato-chorizo.jpg"'
    }
)

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

foreach ($update in $updates) {
    $filePath = Join-Path $repoRoot $update.File

    if (-not (Test-Path $filePath)) {
        throw "File non trovato: $($update.File)"
    }

    $content = [System.IO.File]::ReadAllText($filePath)

    if ($content.Contains($update.New)) {
        Write-Host "Gia aggiornato: $($update.File)" -ForegroundColor Yellow
        continue
    }

    if (-not $content.Contains($update.Old)) {
        throw "Non trovo il testo da sostituire in: $($update.File)"
    }

    $updatedContent = $content.Replace($update.Old, $update.New)
    [System.IO.File]::WriteAllText($filePath, $updatedContent, $utf8NoBom)
    Write-Host "Aggiornato: $($update.File)" -ForegroundColor Green
}

Write-Host ""
Write-Host "Le 7 foto sono state copiate e collegate alle rispettive schede." -ForegroundColor Green
Write-Host "Ora esegui:" -ForegroundColor Cyan
Write-Host 'git add public/images src/productSheets'
Write-Host 'git commit -m "Aggiunte nuove foto prodotti Grab and Go"'
Write-Host 'git pull --rebase origin main'
Write-Host 'git push origin main'
