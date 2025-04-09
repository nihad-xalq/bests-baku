import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bests Baku - Discover the Best Places in Baku',
  description: 'Find the best restaurants, coffee shops, museums, and more in Baku, Azerbaijan.',
};

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Header will be added here */}
      {children}
      {/* Footer will be added here */}
    </div>
  );
} 