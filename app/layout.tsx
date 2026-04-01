import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rana Mudassir Ali | AI/ML Engineer & Double Gold Medalist",
  description: "Double Gold Medalist AI/ML Engineer specializing in RAG systems, LLMs, and cloud-native applications. 4.0/4.0 CGPA from COMSATS.",
  metadataBase: new URL("https://rana-mudassir-ali.vercel.app"), // Replace with your actual domain
  openGraph: {
    title: "Rana Mudassir Ali - AI/ML Engineer & Double Gold Medalist",
    description: "Portfolio of AI/ML Engineer specializing in RAG systems, LLMs, and cloud-native applications. 4.0/4.0 CGPA from COMSATS.",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Rana Mudassir Ali - AI/ML Engineer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://rana-mudassir-ali.vercel.app", // Replace with your actual domain
  },
  twitter: {
    card: "summary_large_image",
    title: "Rana Mudassir Ali - AI/ML Engineer & Double Gold Medalist",
    description: "Portfolio of AI/ML Engineer specializing in RAG systems, LLMs, and cloud-native applications.",
    images: ["/profile.jpg"],
    creator: "@ranamudassirali",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider>
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="skip-link"
          >
            Skip to main content
          </a>
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
