# MicroMart Setup Script for Windows
Write-Host "🚀 Setting up MicroMart - Micro Frontend E-commerce Platform" -ForegroundColor Cyan
Write-Host "Using React/Next.js + Tailwind CSS v4.1" -ForegroundColor Green

# Create project directories
Write-Host "📁 Creating project structure..." -ForegroundColor Yellow

$directories = @(
    "shell-app\src\app",
    "shell-app\src\components", 
    "shell-app\src\store",
    "product-catalog\src\app",
    "product-catalog\src\components",
    "cart-service\src\app", 
    "cart-service\src\components",
    "user-dashboard\src\app",
    "user-dashboard\src\components",
    "shared\components",
    "shared\utils",
    "shared\types"
)

foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
        Write-Host "✅ Created: $dir" -ForegroundColor Green
    }
}

Write-Host "📦 Installing root dependencies..." -ForegroundColor Yellow
if (Get-Command npm -ErrorAction SilentlyContinue) {
    npm install
} else {
    Write-Host "❌ npm not found. Please install Node.js first." -ForegroundColor Red
    exit 1
}

Write-Host "🔧 Installing micro frontend dependencies..." -ForegroundColor Yellow

$services = @("shell-app", "product-catalog", "cart-service", "user-dashboard")

foreach ($service in $services) {
    Write-Host "Installing dependencies for $service..." -ForegroundColor Cyan
    Set-Location $service
    npm install
    Set-Location ..
}

Write-Host "✅ MicroMart project setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🎉 Next steps:" -ForegroundColor Cyan
Write-Host "1. npm run dev              # Start all services" -ForegroundColor White
Write-Host "2. Open http://localhost:3000  # View the application" -ForegroundColor White
Write-Host "3. Each service runs on different ports:" -ForegroundColor White
Write-Host "   - Shell App: http://localhost:3000" -ForegroundColor Gray
Write-Host "   - Products: http://localhost:3001" -ForegroundColor Gray
Write-Host "   - Cart: http://localhost:3002" -ForegroundColor Gray
Write-Host "   - Dashboard: http://localhost:3003" -ForegroundColor Gray 