import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { wrapCentered } from "./custom-data-table.styles";
import { CustomDataTableProps } from "./custom-data-table.types";

export function useCustomDataTable({
  columns,
  renderFirstColumn,
  renderActions,
}: Pick<
  CustomDataTableProps,
  "columns" | "renderFirstColumn" | "renderActions"
>) {
  const createDynamicColumns = (): GridColDef[] => {
    const dynamicColumns: GridColDef[] = columns.map((col) => ({
      ...col,
      align: "center",
      headerAlign: "center",
    }));

    if (renderFirstColumn) {
      dynamicColumns.unshift({
        field: "__first__",
        headerName: "Imagem",
        width: 200,
        headerAlign: "center",
        sortable: false,
        filterable: false,
        renderCell: (params: GridRenderCellParams) =>
          wrapCentered(renderFirstColumn(params)),
      });
    }

    if (renderActions) {
      dynamicColumns.push({
        field: "__actions__",
        headerName: "Ações",
        width: 200,
        headerAlign: "center",
        sortable: false,
        filterable: false,
        renderCell: (params: GridRenderCellParams) =>
          wrapCentered(renderActions(params)),
      });
    }

    return dynamicColumns;
  };

  return {
    dynamicColumns: createDynamicColumns(),
  };
}
