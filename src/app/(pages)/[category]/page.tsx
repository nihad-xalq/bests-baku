import { categories } from '@/config/categories';
import { places } from '@/config/places';
import { notFound } from 'next/navigation';
import Category from '@/views/Category';

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

// Map category keys to places keys
const categoryToPlacesMap: Record<string, keyof typeof places> = {
  'coffee-shops': 'cafes',
  'nightlife': 'bars',
  'museums': 'museums',
  'gaming': 'gaming',
  'parks': 'parks',
  'shopping': 'shopping',
  'historical-sites': 'historical-sites',
  'beaches': 'beaches',
  'art-galleries': 'art-galleries',
  'sports': 'sports',
  'entertainment': 'entertainment',
  'restaurants': 'restaurants'
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categoryKey = resolvedParams.category as keyof typeof categories;
  const category = categories[categoryKey];

  if (!category) {
    notFound();
  }

  // Map the category key to the corresponding places key
  const placesKey = categoryToPlacesMap[categoryKey] || 'restaurants';
  const categoryPlaces = places[placesKey] || {};

  return (
    <Category
      category={category}
      places={categoryPlaces}
      categoryKey={categoryKey}
    />
  );
} 