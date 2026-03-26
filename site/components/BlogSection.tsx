import Link from 'next/link'
import { FadeIn, StaggerContainer } from './Motion'
import BlogCard from './BlogCard'
import { blogPosts } from '@/content/blog'

export default function BlogSection() {
  const posts = blogPosts.slice(0, 4)

  return (
    <section className="py-[clamp(80px,12vw,140px)]">
      <FadeIn className="text-center mb-[clamp(48px,8vw,80px)] px-[clamp(24px,5vw,64px)]">
        <div className="gold-line" />
        <p className="label-uppercase text-[11px] tracking-[.22em] text-gold mb-5">
          Salt.Magic Blog
        </p>
        <h2 className="font-display text-[clamp(32px,5vw,48px)] font-normal leading-[1.15] text-mineral tracking-tight">
          Science-backed insights for <em>better hydration</em>
        </h2>
      </FadeIn>

      <StaggerContainer className={`grid gap-8 mx-auto px-[clamp(24px,5vw,64px)] ${
        posts.length <= 2
          ? 'grid-cols-1 sm:grid-cols-2 max-w-[800px]'
          : posts.length === 3
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1100px]'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1400px]'
      }`}>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </StaggerContainer>

      <FadeIn className="text-center mt-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-mineral hover:text-gold transition-colors"
        >
          View all articles
          <span>&rarr;</span>
        </Link>
      </FadeIn>
    </section>
  )
}
