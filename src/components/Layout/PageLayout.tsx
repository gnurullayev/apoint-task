import type { ReactNode } from "react";
import ErrorBoundary from "../ErrorBoundary";

interface IPageLayoutProps {
  children: ReactNode;
  metaTitle?: string;
}
const PageLayout = ({ children }: IPageLayoutProps) => {
  return (
    <div>
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );
};

export default PageLayout;
