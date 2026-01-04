import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FullStack from "./Pages/FullStack";
import TestAutomation from "./Pages/TestAutomation"
import MachineLearning from "./Pages/MachineLearning"
import OtherInterests from "./Pages/OtherInterests";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/full-stack" element={<FullStack />} />
      <Route path="/testing" element={<TestAutomation />} />
      <Route path="/ml" element={<MachineLearning />} />
      <Route path="/miscellaneous" element={<OtherInterests />} />
    </Routes>
  );
}

export default App;
