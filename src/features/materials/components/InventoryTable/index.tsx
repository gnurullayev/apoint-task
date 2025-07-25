import { useMemo } from "react";
import TreeTable from "../TreeTable";
import { flattenTreeTableData } from "../../../materials/lib";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useMaterials } from "../../hooks";

const InventoryTable = () => {
  const { data } = useMaterials();

  const flatData = useMemo(() => flattenTreeTableData(data), [data]);

  return (
    <ErrorBoundary>
      <TreeTable tableData={flatData} />
    </ErrorBoundary>
  );
};

export default InventoryTable;
