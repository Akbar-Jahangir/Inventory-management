import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DisplayPage from "../layout/DisplayLayout";
import Layout from "../layout/AppInsideLayout";
import InventoryPage from "../pages/InventoryPage";
import ProductDetail from "../pages/ProductDetail";
import ErrorPage from "../pages/ErrorPage";
import Vendors from "../pages/VendorsPage";

function HomeRouter() {
  return (
    <div className="w-[100%] font-Inter dark:bg-[#121212]">
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<DisplayPage />} />

          {/* Layout-protected routes */}
          <Route path="/" element={<Layout />}>
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default HomeRouter;
