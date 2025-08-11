import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Quadrate Tech Solutions - Your partner in innovative technology solutions.',
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-primary">
          Welcome to Quadrate Tech Solutions
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We are currently migrating to Next.js. This is a temporary page while we complete the migration process.
        </p>
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Migration in Progress</h2>
          <p className="text-muted-foreground">
            We are working hard to bring you an improved experience with Next.js. 
            All existing functionality will be preserved during this migration.
          </p>
        </div>
      </div>
    </div>
  );
}