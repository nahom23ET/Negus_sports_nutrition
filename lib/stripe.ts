import { redirect } from 'next/navigation'
import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in the environment variables')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16', // Use the latest API version
})

export async function createCheckoutSession({ priceId }: { priceId: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${baseUrl}/success`,
    cancel_url: `${baseUrl}/canceled`,
  })

  if (session.url) {
    redirect(session.url)
  } else {
    throw new Error('Failed to create checkout session')
  }
}

