import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLoader from "./components/Loaders/PageLoader.jsx";
import MainLayout from "./layout/MainLayout.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
