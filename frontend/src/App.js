import TelaCadastroCliente from './Telas/telaCadastroCliente';
import TelaCadastroProduto from './Telas/telaCadastroProduto';
import TelaCadastroFornecedor from './Telas/telaCadastroFornecedor';
import TelaCadastroCategoria from './Telas/telaCadastroCategoria';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TelaMenu from './Telas/telaMenu';
import Tela404 from './Telas/tela404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            //Os caminhos (paths) devem ser organizados do mais específico para o mais geral
          }
          <Route path='/clientes' element={<TelaCadastroCliente/>}/>
          <Route path='/produtos' element={<TelaCadastroProduto/>}/>
          <Route path='/fornecedores' element={<TelaCadastroFornecedor/>}/>
          <Route path='/categorias' element={<TelaCadastroCategoria/>}/>
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
