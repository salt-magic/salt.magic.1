import Image from 'next/image'
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
        {/* Image container - Luxo rounded style */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
          {/* Hero image or gradient fallback */}
          {post.heroImage ? (
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt ?? post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <div className={`absolute inset-0 ${post.heroGradient} transition-transform duration-500 group-hover:scale-[1.03]`} />
          )}

          {/* Bottom overlay with date + arrow */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-between px-5 pb-4">
            <span className="text-[12px] font-normal text-white/80">
              {post.date}
            </span>
            <span className="text-white/80 text-lg transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </div>
        </div>

        {/* Text content */}
        <h4 className="font-display text-h4 font-normal text-mineral mb-2.5 line-clamp-2">
          {post.title}
        </h4>
        <p className="text-[15px] font-normal leading-relaxed text-ink-light line-clamp-3 mb-3">
          {post.excerpt}
        </p>
        <span className="text-[13px] font-medium text-mineral group-hover:text-gold transition-colors">
          Read more
        </span>
      </Link>
    </StaggerItem>
  )
}
