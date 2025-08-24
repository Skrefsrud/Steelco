import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

import '@/app/globals.css';
import NavigationBar from '@/app/home-components/NavigationBar';
import Footer from '@/components/Footer';
import { ScrollProvider } from '@/contexts/ScrollContext';
import { Analytics } from '@vercel/analytics/react';

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

const GA_ID = process.env.NEXT_PUBLIC_GTAG_ID; // set in Vercel

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='en'>
            <head>
                {/* Google Tag (gtag.js) */}
                <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy='afterInteractive' />
                <Script id='gtag-init' strategy='afterInteractive'>
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
                </Script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground overscroll-none antialiased`}>
                <ScrollProvider>
                    <NavigationBar />
                    {children}
                    <Footer />
                </ScrollProvider>
                <Analytics />
            </body>
        </html>
    );
};

export default Layout;
