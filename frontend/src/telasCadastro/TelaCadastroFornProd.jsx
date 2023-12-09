import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadFornecedorProdutos from "./formularios/FormCadFornecedorProdutos";
import TabelaFornecedorProdutos from "./tabelas/TabelaFornecedorProdutos";
import { useState } from "react";

export default function TelaCadastroFornProd(props) {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [fornecedorProdutoParaEdicao, setFornecedorProdutoParaEdicao] = useState({
    forn_cnpj: '',
    prod_codigo: 0
  });
  const [modoEdicao, setModoEdicao] = useState(false);

  return (
    <Container>
      <Pagina>
        {
          exibirFormulario ? <FormCadFornecedorProdutos exibirFormulario={setExibirFormulario}
            fornecedorProdutoParaEdicao={fornecedorProdutoParaEdicao}
            setFornecedorProdutoParaEdicao={setFornecedorProdutoParaEdicao}
            modoEdicao={modoEdicao}
            setModoEdicao={setModoEdicao}
          />
            :
            <TabelaFornecedorProdutos exibirFormulario={setExibirFormulario}
              fornecedorProdutoParaEdicao={fornecedorProdutoParaEdicao}
              setFornecedorProdutoParaEdicao={setFornecedorProdutoParaEdicao}
              modoEdicao={modoEdicao}
              setModoEdicao={setModoEdicao}
            />
        }
      </Pagina>
    </Container>
  )
}
