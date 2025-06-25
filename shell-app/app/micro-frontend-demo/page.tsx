'use client'

import { Suspense } from 'react'
import { 
  MicroFrontendLoader, 
  ProductCatalogMF, 
  CartServiceMF, 
  UserDashboardMF,
  useMicroFrontendRegistry 
} from '../../components/MicroFrontendLoader'

function MicroFrontendStatus() {
  const { entries, loading } = useMicroFrontendRegistry()

  if (loading) {
    return <div className="text-gray-500">Checking micro frontend status...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {entries.map((entry) => (
        <div key={entry.name} className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">{entry.name}</h3>
            <span className={`px-2 py-1 rounded-full text-xs ${
              entry.status === 'available' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {entry.status}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-2">{entry.description}</p>
          <p className="text-xs text-gray-500">{entry.host}</p>
        </div>
      ))}
    </div>
  )
}

export default function MicroFrontendDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🚀 Micro Frontend Architecture</h1>
              <p className="text-gray-600 mt-2">
                Iframe-based micro frontends with health monitoring and error recovery
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Architecture Type</div>
              <div className="font-medium text-blue-600">Iframe-based Composition</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Architecture Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">🏗️ Architecture Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-medium text-blue-900">Shell App</h3>
              <p className="text-sm text-blue-700 mt-1">Host (localhost:3000)</p>
              <p className="text-xs text-blue-600 mt-2">Orchestrates micro frontends</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-medium text-green-900">Product Catalog</h3>
              <p className="text-sm text-green-700 mt-1">Remote (localhost:3001)</p>
              <p className="text-xs text-green-600 mt-2">Product management system</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-medium text-purple-900">Cart Service</h3>
              <p className="text-sm text-purple-700 mt-1">Remote (localhost:3002)</p>
              <p className="text-xs text-purple-600 mt-2">Shopping cart functionality</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="font-medium text-orange-900">User Dashboard</h3>
              <p className="text-sm text-orange-700 mt-1">Remote (localhost:3003)</p>
              <p className="text-xs text-orange-600 mt-2">User management interface</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-3">🔍 Micro Frontend Health Status</h3>
            <MicroFrontendStatus />
          </div>
        </div>

        {/* Live Micro Frontend Integration */}
        <div className="space-y-8">
          {/* Product Catalog Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-green-50 px-6 py-4 border-b border-green-200">
              <h2 className="text-lg font-semibold text-green-900 flex items-center">
                🛍️ Product Catalog Micro Frontend
                <span className="ml-2 px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full">
                  Iframe Integration
                </span>
              </h2>
              <p className="text-sm text-green-700 mt-1">
                Complete product catalog application running independently
              </p>
            </div>
            <div className="p-6">
              <ProductCatalogMF 
                height="600px"
                onError={(error: Error) => console.error('Product Catalog Error:', error)}
              />
            </div>
          </section>

          {/* Cart Service Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-purple-50 px-6 py-4 border-b border-purple-200">
              <h2 className="text-lg font-semibold text-purple-900 flex items-center">
                🛒 Cart Service Micro Frontend
                <span className="ml-2 px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">
                  Iframe Integration
                </span>
              </h2>
              <p className="text-sm text-purple-700 mt-1">
                Shopping cart management with full e-commerce functionality
              </p>
            </div>
            <div className="p-6">
              <CartServiceMF 
                height="500px"
                onError={(error: Error) => console.error('Cart Service Error:', error)}
              />
            </div>
          </section>

          {/* User Dashboard Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-orange-50 px-6 py-4 border-b border-orange-200">
              <h2 className="text-lg font-semibold text-orange-900 flex items-center">
                👤 User Dashboard Micro Frontend
                <span className="ml-2 px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">
                  Iframe Integration
                </span>
              </h2>
              <p className="text-sm text-orange-700 mt-1">
                User profile and dashboard with comprehensive user management
              </p>
            </div>
            <div className="p-6">
              <UserDashboardMF 
                height="600px"
                onError={(error: Error) => console.error('User Dashboard Error:', error)}
              />
            </div>
          </section>

          {/* Custom Integration Examples */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
              <h2 className="text-lg font-semibold text-blue-900 flex items-center">
                ⚡ Advanced Integration Features
                <span className="ml-2 px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">
                  Custom Configurations
                </span>
              </h2>
              <p className="text-sm text-blue-700 mt-1">
                Demonstrating different sizes, error handling, and loading states
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Compact Product View</h3>
                  <MicroFrontendLoader
                    name="Product Catalog (Compact)"
                    host="http://localhost:3001"
                    height="300px"
                    className="border rounded-lg overflow-hidden"
                    onError={(error) => console.error('Compact Product Error:', error)}
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-3">Mini Cart Widget</h3>
                  <MicroFrontendLoader
                    name="Cart Widget"
                    host="http://localhost:3002"
                    height="300px"
                    className="border rounded-lg overflow-hidden"
                    onError={(error) => console.error('Cart Widget Error:', error)}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Technical Implementation Details */}
        <div className="bg-gray-900 text-white rounded-lg p-6 mt-8">
          <h2 className="text-lg font-semibold mb-4">🔧 Technical Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-medium text-blue-300 mb-2">Iframe-based Architecture:</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Complete application isolation</li>
                <li>• Independent technology stacks</li>
                <li>• Sandboxed security model</li>
                <li>• Error boundary protection</li>
                <li>• Health monitoring system</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-green-300 mb-2">Benefits & Features:</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Zero coupling between apps</li>
                <li>• Independent deployments</li>
                <li>• Technology diversity</li>
                <li>• Fault tolerance</li>
                <li>• Easy maintenance</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <h3 className="font-medium text-yellow-300 mb-2">🎯 Architecture Advantages:</h3>
            <p className="text-gray-300 text-sm">
              This iframe-based approach provides true micro frontend isolation while maintaining 
              simplicity and compatibility with Next.js App Router. Each micro frontend runs as 
              a completely independent application with its own routing, state management, and 
              technology stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 