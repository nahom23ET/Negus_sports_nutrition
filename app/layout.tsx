import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Negus Sports Nutrition',
  description: 'Premium sports nutrition supplements for optimal performance and results.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-svh flex-col antialiased bg-[#1A1A1A] text-white',
          inter.className
        )}
      >
        <TooltipProvider delayDuration={0}>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10 py-6 text-center text-sm text-white/60">
            <div className="container">
              © {new Date().getFullYear()} Negus Sports Nutrition. All rights reserved.
            </div>
          </footer>
        </TooltipProvider>
      </body>
    </html>
  )
}

