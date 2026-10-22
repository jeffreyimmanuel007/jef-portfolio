import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { CursorGlow } from '@/components/CursorGlow';
import { ToastProvider } from '@/components/Toast';

export const metadata: Metadata = {
  title: 'CloudOps.sys | Cloud Support Engineer Portfolio',
  description: 'Production portfolio for Alex Rivera — Cloud Support Engineer specializing in AWS, Azure, Kubernetes, and Terraform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container min-h-screen relative antialiased">
        <ToastProvider>
          <Header />
          <CursorGlow />
          {children}
          <BottomNav />
        </ToastProvider>
      </body>
    </html>
  );
}
