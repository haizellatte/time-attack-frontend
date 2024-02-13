import Header from "@/components/Header";
import ChildrenType from "@/types/ChildrenType";

function RootLayout({ children }: ChildrenType) {
  return (
    <div id="root">
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
