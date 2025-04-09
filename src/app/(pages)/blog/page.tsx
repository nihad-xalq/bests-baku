import { Metadata } from 'next';
import Blog from '@/views/Blog';

export const metadata: Metadata = {
  title: 'Blog - Baku&apos;s Best',
  description: 'Read our latest articles about Baku&apos;s best places, events, and local insights.',
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Top 10 Hidden Gems in Baku',
    excerpt: 'Discover the lesser-known but amazing places in Baku that locals love.',
    date: 'March 15, 2024',
    category: 'Local Guide',
    image: '/images/blog/hidden-gems.jpg',
  },
  {
    id: 2,
    title: 'A Foodie&apos;s Guide to Baku',
    excerpt: 'Explore the best restaurants and local dishes that define Baku&apos;s culinary scene.',
    date: 'March 10, 2024',
    category: 'Food & Drink',
    image: '/images/blog/food-guide.jpg',
  },
  {
    id: 3,
    title: 'Historical Sites You Must Visit',
    excerpt: 'A journey through Baku&apos;s rich history and architectural wonders.',
    date: 'March 5, 2024',
    category: 'History',
    image: '/images/blog/historical-sites.jpg',
  },
  {
    id: 4,
    title: 'Best Coffee Shops in Baku',
    excerpt: 'Find the perfect spot for your coffee break in the city.',
    date: 'February 28, 2024',
    category: 'Food & Drink',
    image: '/images/blog/coffee-shops.jpg',
  },
  {
    id: 5,
    title: 'Weekend Getaways Near Baku',
    excerpt: 'Plan your perfect weekend escape from the city.',
    date: 'February 20, 2024',
    category: 'Travel',
    image: '/images/blog/weekend-getaways.jpg',
  },
  {
    id: 6,
    title: 'Baku&apos;s Nightlife Guide',
    excerpt: 'Experience the best of Baku after dark.',
    date: 'February 15, 2024',
    category: 'Entertainment',
    image: '/images/blog/nightlife.jpg',
  },
];

type Category = 'All' | 'Local Guide' | 'Food & Drink' | 'History' | 'Travel' | 'Entertainment';

const categories: Category[] = [
  'All',
  'Local Guide',
  'Food & Drink',
  'History',
  'Travel',
  'Entertainment',
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Baku&apos;s Best Blog
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Discover the latest insights, guides, and stories about Baku&apos;s best places and experiences.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Blog posts={blogPosts} categories={categories} />
      </div>
    </main>
  );
} 