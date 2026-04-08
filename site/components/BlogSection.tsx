import Link from 'next/link'
import { FadeIn, StaggerContainer } from './Motion'
import BlogCard from './BlogCard'
import { blogPosts } from '@/content/blog'

export default function BlogSection() {
  const posts = blogPosts.slice(0, 4)

  return (
    <>
      <FadeIn className="text-center mb-[clamp(32px,5vw,48px)] px-[clamp(24px,5vw,64px)]">
        <div className="gold-line" />
        <p className="label-uppercase text-[12px] tracking-eyebrow text-ink-light mb-5">
          Salt.Magic Blog
        </p>
        <h2 className="font-display text-h3 font-normal text-mineral tracking-tight">
          Science-backed insights for <em>better hydration</em>
        </h2>
      </FadeIn>

      <StaggerContainer className={`grid gap-6 mx-auto px-[clamp(24px,5vw,64px)] ${
        posts.length <= 2
          ? 'grid-cols-1 sm:grid-cols-2 max-w-[700px]'
          : posts.length === 3
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1000px]'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px]'
      }`}>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </StaggerContainer>

      <FadeIn className="text-center mt-10">
        <Link
          href="/blog"
          className="link-underline"
        >
          View all articles
          <span>&rarr;</span>
        </Link>
      </FadeIn>
    </>
  )
}
