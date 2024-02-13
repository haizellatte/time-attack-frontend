import { AuthProvider } from "@/contexts/auth.context";
import ChildrenType from "@/types/ChildrenType";
import ReactQueryProvider from "./reactQuery.provider";

function AppProvider({ children }: ChildrenType) {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryProvider>
  );
}
export default AppProvider;
