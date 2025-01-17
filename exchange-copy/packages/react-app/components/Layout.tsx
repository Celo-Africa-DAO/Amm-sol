import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-gypsum overflow-hidden flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;