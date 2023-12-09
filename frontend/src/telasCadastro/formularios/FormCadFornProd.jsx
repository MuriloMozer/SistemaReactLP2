import { useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col, FloatingLabel, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ESTADO from '../../recursos/estado';
import { associarFornecedorProduto, buscarFornecedoresProdutos, atualizarAssociacaoFornecedorProduto } from '../../redux/fornProdReducer';
import { toast } from 'react-toastify';

export default function FormCadFornProd(props) {
  const fornecedorProdutoVazio = {
    forn_cnpj: '',
    prod_codigo: 0,
  };

  const [fornecedorProduto, setFornecedorProduto] = useState(fornecedorProdutoVazio);
  const [formValidado, setFormValidado] = useState(false);

  const { estado: estadoForn, mensagem: mensagemForn, fornecedores } = useSelector((state) => state.fornecedorProduto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarFornecedoresProdutos());
  }, [dispatch]);

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setFornecedorProduto({ ...fornecedorProduto, [componente.name]: componente.value });
  }

  function manipularSubmissao(e) {
    const form = e.currentTarget;
    if (form.checkValidity()) {
        if(!props.modoEdicao){
            dispatch(associarFornecedorProduto(fornecedorProduto));
        }
        else{
            dispatch(atualizarAssociacaoFornecedorProduto(fornecedorProduto));
            props.setModoEdicao(false);
            props.setFornecedorParaEdicao(fornecedorProdutoVazio);
        }
      setFornecedorProduto(fornecedorProdutoVazio);
      setFormValidado(false);
    } else {
      setFormValidado(true);
    }

    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <Container>
      {estadoForn === ESTADO.ERRO && (
        toast.error(({ closeToast }) => (
          <div>
            <p>{mensagemForn}</p>
          </div>
        ))
      )}
      {estadoForn === ESTADO.PENDENTE && (
        toast(({ closeToast }) => (
          <div>
            <Spinner animation="border" role="status"></Spinner>
            <p>Processando a requisição...</p>
          </div>
        ))
      )}

      <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Fornecedor CNPJ:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o CNPJ do fornecedor"
                  id="forn_cnpj"
                  name="forn_cnpj"
                  onChange={manipularMudancas}
                  value={fornecedorProduto.forn_cnpj}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o CNPJ do fornecedor!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Código do Produto:" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Informe o código do produto"
                  id="prod_codigo"
                  name="prod_codigo"
                  onChange={manipularMudancas}
                  value={fornecedorProduto.prod_codigo}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">Informe o código do produto!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} offset={5} className="d-flex justify-content-end">
            <Button type="submit" variant={'primary'}>
              Associar
            </Button>
          </Col>
          <Col md={6} offset={5}>
            <Button
              type="button"
              variant={'secondary'}
              onClick={() => {
                props.exibirFormulario(false);
              }}
            >
              Voltar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}