import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import CarInsurance from "./components/insurance/CarInsurance";
import HealthInsurance from "./components/insurance/HealthInsurance";
import LifeInsurance from "./components/insurance/LifeInsurance";
import CarInsuranceForm  from "./components/forms/CarInsuranceForm";
import HealthInsuranceForm  from "./components/forms/HealthInsuranceForm";
import LifeInsuranceForm  from "./components/forms/LifeInsuranceForm";
function App() { 
  return (
    <BrowserRouter >
      <Routes >
        <Route exact path="/insurance/car" element={<CarInsurance />} ></Route>
        <Route exact path="/insurance/health" element={<HealthInsurance />} ></Route>
        <Route exact path="/insurance/life" element={<LifeInsurance />} ></Route>
        <Route exact path="/insurance/car-forms" element={<CarInsuranceForm />} ></Route>
        <Route exact path="/insurance/health-forms" element={<HealthInsuranceForm />} ></Route>
        <Route exact path="/insurance/life-forms" element={<LifeInsuranceForm />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;