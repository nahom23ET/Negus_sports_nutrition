import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    name: 'Protein',
    description: 'Build and maintain muscle mass',
    image: '/placeholder.svg?height=400&width=400',
    link: '#',
  },
  {
    name: 'Pre-Workout',
    description: 'Enhance energy and focus',
    image: '/placeholder.svg?height=400&width=400',
    link: '#',
  },
  {
    name: 'Creatine',
    description: 'Improve strength and power',
    image: '/placeholder.svg?height=400&width=400',
    link: '#',
  },
  {
    name: 'Vitamins',
    description: 'Support overall health',
    image: '/placeholder.svg?height=400&width=400',
    link: '#',
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category.name} className="group relative">
            <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-[#2A2A2A]">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-white/80 mb-3">{category.description}</p>
                <Button asChild variant="outline" className="bg-black/50 border-white/20 text-white hover:bg-black/70">
                  <Link href={category.link}>Shop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

