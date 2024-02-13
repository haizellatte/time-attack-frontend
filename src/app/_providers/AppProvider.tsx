import { AuthProvider } from "@/contexts/auth.context";
import { ReduxProvider } from "@/redux/store";
import ChildrenType from "@/types/ChildrenType";
import ReactQueryProvider from "./reactQuery.provider";

function AppProvider({ children }: ChildrenType) {
  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <AuthProvider>{children}</AuthProvider>
      </ReduxProvider>
    </ReactQueryProvider>
  );
}
export default AppProvider;
