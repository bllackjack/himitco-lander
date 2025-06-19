import React from 'react';
import Layout from '@/components/Layout';
import NotFound from '@/components/NotFound';

export default function NotFoundPage() {
  return (
    <Layout
      title="404 - Page Not Found | HIMITCO"
      description="The page you're looking for doesn't exist."
    >
      <NotFound />
    </Layout>
  );
} 