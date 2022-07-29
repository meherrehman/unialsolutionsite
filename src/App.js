import { useState } from "react";
import HeaderText from "./pages/Home/HeaderText";
import Navbar from "./components/Header/Navbar/Navbar";
import Section from "./components/Section/Section"
import Technology from "./pages/Home/Technologies/Technology";
import Solutions from "./pages/Home/Solutions/Solutions";
function App() {
  const [selected, setSelected] = useState("Blockchain Development");
  return (
    <div className="App">
      <Navbar />
      <HeaderText style={{ marginBottom: "30%" }} />
      <Section selected={selected} setSelected={setSelected} />
      <Technology />
      <Solutions />
    </div>
  );
}

export default App;
