import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/app/globals.css';
import NavigationBar from '@/app/home-components/NavigationBar';
import Footer from '@/components/Footer';
import { ScrollProvider } from '@/contexts/ScrollContext';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'Steelco-Teknikk AS',
    description: 'Steelco AS - Kabelbeskyttelse og isolering',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png'
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground overscroll-none antialiased`}>
                <ScrollProvider>
                    <NavigationBar />
                    {children}
                    <Footer />
                </ScrollProvider>
            </body>
        </html>
    );
};

export default Layout;
