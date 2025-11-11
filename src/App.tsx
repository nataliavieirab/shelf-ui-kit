import { Routes, Route } from "react-router-dom";
import MainLayout from "./presentation/Pages/main-layout";
import ComponentsPreviewPage from "./presentation/Pages/components-page";
import ProductsMainPage from "./presentation/Pages/Products/ProductsMainPage/products-main-page";
import AddNewProductPage from "./presentation/Pages/Products/AddNewProductPage/add-new-product-page";

function App() {
  return (
    <Routes>
      <Route path="/projects/:projectid" element={<MainLayout />}>
        <Route path="components" element={<ComponentsPreviewPage />} />
        <Route path="products" element={<ProductsMainPage />} />
        <Route path="addnewproduct" element={<AddNewProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
