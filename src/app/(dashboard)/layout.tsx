import Navbar from '@/components/Navbar';
import AuthProvider from '@/context/AuthProvider';
import '../globals.css';
import { Figtree } from 'next/font/google';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard',
  description: 'Kumanda merkezi',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <AuthProvider>
          <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
        </AuthProvider>
      </ThemeProvider>
    </html>
  );
}
