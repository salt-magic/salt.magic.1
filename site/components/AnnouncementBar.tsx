const messages = [
  '100% Natural  |  Zero Sugar  |  Zero Flavor',
  '5 Years Trusted  |  90% Retention  |  160+ Locations',
  'Mineralize Your Water, Everywhere.',
]

const separator = '\u00A0\u00A0\u2022\u00A0\u00A0'

export default function AnnouncementBar() {
  const track = messages.join(separator) + separator

  return (
    <div role="marquee" aria-label="Brand announcements" className="bg-mineral h-9 flex items-center overflow-hidden relative z-[60]" style={{ contain: 'layout paint' }}>
      <div className="animate-marquee motion-reduce:animate-none whitespace-nowrap flex will-change-transform">
        <span className="uppercase tracking-[0.12em] text-[12px] font-medium text-white/90">
          {track}
        </span>
        <span className="uppercase tracking-[0.12em] text-[12px] font-medium text-white/90">
          {track}
        </span>
      </div>
    </div>
  )
}
