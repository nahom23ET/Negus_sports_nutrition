'use client'

import { Button } from '@/components/ui/button'
import { checkoutAction } from '@/lib/actions'
import { useActionState } from 'react'

export function ProductBuyForm({ priceId }: { priceId: string }) {
  const [, formAction, isPending] = useActionState(checkoutAction, null)
  return (
    <form action={formAction}>
      <input type="hidden" name="priceId" value={priceId} />
      <Button 
        type="submit" 
        size="sm" 
        disabled={isPending}
        className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
      >
        {isPending ? 'Please wait' : 'Buy Now'}
      </Button>
    </form>
  )
}

