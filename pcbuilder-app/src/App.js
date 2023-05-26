
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Homepage/Home";
import AioCpuForm from "./components/AioCpu/AioCpuForm";

import SecondaryCards from "./components/SecondaryCards/SecondaryCards";
import Elements from "./components/Homepage/Elements";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Elements />}>
            <Route index element={<Home />} />
            <Route path="/aiocpu" element={<AioCpuForm />} />
            <Route path="/aiocpu/:id" element={<SecondaryCards />} />
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
