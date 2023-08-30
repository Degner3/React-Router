import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { BlogPage } from "./Pages/BlogPage";
import { NoPage } from "./Pages/NoPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
