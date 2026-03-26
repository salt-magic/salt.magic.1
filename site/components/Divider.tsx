import Image from 'next/image'
import { ScaleIn } from './Motion'

interface DividerProps {
  size?: 'sm' | 'md'
}

export default function Divider({ size = 'md' }: DividerProps) {
  const imgSize = size === 'sm' ? 36 : 56
  const padding = size === 'sm' ? 'py-10' : 'py-14'

  return (
    <ScaleIn className={`flex items-center justify-center gap-6 ${padding}`}>
      <div className="w-[40px] h-px bg-gold/20" />
      <Image
        src="/images/logos/logo.png"
        alt=""
        width={imgSize}
        height={imgSize}
        className="opacity-20"
      />
      <div className="w-[40px] h-px bg-gold/20" />
    </ScaleIn>
  )
}
