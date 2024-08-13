import { Inter } from "next/font/google";
import Header from "./Header";
import { ThemeProvider } from "next-themes";
import "@/app/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "A modern portfolio showcasing my projects and skills.",
  openGraph: {
    title: "My Portfolio",
    description: "A modern portfolio showcasing my projects and skills.",
    site_name: "My Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description: "A modern portfolio showcasing my projects and skills.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A modern portfolio showcasing my projects and skills."
        />
        <meta
          name="keywords"
          content="portfolio, web developer, projects, skills, frontend developer"
        />
        <meta name="author" content="Hasan HINÇAL" />
        <meta property="og:title" content="My Portfolio" />
        <meta
          property="og:description"
          content="A modern portfolio showcasing my projects and skills."
        />
        <meta property="og:url" content="https://www.example.com" />{" "}
        {/* Replace with your actual URL */}
        <meta
          property="og:image"
          content="https://www.example.com/path/to/your/image.jpg"
        />{" "}
        {/* Replace with your actual image URL */}
        <meta property="og:site_name" content="My Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Portfolio" />
        <meta
          name="twitter:description"
          content="A modern portfolio showcasing my projects and skills."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/path/to/your/image.jpg"
        />{" "}
        {/* Replace with your actual image URL */}
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div className="relative z-10 overflow-hidden px-3 min-h-screen bg-primary-light antialiased font-Montserrat dark:bg-gray-900 dark:text-white">
            <div className="w-full h-full">
              <Header />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
