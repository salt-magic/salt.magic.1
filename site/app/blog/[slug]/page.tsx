import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts, getPostBySlug, getAllSlugs } from '@/content/blog'
import BlogCard from '@/components/BlogCard'
import { FadeIn, StaggerContainer } from '@/components/Motion'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Not Found - Salt.Magic' }

  return {
    title: `${post.title} - Salt.Magic`,
    description: post.excerpt,
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug)

  return (
    <>
      {/* Hero - full-width image with overlay */}
      <div className={`relative w-full min-h-[70vh] min-h-[480px] ${post.heroGradient}`}>
        {post.heroImage && (
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 100%)',
          }}
        />
        <FadeIn className="absolute inset-0 flex flex-col items-center justify-end pb-[clamp(48px,8vw,100px)] px-[clamp(24px,5vw,64px)] text-center">
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 bg-white/90 text-ink text-[12px] font-medium tracking-[.1em] uppercase rounded-full">
              {post.category}
            </span>
            <span className="text-[13px] font-normal text-white/80">
              {post.date}
            </span>
          </div>
          <h1 className="headline-editorial text-white max-w-[800px] tracking-tight">
            {post.title}
          </h1>
          <p className="text-[13px] font-normal text-white/60 mt-4">
            {post.readTime}
          </p>
        </FadeIn>
      </div>

      {/* Article content */}
      <FadeIn>
        <article
          className="
            max-w-[680px] mx-auto px-[clamp(24px,5vw,64px)]
            pt-[clamp(60px,8vw,100px)] pb-[clamp(60px,8vw,100px)]
            font-body text-[16px] font-normal leading-relaxed text-ink-light
            [&>p+p]:mt-6
            [&>h2]:font-display [&>h2]:text-[clamp(24px,3vw,32px)] [&>h2]:font-normal [&>h2]:text-mineral [&>h2]:mt-12 [&>h2]:mb-5 [&>h2]:leading-[1.2]
            [&>p.text-lg]:text-[18px] [&>p.text-lg]:font-normal [&>p.text-lg]:text-ink [&>p.text-lg]:mb-8
            [&>blockquote]:relative [&>blockquote]:my-12 [&>blockquote]:pl-0 [&>blockquote]:border-none [&>blockquote]:text-center
            [&>blockquote]:before:content-['\u201C'] [&>blockquote]:before:block [&>blockquote]:before:font-display [&>blockquote]:before:text-[80px] [&>blockquote]:before:leading-none [&>blockquote]:before:text-gold/30 [&>blockquote]:before:-mb-4
            [&>blockquote]:font-display [&>blockquote]:text-[clamp(18px,2.5vw,22px)] [&>blockquote]:not-italic [&>blockquote]:text-mineral [&>blockquote]:leading-relaxed [&>blockquote]:max-w-[560px] [&>blockquote]:mx-auto
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </FadeIn>

      {/* Bottom section */}
      <div className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,64px)] pb-[clamp(80px,12vw,140px)]">
        <hr className="border-border-warm mb-[clamp(48px,6vw,80px)]" />

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-mineral hover:text-gold transition-colors mb-12"
        >
          <span>&larr;</span>
          Back to Blog
        </Link>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <>
            <h2 className="font-display text-h2 font-normal text-mineral mb-8 tracking-tight">
              Related Articles
            </h2>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.slice(0, 3).map((relPost) => (
                <BlogCard key={relPost.slug} post={relPost} />
              ))}
            </StaggerContainer>
          </>
        )}
      </div>
    </>
  )
}
