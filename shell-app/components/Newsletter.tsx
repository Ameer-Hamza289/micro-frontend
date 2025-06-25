import { Mail, Gift } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-600 to-brand-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Mail className="h-8 w-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-shadow-md">
            Stay in the Loop
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-shadow-sm">
            Get exclusive deals, new product announcements, and insider tips delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
            
            <div className="flex items-center justify-center mt-4 text-blue-100 text-sm">
              <Gift className="h-4 w-4 mr-2" />
              <span>Get 10% off your first order when you subscribe!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 