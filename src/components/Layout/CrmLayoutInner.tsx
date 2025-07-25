import type { FC, ReactNode } from "react";

interface ICrmLayoutInner {
  children: ReactNode;
}

const CrmLayoutInner: FC<ICrmLayoutInner> = ({ children }) => {
  return (
    <div className="container">
      <div className="inner">{children}</div>
    </div>
  );
};

export default CrmLayoutInner;
