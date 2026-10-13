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
  title: 'Harshita Loomba | Software Developer & Computer Engineering',
  description: 'Portfolio of Harshita Loomba - Computer Engineering student at Thapar Institute and Software Development Intern at PSPCL. Specializing in distributed microservices (Go, Next.js, PostgreSQL), predictive ML pipelines, and cloud systems.',
  keywords: [
    'Harshita Loomba',
    'Software Engineer',
    'Full-Stack Developer',
    'Computer Engineering',
    'PSPCL',
    'HOSMAS',
    'Next.js',
    'Go',
    'PostgreSQL',
    'Docker',
    'Machine Learning',
    'Python',
    'AWS',
    'Thapar Institute',
    'AIESEC',
    'LeetCode',
    'Portfolio',
  ],
  authors: [{ name: 'Harshita Loomba' }],
  creator: 'Harshita Loomba',
  generator: 'v0.app',
  openGraph: {
    title: 'Harshita Loomba | Software Developer & Full-Stack Engineer',
    description: 'Portfolio showcasing microservices architectures, data analytics pipelines, and technical leadership at PSPCL & AIESEC.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Harshita Loomba Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshita Loomba | Software Developer',
    description: 'Computer Engineering student at Thapar Institute specializing in distributed systems and data engineering.',
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
