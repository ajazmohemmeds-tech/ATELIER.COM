import './globals.css';
import { Playfair_Display, Inter, Great_Vibes } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import { UserProvider } from '@/context/UserContext';
import CartDrawer from '@/components/Cart/CartDrawer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-greatvibes',
});

export const metadata = {
  title: 'Atelier | Premium Curated Gifts',
  description: 'Handmade and curated gifts for every occasion. Frames, hampers, bouquets, and more.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}>
        <UserProvider>
          <CartProvider>
            {children}
            <CartDrawer />
            <FloatingWhatsApp />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
