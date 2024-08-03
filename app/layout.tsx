"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout/Layout";
import { RecoilRoot } from 'recoil';
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={inter.className}>
        <RecoilRoot>
          <Layout>
            {children}
          </Layout>
        </RecoilRoot>
      </body>
    </html>
  );
}
