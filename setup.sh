#!/bin/bash

echo "🚀 Setting up MicroMart - Micro Frontend E-commerce Platform"
echo "Using React/Next.js + Tailwind CSS v4.1"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Create project directories
echo -e "${YELLOW}📁 Creating project structure...${NC}"

directories=(
    "shell-app/src/app"
    "shell-app/src/components"
    "shell-app/src/store"
    "product-catalog/src/app"
    "product-catalog/src/components"
    "cart-service/src/app"
    "cart-service/src/components"
    "user-dashboard/src/app"
    "user-dashboard/src/components"
    "shared/components"
    "shared/utils"
    "shared/types"
)

for dir in "${directories[@]}"; do
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        echo -e "${GREEN}✅ Created: $dir${NC}"
    fi
done

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm not found. Please install Node.js first.${NC}"
    exit 1
fi

echo -e "${YELLOW}📦 Installing root dependencies...${NC}"
npm install

echo -e "${YELLOW}🔧 Installing micro frontend dependencies...${NC}"

services=("shell-app" "product-catalog" "cart-service" "user-dashboard")

for service in "${services[@]}"; do
    echo -e "${CYAN}Installing dependencies for $service...${NC}"
    cd "$service"
    npm install
    cd ..
done

echo -e "${GREEN}✅ MicroMart project setup complete!${NC}"
echo ""
echo -e "${CYAN}🎉 Next steps:${NC}"
echo "1. npm run dev              # Start all services"
echo "2. Open http://localhost:3000  # View the application"
echo "3. Each service runs on different ports:"
echo "   - Shell App: http://localhost:3000"
echo "   - Products: http://localhost:3001"
echo "   - Cart: http://localhost:3002"
echo "   - Dashboard: http://localhost:3003" 