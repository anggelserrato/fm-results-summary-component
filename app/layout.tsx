import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const hanken = localFont({
  src: [
    {
      path: './fonts/hanken-grotesk-v12-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/hanken-grotesk-v12-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/hanken-grotesk-v12-latin-800.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Results summary component',
  description:
    'A responsive Results Summary Component challenge from Frontend Mentor built with Next.js, TypeScript, and Tailwind CSS. Features a clean, accessible, and modern UI for displaying user performance results.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hanken.className}>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
