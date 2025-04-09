import { Metadata } from 'next';
import About from '@/views/About';

export const metadata: Metadata = {
  title: 'About Us - Baku\'s Best',
  description: 'Learn about Baku\'s Best - your trusted guide to the best places in Baku.',
};

export default function AboutPage() {
  return <About />;
} 