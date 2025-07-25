import React, { useState } from "react";
import { TableWrapper, TableHeader, TableRow, TableCell } from "./styles";
import type { FlattenedItem } from "../../types";

interface Props {
  tableData: FlattenedItem[];
}

const TreeRow: React.FC<{ item: FlattenedItem; level?: number }> = ({
  item,
  level = 0,
}) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <>
      <TableRow
        style={{ backgroundColor: open && hasChildren ? "#f5f5f5" : "" }}
      >
        <TableCell
          colSpan={1}
          style={{ paddingLeft: `${level * 20}px`, textAlign: "left" }}
          className="column-name"
        >
          {hasChildren && (
            <button onClick={() => setOpen(!open)}>{open ? "➖" : "➕"}</button>
          )}
          {item.name}
        </TableCell>
        <TableCell>{item.color?.name || ""}</TableCell>
        <TableCell>{item.unit || ""}</TableCell>
        <TableCell>{item.code || ""}</TableCell>
        <TableCell>{item.last_price?.toLocaleString() || ""}</TableCell>
        <TableCell>{item.remind_start_amount || ""}</TableCell>
        <TableCell>{item.remind_start_sum?.toLocaleString() || ""}</TableCell>
        <TableCell>{item.remind_income_amount || ""}</TableCell>
        <TableCell>{item.remind_income_sum?.toLocaleString() || ""}</TableCell>
        <TableCell>{item.remind_outgo_amount || ""}</TableCell>
        <TableCell>{item.remind_outgo_sum?.toLocaleString() || ""}</TableCell>
        <TableCell>{item.remind_end_amount || ""}</TableCell>
        <TableCell>{item.remind_end_sum?.toLocaleString() || ""}</TableCell>
      </TableRow>

      {open &&
        hasChildren &&
        item.children!.map((child) => (
          <TreeRow key={child.material_id} item={child} level={level + 1} />
        ))}
    </>
  );
};

const TreeTable: React.FC<Props> = ({ tableData }) => {
  return (
    <TableWrapper>
      <thead>
        <TableHeader>
          <th rowSpan={2}>Ism</th>
          <th rowSpan={2}>Rang</th>
          <th rowSpan={2}>Birlik</th>
          <th rowSpan={2}>Element</th>
          <th rowSpan={2}>Buxgalteriya narxi</th>
          <th colSpan={2}>Davr boshidagi balans</th>
          <th colSpan={2}>Daromad</th>
          <th colSpan={2}>Xarajat</th>
          <th colSpan={2}>Davr oxiridagi qoldiq</th>
        </TableHeader>
        <TableHeader>
          <th>Miqdori</th>
          <th>Summa</th>
          <th>Miqdori</th>
          <th>Summa</th>
          <th>Miqdori</th>
          <th>Summa</th>
          <th>Miqdori</th>
          <th>Summa</th>
        </TableHeader>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <TreeRow key={item.material_id} item={item} />
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default TreeTable;
