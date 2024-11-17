import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100dvh] min-w-[250px]">
      <Header />
      <section className=" Layout flex flex-1 flex-col items-center gap-x-10 sm:p-0">
        {children}
      </section>
      <Footer />
    </div>
  );
};
export default Layout;
