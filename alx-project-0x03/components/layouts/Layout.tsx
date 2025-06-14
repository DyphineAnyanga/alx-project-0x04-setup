import React from "react";
import Head from "next/head";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children, title = "Splash App" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A powerful AI-powered platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col">
        {/* You can add Header component here if needed */}
        <div className="flex-grow">{children}</div>
        {/* You can add Footer component here if needed */}
      </main>
    </>
  );
};

export default Layout;
