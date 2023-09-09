import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import NotFoundPage from "pages/NotFoundPage";
import { ROUTES } from "client";
import AuthContext from "context/AuthContext";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Routes>
        {!!user && <Route path={ROUTES.CLIENT.HOME} element={<HomePage />} />}
        {!user && <Route path={ROUTES.CLIENT.LOGIN} element={<LoginPage />} />}
        <Route path={ROUTES.CLIENT.NOT_FOUND} element={<NotFoundPage />} />
        {user ? (
          <Route
            path="/"
            element={<Navigate to={ROUTES.CLIENT.HOME} replace />}
          />
        ) : (
          <Route
            path="/"
            element={<Navigate to={ROUTES.CLIENT.LOGIN} replace />}
          />
        )}
        <Route
          path="*"
          element={<Navigate to={ROUTES.CLIENT.NOT_FOUND} replace />}
        />
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
