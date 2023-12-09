import { useState } from 'react';
import { toast } from 'react-toastify';
import { Container, Form, Row, Col, Button, FloatingLabel, Spinner } from 'react-bootstrap';
import { adicionarFornecedor, atualizarFornecedor } from '../../redux/fornecedorReducer';
import { useSelector, useDispatch } from 'react-redux';
import ESTADO from '../../recursos/estado';

export default function FormCadFornecedor(props) {
    const fornecedorVazio = {
        cnpj: '',
        nome: '',
        endereco: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: ''
    };

    const estadoInicialFornecedor = props.fornecedorParaEdicao;
    const [fornecedor, setFornecedor] = useState(estadoInicialFornecedor);
    const [formValidado, setFormValidado] = useState(false);
    const { estado, mensagem } = useSelector((state) => state.fornecedor);
    const dispatch = useDispatch();

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setFornecedor({ ...fornecedor, [componente.name]: componente.value });
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                dispatch(adicionarFornecedor(fornecedor));
            } else {
                dispatch(atualizarFornecedor(fornecedor));
                props.setModoEdicao(false);
                props.setFornecedorParaEdicao(fornecedorVazio);
            }
            setFornecedor(fornecedorVazio);
            setFormValidado(false);
        } else {
            setFormValidado(true);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <h2>Cadastro de Fornecedor</h2>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="CNPJ:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Informe o CNPJ do fornecedor"
                                    id="cnpj"
                                    name="cnpj"
                                    value={fornecedor.cnpj}
                                    onChange={manipularMudancas}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Informe o CNPJ do fornecedor!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Informe o nome do fornecedor"
                                    id="nome"
                                    name="nome"
                                    value={fornecedor.nome}
                                    onChange={manipularMudancas}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Informe o Nome do fornecedor!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Rua xxxxxx ou Av. xxxxx"
                                    id="endereco"
                                    name="endereco"
                                    value={fornecedor.endereco}
                                    onChange={manipularMudancas}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Informe o Endereço do fornecedor!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Bairro:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="xxxxx"
                                    id="bairro"
                                    name="bairro"
                                    value={fornecedor.bairro}
                                    onChange={manipularMudancas}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Informe o Bairro do fornecedor!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <Form.Group>
                            <FloatingLabel
                                label="Cidade:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Cidade de origem do fornecedor" 
                                    id="cidade" 
                                    name="cidade" 
                                    onChange={manipularMudancas}
                                    value={fornecedor.cidade}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a Cidade do Forncedor!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select 
                                aria-label="Unidades Federativas brasileiras" 
                                id='uf'
                                name='uf'
                                onChange={manipularMudancas}
                                value={fornecedor.uf}
                                requerid>
                                <option value="SP" selected>São Paulo</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <Form.Group>
                            <FloatingLabel
                                label="CEP:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="CEP do fornecedor" 
                                    id="cep" 
                                    name="cep" 
                                    onChange={manipularMudancas}
                                    value={fornecedor.cep}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CEP do Forncedor!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => props.exibirFormulario(false)}>
                            Voltar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}