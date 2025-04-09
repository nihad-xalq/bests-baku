import { Metadata } from 'next';
import TermsOfService from '@/views/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service - Baku\'s Best',
  description: 'Read our terms of service to understand the rules and guidelines for using Baku\'s Best.',
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
} 