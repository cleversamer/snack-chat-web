import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import NotFoundPage from "pages/NotFoundPage";
import { ROUTES } from "client";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.CLIENT.NOT_FOUND} element={<NotFoundPage />} />
      <Route path={ROUTES.CLIENT.HOME} element={<HomePage />} />
      <Route path={ROUTES.CLIENT.LOGIN} element={<LoginPage />} />
      <Route path="/" element={<Navigate to={ROUTES.CLIENT.HOME} replace />} />
      <Route
        path="*"
        element={<Navigate to={ROUTES.CLIENT.NOT_FOUND} replace />}
      />
    </Routes>
  );
};

export default App;
