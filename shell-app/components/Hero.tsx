'use client'

import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { useState } from 'react'

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>New: AI-Powered Shopping Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Welcome to the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                Future of Shopping
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
              Experience seamless e-commerce with our cutting-edge micro frontend architecture. 
              Fast, scalable, and built for modern shoppers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2 group">
                <span>Start Shopping</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center space-x-2 group"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-blue-200 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-blue-200 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-blue-200 text-sm">Uptime</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image/Video */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-gray-600 font-medium">Product Demo Video</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-success-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                Free Shipping
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-white">
          <path d="M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z" />
        </svg>
      </div>
    </section>
  )
} 