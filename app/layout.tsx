import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kavish Bishnoi | AI/ML Engineer & GenAI Developer",
  description: "Portfolio of Kavish Bishnoi – AI/ML Engineer skilled in Python, Scikit-learn, TensorFlow, PyTorch, LLMs, RAG, and Agentic AI architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter bg-brand-dark text-brand-light antialiased">
        {children}
      </body>
    </html>
  );
}
