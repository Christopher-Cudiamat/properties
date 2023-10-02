import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { navItems } from './config';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real-Estate',
  description: 'Real estate website',
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header navItems={navItems}/>
        <main>
          {children}
        </main>
        <Footer navItems={navItems}/>
      </body>
    </html>
  )
}
