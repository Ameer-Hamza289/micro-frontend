import { Hero } from '../components/Hero'
import { FeaturedProducts } from '../components/FeaturedProducts'
import { CategoryGrid } from '../components/CategoryGrid'
import { Stats } from '../components/Stats'
import { Newsletter } from '../components/Newsletter'

export default function HomePage() {
  return (
    <div className="fade-in">
      <Hero />
      <Stats />
      <CategoryGrid />
      <FeaturedProducts />
      <Newsletter />
    </div>
  )
} 