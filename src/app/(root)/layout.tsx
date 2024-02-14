import Header from "@/components/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root">
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
