import Link from 'next/link'
import { StaggerItem } from './Motion'
import type { BlogPost } from '@/content/blog'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <StaggerItem>
      <Link
        href={`/blog/${post.slug}`}
        className="group block"
      >
        {/* Image container — Luxo rounded style */}
        <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-5">
          {/* Gradient placeholder */}
          <div className={`absolute inset-0 ${post.heroGradient} transition-transform duration-500 group-hover:scale-[1.03]`} />

          {/* Bottom overlay with date + arrow */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-between px-5 pb-4">
            <span className="text-[12px] font-light text-white/80">
              {post.date}
            </span>
            <span className="text-white/80 text-lg transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </div>
        </div>

        {/* Text content */}
        <h3 className="font-display text-[clamp(17px,2vw,20px)] font-normal leading-[1.3] text-mineral mb-2.5 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-[14px] font-light leading-relaxed text-ink-light line-clamp-3 mb-3">
          {post.excerpt}
        </p>
        <span className="text-[13px] font-medium text-mineral group-hover:text-gold transition-colors">
          Read more
        </span>
      </Link>
    </StaggerItem>
  )
}
