import type { Metadata } from "next";
// We are linking the font directly in the <head> to resolve the import issue.
// import { Inter } from "next/font/google"; 

// The globals.css import is removed as it's not being resolved by the preview environment.
// Styles are now handled by the Tailwind CDN and a <style> tag below.
// import "./globals.css";

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
    <html lang="en">
      <head>
        {/*
          The Next.js font optimization is replaced with a direct link 
          to Google Fonts for compatibility with the preview environment.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        
        {/*
          Tailwind CSS is loaded via CDN to ensure styles are applied in the preview.
          In a real Next.js project, this would be handled by the postcss configuration.
        */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/*
          The inline script content is now set using dangerouslySetInnerHTML,
          which is the correct React pattern for this use case.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      'brand-dark': '#1E1E1F',
                      'brand-purple': '#8377D1',
                      'brand-orange': '#F79824',
                      'brand-light': '#EBEBEB',
                    },
                    fontFamily: {
                      inter: ['Inter', 'sans-serif'],
                    },
                  },
                },
              };
            `,
          }}
        />
        
        {/*
          Global styles like the custom scrollbar are also handled with
          dangerouslySetInnerHTML for consistency and to prevent potential warnings.
        */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              ::-webkit-scrollbar {
                width: 8px;
              }
              ::-webkit-scrollbar-track {
                background: #1E1E1F;
              }
              ::-webkit-scrollbar-thumb {
                background: #8377D1;
                border-radius: 10px;
              }
              ::-webkit-scrollbar-thumb:hover {
                background: #6a5faf;
              }
            `,
          }}
        />
      </head>
      
      {/* The font-inter class now works because of the Tailwind config script above.
        The background and text colors are also applied using Tailwind classes.
      */}
      <body className="font-inter bg-brand-dark text-brand-light antialiased">
        {children}
      </body>
    </html>
  );
}

