import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://spandana-portfolio.vercel.app"),
  title: `${profile.name} — Software Engineer`,
  description:
    "Portfolio of Murala Chinni Spandana — Software Engineer, Full Stack Developer & Cybersecurity enthusiast. React, Node.js, Spring Boot, Java, AI/ML.",
  keywords: [
    "Murala Chinni Spandana",
    "Software Engineer",
    "Full Stack Developer",
    "Java Developer",
    "React Developer",
    "Spring Boot",
    "Cybersecurity",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Software Engineer`,
    description: "Full Stack Developer, Backend Engineer & AI enthusiast. Explore my projects, experience, and skills.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Engineer`,
    description: "Full Stack Developer, Backend Engineer & AI enthusiast.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased noise">
        <ThemeProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <ScrollProgress />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
