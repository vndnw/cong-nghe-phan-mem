import Dashboard from "./layouts/dashboard";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Requirement1 from "./components/requirement1";
import Requirement2 from "./components/requirement2";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Requirement1 />} />
            <Route path="linh-vuc-chuyen-mon" element={<Requirement2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
