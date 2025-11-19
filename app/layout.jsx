import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "mlforgex - End-to-End Machine Learning Automation Package | Documentation",
  description: "mlforgex is a Python package for automated machine learning with support for Classification, Regression and NLP. Features include data preprocessing, model selection, hyperparameter tuning, and interactive dashboards.",
  keywords: "machine learning, automation, Python package, mlforgex, data preprocessing, model selection, classification, regression, NLP, hyperparameter tuning",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  icons: {
  icon: "/mlforgex_documentation/favicon.ico",
}

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
