import { ImageResponse } from 'next/og';
import { getPostMetaBySlug } from '@/services/blogService';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPostMetaBySlug(params.slug);

  const title = post?.title ?? 'Quadrate Tech Solutions';
  const description = post?.description ?? 'AI & Software Development';
  const author = post?.author ?? 'Quadrate Tech Solutions';
  const date = post?.pubDate ? new Date(post.pubDate).toLocaleDateString('en-US') : '';
  const bg = post?.heroImage ?? 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458';

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          fontFamily: 'system-ui, Segoe UI',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(11,15,26,0.35) 0%, rgba(11,15,26,0.75) 70%, rgba(11,15,26,0.95) 100%)',
          }}
        />
        <div style={{ padding: 48, color: '#F8FAFC', zIndex: 10 }}>
          <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
          <div style={{ marginTop: 16, fontSize: 28, opacity: 0.9 }}>{description}</div>
          <div style={{ marginTop: 32, display: 'flex', gap: 16, alignItems: 'center' }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                background: '#0607E1',
              }}
            />
            <div style={{ fontSize: 22 }}>
              {author}
              {date ? ` • ${date}` : ''}
            </div>
          </div>
          <div style={{ marginTop: 24, fontSize: 20, color: '#CBD5E1' }}>quadrate.lk</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

