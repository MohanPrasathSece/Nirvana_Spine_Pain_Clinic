import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollToHash } from "@/components/ScrollToHash";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <Header />
      <main className="flex-1 px-4 md:px-0">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
