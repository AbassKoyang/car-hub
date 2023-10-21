import './globals.css';
import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'Find, book, or rent a car — quickly and easily!',
  description: 'Streamline your car rental  experience with our effortless booking process.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
