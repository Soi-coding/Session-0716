import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import PostDetailPage from "./page/PostDetailPage";
import Header from "./components/Header";
import HeaderDetail from "./components/HeaderDetail";

function App() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
        <Route
          path="/post/:postid"
          element={
            <>
              <HeaderDetail />
              <PostDetailPage />
            </>
          }
        />
      </Routes>
  );
}

export default App;
