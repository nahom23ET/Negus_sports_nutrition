export function Hero() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] border border-white/10">
      <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10" />
      <div className="z-10 flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Fuel Your Performance
        </h1>
        <p className="text-xl text-white/80 max-w-2xl">
          Premium sports nutrition supplements designed to help you achieve your fitness goals
        </p>
      </div>
    </div>
  )
}

