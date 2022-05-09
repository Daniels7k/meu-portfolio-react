import Header from "./components/Header";
import Foto from "./components/Foto";
import SobreMim from "./components/SobreMim";
import MeusProjetos from "./components/MeusProjetos";

import "./App.css"
import Contatos from "./components/Contatos";


function App() {
  return (
    <div className="App">
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header/>
      <Foto/>
      <SobreMim/>
      <MeusProjetos/>
      <Contatos/>
    </div>
  );
}

export default App;
