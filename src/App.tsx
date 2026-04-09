import { BrowserRouter, Route, Routes } from "react-router";
import { PageComponent } from "./pages/PageComponent";
import { LayoutMain } from "./pages/LayoutMain";
import { PageHome } from "./pages/PageHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/components" element={<PageComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
