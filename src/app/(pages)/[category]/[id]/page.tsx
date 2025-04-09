import PlaceDetail from '@/views/PlaceDetail';
import { Metadata } from 'next';

type PageParams = {
  params: Promise<{ category: string; id: string }>;
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Place Details - Baku's Best`,
    description: `Details about ${resolvedParams.category} in Baku`,
  };
}

export default async function PlaceDetailPage({ params }: PageParams) {
  const resolvedParams = await params;
  return <PlaceDetail params={resolvedParams} />;
} 