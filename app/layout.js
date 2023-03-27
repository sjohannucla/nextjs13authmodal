"use client";
import head from "next/head";
import "../styles/globals.css";
import Header from "./Header";
import Banner from "./Banner";

import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Yo Commerce</title>
      </head>
      <body>
        <div className="bg-gray-100">
        <SessionProvider>
          {/* HEADER */}
          <div>
            <Header />
          </div>
          {/* BANNER */}
          <div>
            <Banner />
          </div> 
        
          {children}
        </SessionProvider>
        </div>
      </body>
     
    </html>
  );
}


