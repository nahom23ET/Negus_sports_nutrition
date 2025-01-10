import Image from 'next/image'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="/negus-logo-icon.png"
        alt="Negus Sports Nutrition"
        width={40}
        height={40}
        className="h-auto w-auto"
      />
    </div>
  )
}

export function LogoFull({ className }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="/negus-logo-full.png"
        alt="Negus Sports Nutrition"
        width={200}
        height={67}
        className="h-auto w-auto"
        priority
      />
    </div>
  )
}

