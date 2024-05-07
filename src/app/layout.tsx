import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import type { Metadata } from 'next'
import Header from './layout/Header'
import Footer from './layout/Footer';
import Head from 'next/head';
import { parseUrlAndAddTags } from './utils/parseTags';

export const metadata: Metadata = {
  title: 'UPSC AKHADA',
  description: 'Relevant . Quality . Simplified',
  icons: {
    icon: {
      url: "/favicon.ico",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        {/* Add any other meta tags here */}
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PELZ9BELRS"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PELZ9BELRS');
            `,
          }}
        />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
