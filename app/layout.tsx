import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: 'Harshita Loomba',
  description: 'Portfolio of Harshita Loomba - Computer Engineering student at Thapar Institute specializing in Machine Learning, Data Analytics, and Computer Vision. Experienced in data-driven decision making and business intelligence.',
  keywords: [
    'Harshita Loomba',
    'Machine Learning',
    'Data Analytics',
    'Computer Vision',
    'Computer Engineering',
    'React.js',
    'Python',
    'MongoDB',
    'MySQL',
    'Thapar Institute',
    'AIESEC',
    'Business Intelligence',
    'Data-Driven Decision Making',
    'Web Development',
    'Portfolio',
  ],
  authors: [{ name: 'Harshita Loomba' }],
  creator: 'Harshita Loomba',
  generator: 'v0.app',
  openGraph: {
    title: 'Harshita Loomba | Computer Engineering Student & ML Enthusiast',
    description: 'Portfolio showcasing machine learning projects, data analytics experience, and leadership in AIESEC',
    type: 'website',
    locale: 'en_US',
    siteName: 'Harshita Loomba Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshita Loomba | ML Enthusiast & Data Analytics',
    description: 'Computer Engineering student specializing in machine learning and data-driven problem solving',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/logo_ak.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/logo_ak.png',
    shortcut: '/logo_ak.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
