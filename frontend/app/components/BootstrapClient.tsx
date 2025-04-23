'use client';

import { useEffect } from 'react';

/**
 * Client component that loads Bootstrap JS
 * This solves issues with Bootstrap JS components in Next.js server components
 */
export default function BootstrapClient() {
  useEffect(() => {
    // Load Bootstrap JS on client-side only
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}