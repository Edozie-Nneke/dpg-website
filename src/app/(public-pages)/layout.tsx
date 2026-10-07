'use client';
import Footer from '@/app/components/page-components/Footer';
import NavBar from '@/app/components/page-components/NavBar';
import type { Page } from '@/app/components/page-components/NavBar';
import { useState } from 'react';

export default function PublicPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  //   const [showConsult, setShowConsult] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  return (
    <div className={`w-full `}>
      <div className={`w-full min-h-screen`}>
        <NavBar
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          // onConsult={setShowConsult}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <main className={`w-full min-h-dvh`}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
