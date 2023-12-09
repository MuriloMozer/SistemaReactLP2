import { Button, Container, Spinner, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { buscarFornecedoresProdutos, removerAssociacaoFornecedorProduto } from "../../redux/fornProdReducer";
import ESTADO from "../../recursos/estado";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function TabelaFornProd(props){

  const { estado, mensagem, fornecedoresProdutos } = useSelector(state => state.fornecedor_produto);
  const dispatch = useDispatch();

  function excluirFornecedorProduto(fornecedorProduto) {
    if (window.confirm('Deseja realmente excluir essa associação fornecedor-produto?')) {
      dispatch(removerAssociacaoFornecedorProduto(fornecedorProduto));
    }
  }

  function editarFornecedorProduto(fornecedorProduto){
    props.setFornecedorProdutoParaEdicao(fornecedorProduto);
    props.setModoEdicao(true);
    props.exibirFormulario(true);
    console.log("Editar associação fornecedor-produto", fornecedorProduto);
  }

  useEffect(() => {
    dispatch(buscarFornecedoresProdutos());
  }, [dispatch]);

  if (estado === ESTADO.PENDENTE) {
    toast(({ closeToast }) =>
      <div>
        <Spinner animation="border" role="status"></Spinner>
        <p>Buscando fornecedores de produtos....</p>
      </div>
      , { toastId: estado });
  }
  else if (estado === ESTADO.ERRO) {
    toast.error(({ closeToast }) =>
      <div>
        <p>{mensagem}</p>
      </div>
      , { toastId: estado });
  }
  else {
    toast.dismiss();
    return (
      <Container>
        <Button type="button" onClick={() => {
          // Implemente a lógica para exibir o formulário de cadastro
          console.log("Exibir formulário de cadastro");
        }}>Nova Associação Fornecedor-Produto</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fornecedor CNPJ</th>
              <th>Produto Código</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              fornecedoresProdutos.map((fornecedorProduto) => {
                return (<tr key={`${fornecedorProduto.forn_cnpj}-${fornecedorProduto.prod_codigo}`}>
                  <td>{fornecedorProduto.forn_cnpj}</td>
                  <td>{fornecedorProduto.prod_codigo}</td>
                  <td>
                    <Button variant="danger" onClick={() => {
                      excluirFornecedorProduto(fornecedorProduto);
                    }}>
                      Excluir
                    </Button>{' '}
                    <Button onClick={() => {
                      editarFornecedorProduto(fornecedorProduto);
                    }} variant="warning">
                      Editar
                    </Button>
                  </td>
                </tr>)
              })
            }
          </tbody>
        </Table>
      </Container>
    );
  }
}