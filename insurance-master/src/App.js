import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import CarInsurance from "./components/insurance/CarInsurance";
import HealthInsurance from "./components/insurance/HealthInsurance";
import LifeInsurance from "./components/insurance/LifeInsurance";

function App() {
  return (
    <BrowserRouter >
      <Routes >
        <Route exact path="/insurance/car" element={<CarInsurance />} ></Route>
        <Route exact path="/insurance/health" element={<HealthInsurance />} ></Route>
        <Route exact path="/insurance/life" element={<LifeInsurance />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;