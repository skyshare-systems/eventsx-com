import Navbar from '@/components/navbar';
import { navigationConfig } from '@/config/navigation.config';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const metadata: Metadata = {
  title: 'EventsX',
  description: 'EventsX',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='font-sans antialiased dark'>
      <body className={cn('min-h-[100dvh] grid grid-rows-[auto,1fr,auto] overflow-y-hidden')}>
        <Navbar items={navigationConfig.items} />
        {children}
        {/* <TailwindIndicator /> */}
      </body>
    </html>
  );
}
