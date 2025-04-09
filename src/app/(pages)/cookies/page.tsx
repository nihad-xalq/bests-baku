import { Metadata } from 'next';
import CookiePolicy from '@/views/CookiePolicy';

export const metadata: Metadata = {
  title: 'Cookie Policy - Baku\'s Best',
  description: 'Learn about how we use cookies to improve your experience on Baku\'s Best.',
};

export default function CookiePolicyPage() {
  return <CookiePolicy />;
} 