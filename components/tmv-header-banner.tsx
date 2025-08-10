import Image from "next/image"

export function TMVHeaderBanner() {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmv_logo%20_2_Updated-MPAZOvBuhjsNOCTkO6JyZpO0PkkRR5.png"
          alt="Tilak Maharashtra Vidyapeeth Header"
          width={1200}
          height={200}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  )
}
