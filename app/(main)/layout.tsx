import Header from "@app/components/layout/Header";
import Footer from "@app/components/layout/Footer";

import Consultant from "../components/layout/Consultant";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen grid grid-rows-[auto_1fr]">
        <Header></Header>
        {children}
      </div>
      <Consultant />

      <Footer></Footer>
    </>
  );
}
