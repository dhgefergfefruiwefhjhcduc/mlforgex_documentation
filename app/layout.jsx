import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const themeColor = "#000000";
export const metadata = {
  title: " mlforgex Documentation | Automated Machine Learning for Python",
  description: "mlforgex automates data science with Python. Quickly build, tune, and visualize machine learning models for classification, regression, and NLP—all in one toolkit.",
 keywords: "automated machine learning, Python, mlforgex, data science, model tuning, NLP, classification, regression, dashboards",
  icons: {
    icon: "/mlforgex_documentation/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="wnpWA0t2c0OfVDcIrhTSV_69F07QsdKwix1-ogNo2v8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
