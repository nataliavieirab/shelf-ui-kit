import React from "react";
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";

export type CustomDataTableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  renderFirstColumn?: (params: GridRenderCellParams) => React.ReactNode;
  renderActions?: (params: GridRenderCellParams) => React.ReactNode;
};

export type DynamicColumnConfig = {
  field: string;
  headerName: string;
  width: string;
  headerAlign: "center";
  sortable: boolean;
  filterable: boolean;
  renderCell: (params: GridRenderCellParams) => React.ReactNode;
};
