import Image from 'next/image'
import { ScaleIn, ParallaxImage } from './Motion'

interface ImageBreakProps {
  src: string
  alt: string
  tall?: boolean
  padded?: boolean
  overlay?: {
    title: string
    text: string
  }
}

export default function ImageBreak({ src, alt, tall = false, padded = false, overlay }: ImageBreakProps) {
  const heightClass = tall
    ? 'h-[clamp(400px,65vh,750px)]'
    : 'h-[clamp(300px,50vh,600px)]'

  if (padded) {
    return (
      <ScaleIn className="px-[clamp(24px,5vw,100px)]">
        <div className={`relative w-full ${heightClass} rounded-xl overflow-hidden`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </ScaleIn>
    )
  }

  return (
    <ParallaxImage className={`relative w-full ${heightClass}`} offset={15}>
      <div className={`relative w-full ${heightClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-16 px-8">
            <div className="text-center text-white">
              <h3 className="font-display text-h3 font-normal mb-3">{overlay.title}</h3>
              <p className="text-sm font-normal opacity-80 max-w-md">{overlay.text}</p>
            </div>
          </div>
        )}
      </div>
    </ParallaxImage>
  )
}
