import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'
import { Cart } from '@/components/cart'
import { LogoFull } from '@/components/logo'

export function SiteHeader() {
  return (
    <header className="bg-[#1A1A1A] sticky top-0 z-20 border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-4">
        <div className="mr-7 flex items-center gap-3">
          <Sidebar />
          <Link href="/" className="flex items-center gap-2">
            <LogoFull className="h-8" />
          </Link>
        </div>
        <nav className="text-white/90 hover:[&_a]:text-[#FFD700] hidden items-center gap-6 text-sm font-medium md:flex [&_a]:transition-colors">
          <Link href="#">Protein</Link>
          <Link href="#">Pre-Workout</Link>
          <Link href="#">Creatine</Link>
          <Link href="#">Vitamins</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <SearchBar className="hidden sm:block" />
          <Cart />
        </div>
      </div>
    </header>
  )
}

function SearchBar({ className }: { className?: string }) {
  return (
    <form className={cn('relative max-w-lg lg:max-w-xs', className)}>
      <Search className="text-white/60 absolute left-2 top-2 size-4" />
      <Input
        type="search"
        placeholder="Search supplements..."
        className="h-8 rounded-lg pl-8 text-sm border-white/20 bg-white/5 text-white placeholder:text-white/60 sm:w-[200px] md:w-[200px] lg:w-[200px]"
      />
    </form>
  )
}

function Sidebar() {
  return (
    <Sheet>
      <Tooltip>
        <SheetTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="border-white/20 text-white size-8 shrink-0 border md:hidden"
            >
              <Menu className="size-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </TooltipTrigger>
        </SheetTrigger>
        <TooltipContent align="start">Menu</TooltipContent>
        <SheetContent
          side="left"
          className="flex w-full flex-col p-4 pt-12 md:w-3/4 bg-[#1A1A1A] text-white"
        >
          <SearchBar className="w-full sm:hidden" />
          <Button className="justify-start text-white hover:text-[#FFD700]" variant="ghost">
            <Link href="#">Protein</Link>
          </Button>
          <Button className="justify-start text-white hover:text-[#FFD700]" variant="ghost">
            <Link href="#">Pre-Workout</Link>
          </Button>
          <Button className="justify-start text-white hover:text-[#FFD700]" variant="ghost">
            <Link href="#">Creatine</Link>
          </Button>
          <Button className="justify-start text-white hover:text-[#FFD700]" variant="ghost">
            <Link href="#">Vitamins</Link>
          </Button>
        </SheetContent>
      </Tooltip>
    </Sheet>
  )
}

