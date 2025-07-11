# PowerShell script to fix deployment issues

Write-Host "🔧 Starting deployment fixes..." -ForegroundColor Green

# Fix CSS autoprefixer warnings
Write-Host "📝 Fixing CSS autoprefixer warnings..." -ForegroundColor Yellow
$cssContent = Get-Content "src/app/globals.css" -Raw
$cssContent = $cssContent -replace 'align-items:\s*start;', 'align-items: flex-start;'
$cssContent = $cssContent -replace 'justify-content:\s*start;', 'justify-content: flex-start;'
Set-Content "src/app/globals.css" $cssContent
Write-Host "✅ CSS autoprefixer warnings fixed!" -ForegroundColor Green

# Fix component naming issues
Write-Host "📝 Fixing component naming issues..." -ForegroundColor Yellow

# Fix about-us page
$aboutContent = Get-Content "src/app/about-us/page.js" -Raw
$aboutContent = $aboutContent -replace 'function page\(\)', 'function Page()'
$aboutContent = $aboutContent -replace 'export default page;', 'export default Page;'
Set-Content "src/app/about-us/page.js" $aboutContent
Write-Host "✅ Fixed about-us page component naming" -ForegroundColor Green

# Fix unescaped entities in about-us page
$aboutContent = $aboutContent -replace "Cynergy Studios'", "Cynergy Studios&apos;"
$aboutContent = $aboutContent -replace "it's", "it&apos;s"
$aboutContent = $aboutContent -replace "today's", "today&apos;s"
Set-Content "src/app/about-us/page.js" $aboutContent
Write-Host "✅ Fixed unescaped entities in about-us page" -ForegroundColor Green

# Fix other critical files
$filesToFix = @(
    "src/app/contact-us/page.js",
    "src/app/how-we-do-it/page.js",
    "src/app/components/Footer.js",
    "src/app/components/CallButton.js",
    "src/app/components/HotspotSection.js"
)

foreach ($file in $filesToFix) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Fix component naming
        $content = $content -replace 'function page\(\)', 'function Page()'
        $content = $content -replace 'function footer\(\)', 'function Footer()'
        $content = $content -replace 'export default page;', 'export default Page;'
        $content = $content -replace 'export default footer;', 'export default Footer;'
        
        # Fix unescaped entities
        $content = $content -replace "Let's", "Let&apos;s"
        $content = $content -replace "What's", "What&apos;s"
        $content = $content -replace "we'll", "we&apos;ll"
        $content = $content -replace "app's", "app&apos;s"
        $content = $content -replace "brand's", "brand&apos;s"
        $content = $content -replace "client's", "client&apos;s"
        
        Set-Content $file $content
        Write-Host "✅ Fixed: $file" -ForegroundColor Green
    }
}

Write-Host "🎉 All deployment fixes completed!" -ForegroundColor Green
Write-Host "📝 Next steps:" -ForegroundColor Cyan
Write-Host "1. Run: npm run build" -ForegroundColor White
Write-Host "2. Check for any remaining errors" -ForegroundColor White
Write-Host "3. Commit and push to trigger Vercel deployment" -ForegroundColor White 