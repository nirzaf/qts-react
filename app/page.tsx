import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quadrate Tech Solutions | AI & Software Development',
  description: 'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
  keywords: [
    'artificial intelligence',
    'AI services', 
    'machine learning',
    'computer vision',
    'software development',
    'web development',
    'Sri Lanka'
  ],
  openGraph: {
    title: 'Quadrate Tech Solutions | AI & Software Development',
    description: 'AI-powered software solutions, machine learning, computer vision, NLP, custom software development, web development, and digital marketing services.',
    images: [
      {
        url: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
        width: 1200,
        height: 630,
        alt: 'Quadrate Tech Solutions - AI & Software Development',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Welcome to Quadrate Tech Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading provider of AI-powered software solutions, machine learning, computer vision, 
            and custom software development services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
            <p className="text-muted-foreground">
              Cutting-edge AI solutions including computer vision, natural language processing, 
              and generative AI consulting.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-3">Software Development</h3>
            <p className="text-muted-foreground">
              Custom software development, web applications, and mobile app development 
              using modern technologies.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-3">Digital Solutions</h3>
            <p className="text-muted-foreground">
              Digital marketing, business automation, and cloud solutions to help 
              your business grow and scale.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Next.js Migration in Progress</h2>
          <p className="text-muted-foreground mb-6">
            We are currently migrating our website to Next.js to provide you with better performance, 
            SEO optimization, and an enhanced user experience. All existing functionality will be 
            preserved and improved during this migration process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/about" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Quadrate Tech Solutions",
            "url": "https://quadratetech.com",
            "logo": "https://ik.imagekit.io/quadrate/assets/img/QTS%20Primary%20Logo.png",
            "description": "Leading provider of AI-powered software solutions, machine learning, and custom software development services.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "19/2/9, Market Complex, Matale Road",
              "addressLocality": "Akurana",
              "addressRegion": "Kandy",
              "postalCode": "20850",
              "addressCountry": "LK"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+94814242615",
              "contactType": "customer service",
              "email": "info@quadrate.lk"
            },
            "sameAs": [
              "https://www.facebook.com/quadrate.lk/",
              "https://x.com/quadrate_lk",
              "https://www.instagram.com/quadrate.lk/",
              "https://lk.linkedin.com/company/quadrate-tech"
            ]
          })
        }}
      />
    </div>
  );
}