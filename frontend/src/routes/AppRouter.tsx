import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CreateMenuPage from "../pages/CreateMenuPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="create-menu" element={<CreateMenuPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
