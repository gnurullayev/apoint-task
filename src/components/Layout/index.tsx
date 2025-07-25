import { LayoutWrapper } from "./style";
import { useLocation } from "react-router-dom";
import { CRM } from "@/constants/routes";
import type { FC, ReactNode } from "react";
import CrmLayoutInner from "./CrmLayoutInner";

interface ILayout {
  children: ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
  const router = useLocation();
  const isCrmPath = router.pathname.includes(CRM);

  return (
    <LayoutWrapper>
      {isCrmPath ? <CrmLayoutInner>{children}</CrmLayoutInner> : children}
    </LayoutWrapper>
  );
};

export default Layout;
