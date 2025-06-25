'use client'

import React, { useState, useEffect, useRef } from 'react'

interface MicroFrontendLoaderProps {
  name: string
  host: string
  onError?: (error: Error) => void
  className?: string
  height?: string
  width?: string
}

interface LoadingSpinnerProps {
  message?: string
}

function LoadingSpinner({ message = "Loading micro frontend..." }: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-3 text-gray-600">{message}</span>
    </div>
  )
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError?: (error: Error) => void },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode; onError?: (error: Error) => void }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Micro Frontend Error:', error, errorInfo)
    if (this.props.onError) {
      this.props.onError(error)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-red-800 font-medium mb-2">Failed to load micro frontend</h3>
          <p className="text-red-600 text-sm">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
          >
            Retry
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export function MicroFrontendLoader({
  name,
  host,
  onError,
  className = "",
  height = "400px",
  width = "100%",
  ...props
}: MicroFrontendLoaderProps & Record<string, any>) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      setLoading(false)
      setError(null)
    }

    const handleError = () => {
      const error = new Error(`Failed to load micro frontend: ${name}`)
      setError(error)
      setLoading(false)
      
      if (onError) {
        onError(error)
      }
    }

    iframe.addEventListener('load', handleLoad)
    iframe.addEventListener('error', handleError)

    // Set a timeout for loading
    const timeout = setTimeout(() => {
      if (loading) {
        handleError()
      }
    }, 10000) // 10 second timeout

    return () => {
      iframe.removeEventListener('load', handleLoad)
      iframe.removeEventListener('error', handleError)
      clearTimeout(timeout)
    }
  }, [name, loading, onError])

  if (error) {
    return (
      <div className={className}>
        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-yellow-800 font-medium mb-2">Micro frontend unavailable</h3>
          <p className="text-yellow-700 text-sm">
            The {name} micro frontend could not be loaded from {host}.
            {error?.message && ` Error: ${error.message}`}
          </p>
          <button
            onClick={() => {
              setError(null)
              setLoading(true)
              if (iframeRef.current) {
                iframeRef.current.src = iframeRef.current.src // Reload iframe
              }
            }}
            className="mt-3 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 text-sm"
          >
            Retry Loading
          </button>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary onError={onError}>
      <div className={`relative ${className}`}>
        {loading && (
          <div className="absolute inset-0 z-10 bg-white bg-opacity-90 flex items-center justify-center">
            <LoadingSpinner message={`Loading ${name}...`} />
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={host}
          title={`${name} Micro Frontend`}
          width={width}
          height={height}
          style={{
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          loading="lazy"
          {...props}
        />
      </div>
    </ErrorBoundary>
  )
}

// Enhanced Component Registry for True Micro Frontend Architecture
interface ComponentRegistryEntry {
  name: string
  host: string
  component: string
  description: string
  status: 'available' | 'loading' | 'error'
}

class MicroFrontendRegistry {
  private static instance: MicroFrontendRegistry
  private registry: Map<string, ComponentRegistryEntry> = new Map()

  static getInstance(): MicroFrontendRegistry {
    if (!MicroFrontendRegistry.instance) {
      MicroFrontendRegistry.instance = new MicroFrontendRegistry()
    }
    return MicroFrontendRegistry.instance
  }

  register(entry: ComponentRegistryEntry): void {
    this.registry.set(entry.name, entry)
  }

  get(name: string): ComponentRegistryEntry | undefined {
    return this.registry.get(name)
  }

  getAll(): ComponentRegistryEntry[] {
    return Array.from(this.registry.values())
  }

  async checkHealth(name: string): Promise<boolean> {
    const entry = this.registry.get(name)
    if (!entry) return false

    try {
      const response = await fetch(entry.host, { method: 'HEAD' })
      const isHealthy = response.ok
      entry.status = isHealthy ? 'available' : 'error'
      return isHealthy
    } catch {
      entry.status = 'error'
      return false
    }
  }
}

// Initialize the registry with our micro frontends
const registry = MicroFrontendRegistry.getInstance()

registry.register({
  name: 'ProductCatalog',
  host: 'http://localhost:3001',
  component: 'ProductGrid',
  description: 'Product catalog with search and filters',
  status: 'available'
})

registry.register({
  name: 'CartService',
  host: 'http://localhost:3002',
  component: 'CartItems',
  description: 'Shopping cart management',
  status: 'available'
})

registry.register({
  name: 'UserDashboard',
  host: 'http://localhost:3003',
  component: 'DashboardNav',
  description: 'User dashboard and profile',
  status: 'available'
})

// Convenience components for specific micro frontends
export const ProductCatalogMF = (props: any) => (
  <MicroFrontendLoader name="Product Catalog" host="http://localhost:3001" {...props} />
)

export const CartServiceMF = (props: any) => (
  <MicroFrontendLoader name="Cart Service" host="http://localhost:3002" {...props} />
)

export const UserDashboardMF = (props: any) => (
  <MicroFrontendLoader name="User Dashboard" host="http://localhost:3003" {...props} />
)

// Advanced features
export function useMicroFrontendRegistry() {
  const [entries, setEntries] = useState<ComponentRegistryEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRegistry = async () => {
      setLoading(true)
      const allEntries = registry.getAll()
      
      // Check health of all micro frontends
      await Promise.all(
        allEntries.map(entry => registry.checkHealth(entry.name))
      )
      
      setEntries(registry.getAll())
      setLoading(false)
    }

    loadRegistry()
  }, [])

  return { entries, loading, registry }
}

export { MicroFrontendRegistry } 