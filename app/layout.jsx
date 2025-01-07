"use client";

import React from "react";
import "@styles/globals.css";

import { usePathname } from "next/navigation";
import Section_1_Community from "@components/section_1_community";
import PawPal from "@components/pawpal_features";
import Get_In_Touch from "@components/get_in_touch_section";
import Footer from "@components/footer";

const RootLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <html lang="en">
<body className={pathname === "/dashboard" || pathname === "/signup" ? "dashboard-body" : "default-body"}>
        <main>{children}</main>

        {/* Render these sections only on the landing page */}
        {pathname === "/" && (
          <>
            <Section_1_Community />
            <PawPal />
            <Get_In_Touch />
            <Footer />

          </>
        )}

       
      </body>
    </html>
  );
};

export default RootLayout;
