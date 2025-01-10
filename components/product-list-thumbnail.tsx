import { ProductBuyForm } from '@/components/product-buy-form'
import { productSchema } from '@/lib/schema'
import Image from 'next/image'
import { z } from 'zod'

export function ProductListThumbnail({
  product,
}: {
  product: z.infer<typeof productSchema>
}) {
  return (
    <div className="group bg-[#2A2A2A] rounded-xl border border-white/10 overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images?.[0] ?? '/placeholder.svg'}
          alt={product.name}
          width={400}
          height={400}
          className="size-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-2 p-4">
        <div className="flex flex-col gap-1">
          <div className="font-medium text-white">{product.name}</div>
          <div className="text-white/60">
            {product.price.display_amount}
          </div>
        </div>
        <div className="ml-auto">
          <ProductBuyForm priceId={product.price.id} />
        </div>
      </div>
    </div>
  )
}

export function ProductListThumbnailSkeleton() {
  return <div className="bg-[#2A2A2A] aspect-square rounded-xl border border-white/10" />
}

