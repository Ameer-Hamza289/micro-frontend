'use client'

interface NavItem {
  label: string
  href?: string
  onClick?: () => void
}

interface DashboardNavProps {
  className?: string
}

const navItems: NavItem[] = [
  { label: 'Profile', href: '#profile' },
  { label: 'Orders', href: '#orders' },
  { label: 'Settings', href: '#settings' }
]

export function DashboardNav({ className = "" }: DashboardNavProps) {
  const handleNavClick = (item: NavItem): void => {
    if (item.onClick) {
      item.onClick()
    } else if (item.href) {
      console.log(`Navigating to ${item.href}`)
      // Implement navigation logic
    }
  }

  return (
    <nav className={`bg-white shadow-sm border-b ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <button 
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-gray-500 hover:text-gray-700 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 