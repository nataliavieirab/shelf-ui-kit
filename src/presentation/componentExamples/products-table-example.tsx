import CustomDataTable from "../components/CustomDataTable/custom-data-table";
import { Avatar, IconButton, useTheme } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";

export interface Product {
  id: number;
  name: string;
  category: string;
  status: string;
  price: number;
  imageUrl: string;
}

export const sampleRows: Product[] = [
  {
    id: 1,
    name: "Uramaki",
    category: "Sushi Rolls",
    status: "Ativo",
    price: 29.99,
    imageUrl: "",
  },
  {
    id: 2,
    name: "Hossomaki",
    category: "Sushi Rolls",
    status: "Ativo",
    price: 26.99,
    imageUrl: "",
  },
  {
    id: 3,
    name: "California Roll",
    category: "Sushi Rolls",
    status: "Inativo",
    price: 31.99,
    imageUrl: "",
  },
  {
    id: 4,
    name: "Sake",
    category: "Bebidas",
    status: "Ativo",
    price: 15.5,
    imageUrl: "",
  },
  {
    id: 5,
    name: "Combo Especial",
    category: "Combos",
    status: "Ativo",
    price: 59.99,
    imageUrl: "",
  },
  {
    id: 6,
    name: "Temaki Philadelphia",
    category: "Temakis",
    status: "Ativo",
    price: 29.99,
    imageUrl: "",
  },
  {
    id: 7,
    name: "Temaki Hot",
    category: "Temakis",
    status: "Ativo",
    price: 29.99,
    imageUrl: "",
  },
  {
    id: 8,
    name: "Combo 50 peças",
    category: "Combos",
    status: "Ativo",
    price: 89.99,
    imageUrl: "",
  },
  {
    id: 9,
    name: "Dupla Joe Salmão",
    category: "Joes",
    status: "Ativo",
    price: 12.99,
    imageUrl: "",
  },
  {
    id: 10,
    name: "Dupla Niguiri Salmão",
    category: "Niguiris",
    status: "Ativo",
    price: 12.99,
    imageUrl: "",
  },
];

const columns = [
  { field: "name", headerName: "Produto", flex: 1 },
  { field: "category", headerName: "Categoria", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  {
    field: "price",
    headerName: "Preço",
    flex: 1,
    valueFormatter: (params: any) =>
      typeof params.value === "number"
        ? params.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        : "R$ 0,00",
  },
];

interface ProductTableProps {
  rows?: Product[];
  search?: string;
  selectedCategory?: string;
  selectedStatus?: string;
}

export default function ProductTable({
  rows = sampleRows,
  search = "",
  selectedCategory = "allCategories",
  selectedStatus = "allStatus",
}: ProductTableProps) {
  const filteredRows = rows.filter((row: Product) => {
    const matchesSearch = row.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "allCategories" || row.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "allStatus" ||
      row.status.toLowerCase() === selectedStatus.toLowerCase();
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const theme = useTheme();

  return (
    <CustomDataTable
      rows={filteredRows}
      columns={columns}
      renderFirstColumn={(params) => (
        <Avatar
          src={params.row.imageUrl}
          alt="Produto"
          sx={{ width: 38, height: 38, backgroundColor: "#E8E8E8" }}
        >
          <ImageIcon sx={{ color: "#4F4F4F" }} />
        </Avatar>
      )}
      renderActions={(params) => (
        <>
          <IconButton
            sx={{ color: theme.palette.secondary.main }}
            onClick={() => console.log("Editar", params.row.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            sx={{ color: theme.palette.error.main }}
            onClick={() => console.log("Bloquear", params.row.id)}
          >
            <BlockIcon />
          </IconButton>
        </>
      )}
    />
  );
}
