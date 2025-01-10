import { Hero } from '@/components/hero'
import { ProductList } from '@/components/product-list'
import { FeaturedCategories } from '@/components/featured-categories'
import { getProducts } from '@/lib/products'

export default async function Page() {
  const products = await getProducts()

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Hero />
      <FeaturedCategories />
      <ProductList list={products} />
    </div>
  )
}

