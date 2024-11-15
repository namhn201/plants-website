import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <section className="flex flex-1 flex-col items-center gap-x-10 sm:p-0 h-[100dvh] ">
        {children}
      </section>
      <Footer />
    </div>
  );
};
export default Layout;
