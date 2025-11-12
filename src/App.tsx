import { Routes, Route } from "react-router-dom";
import ComponentsPreviewPage from "./presentation/pages/components-page";
import MainLayout from "./presentation/pages/main-layout";

function App() {
  return (
    <Routes>
      <Route path="/projects" element={<MainLayout />}>
        <Route path="components" element={<ComponentsPreviewPage />} />
      </Route>
    </Routes>
  );
}

export default App;
