import { MaterialsPageWrapper } from "./styles";
import InventoryTable from "@/features/materials/components/InventoryTable";

const MaterialsPage = () => {
  return (
    <MaterialsPageWrapper>
      <h2>Materials</h2>
      <InventoryTable />
    </MaterialsPageWrapper>
  );
};

export default MaterialsPage;
