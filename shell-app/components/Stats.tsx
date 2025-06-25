import { TrendingUp, Users, Package, Award } from 'lucide-react'

const stats = [
  {
    label: 'Total Sales',
    value: '$2.4M',
    change: '+12.5%',
    changeType: 'positive' as const,
    icon: TrendingUp,
  },
  {
    label: 'Active Users',
    value: '89.2K',
    change: '+5.2%',
    changeType: 'positive' as const,
    icon: Users,
  },
  {
    label: 'Products Sold',
    value: '145K',
    change: '+8.1%',
    changeType: 'positive' as const,
    icon: Package,
  },
  {
    label: 'Customer Rating',
    value: '4.9/5',
    change: '+0.3',
    changeType: 'positive' as const,
    icon: Award,
  },
]

export function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform continues to grow, serving customers worldwide with excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="card p-6 text-center hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 rounded-lg mb-4">
                <stat.icon className="h-6 w-6 text-brand-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {stat.label}
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-success-600' : 'text-error-600'
              }`}>
                {stat.change} from last month
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 