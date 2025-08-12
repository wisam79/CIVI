import type { Metadata } from "next";
import { AppProvider } from "@/contexts/app-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Cairo, Tajawal, Almarai, Inter, Roboto, Open_Sans, Lato, Amiri as AmiriFont } from 'next/font/google'

export const metadata: Metadata = {
  title: "CeeVee",
  description: "Build your professional CV with ease.",
  manifest: "/manifest.json",
};

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
})

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-almarai',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

const amiri = AmiriFont({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className={`${cairo.variable} ${tajawal.variable} ${almarai.variable} ${inter.variable} ${roboto.variable} ${openSans.variable} ${lato.variable} ${amiri.variable} font-sans antialiased`}>
        <AppProvider>
          {children}
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
