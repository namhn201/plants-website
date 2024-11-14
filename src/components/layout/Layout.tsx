import Header from "@/components/layout/Header";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <section className="flex flex-1 flex-col items-center gap-x-10 sm:p-0 md:p-10 lg:p-10 h-[100dvh]">
        {children}
      </section>
    </div>
  );
};
export default Layout;
