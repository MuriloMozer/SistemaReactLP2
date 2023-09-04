import TelaCadastroCliente from './Telas/telaCadastroCliente';
import TelaCadastroProduto from './Telas/telaCadastroProduto';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TelaMenu from './Telas/telaMenu';
import Tela404 from './Telas/tela404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            //Os camuinhos (paths) devem ser organizados do mais específico para o mais geral
          }
          <Route path='/clientes' element={<TelaCadastroCliente/>}/>
          <Route path='/produtos' element={<TelaCadastroProduto/>}/>
          {
            // .....demais telas de cadastro
          }
          <Route path='/' element={<TelaMenu/>}/>
          <Route path='*' element={<Tela404/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
