// components/layouts/Layout.tsx
import React from "react";
import { LayoutProps } from "@/interface";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      {children}
    </div>
  );
};

export default Layout;

