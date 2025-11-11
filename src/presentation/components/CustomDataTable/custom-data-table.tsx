import { DataGrid, GridPaginationModel } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { CustomDataTableProps } from "./custom-data-table.types";
import { useCustomDataTable } from "./use-custom-data-table";
import { useState } from "react";

export default function CustomDataTable({
  rows,
  columns,
  renderFirstColumn,
  renderActions,
}: CustomDataTableProps) {
  const { dynamicColumns } = useCustomDataTable({
    columns,
    renderFirstColumn,
    renderActions,
  });

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 15,
  });

  const headerHeight = 44;
  const rowHeight = 50;
  const footerHeight = 56;

  const visibleRows = Math.min(rows.length, paginationModel.pageSize);
  const gridHeight = headerHeight + rowHeight * visibleRows + footerHeight;

  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={dynamicColumns}
        rowHeight={50}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={(model) => setPaginationModel(model)}
        pageSizeOptions={[15, 50, 100]}
        checkboxSelection={false}
        disableColumnMenu
        disableRowSelectionOnClick
        disableVirtualization
      />
    </Box>
  );
}
