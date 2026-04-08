import type { Metadata } from 'next'
import { FadeIn, StaggerContainer } from '@/components/Motion'
import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/content/blog'

export const metadata: Metadata = {
  title: 'Hydration Science & Wellness — Salt.Magic Blog',
  description:
    'Science-backed insights on hydration, minerals, and daily wellness from Salt.Magic Thailand.',
}

export default function BlogPage() {
  return (
    <div className="pt-[clamp(140px,18vw,200px)] pb-[clamp(80px,12vw,140px)]">
      {/* Header */}
      <FadeIn className="text-center mb-[clamp(60px,10vw,100px)] px-[clamp(24px,5vw,64px)]">
        <p className="label-uppercase text-[12px] tracking-[.22em] text-ink-light mb-5">
          Salt.Magic Blog
        </p>
        <h1 className="font-display text-h1 font-normal text-mineral tracking-tight">
          Hydration science & <em>daily wellness</em>
        </h1>
        <p className="text-[16px] font-light leading-relaxed text-ink-light max-w-[520px] mx-auto mt-5">
          Evidence-based insights on minerals, hydration, and why what you drink
          every day matters more than you think.
        </p>
      </FadeIn>

      {/* Grid — adapts columns to article count */}
      <StaggerContainer className={`grid gap-8 max-w-[1400px] mx-auto px-[clamp(24px,5vw,64px)] ${
        blogPosts.length <= 2
          ? 'grid-cols-1 sm:grid-cols-2 max-w-[800px]'
          : blogPosts.length === 3
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1100px]'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      }`}>
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </StaggerContainer>
    </div>
  )
}
