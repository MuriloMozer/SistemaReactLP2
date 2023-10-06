import React, { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function FormCadFornecedores(props) {
    const estadoInicialFornecedor = props.fornecedorParaEdicao;
    const [fornecedor, setFornecedor] = useState(estadoInicialFornecedor);
    const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setFornecedor({ ...fornecedor, [componente.name]: componente.value });
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
            // Verifica se o D.U.N.S já existe na lista de fornecedores
            const fornecedorExistente = props.listaFornecedores.find(
                (itemFornecedor) => itemFornecedor.duns === fornecedor.duns
            );
            if (fornecedorExistente) {
                props.setMensagem("Este D.U.N.S já está cadastrado.");
                props.setTipoMensagem("danger");
                props.setMostrarMensagem(true);
            } else {
                props.setListaFornecedores([...props.listaFornecedores, fornecedor]);
                props.setMensagem("Fornecedor cadastrado com sucesso!");
                props.setTipoMensagem("success");
                props.setMostrarMensagem(true);
            }
            } else {
            props.setListaFornecedores([
                ...props.listaFornecedores.filter(
                (itemFornecedor) => itemFornecedor.duns !== fornecedor.duns
                ),
                fornecedor,
            ]);
            props.setModoEdicao(false);
            props.setFornecedorParaEdicao({
                nome: "",
                endereco: "",
                contato: "",
                duns: "",
            });
            props.setMensagem("Fornecedor editado com sucesso!");
            props.setTipoMensagem("warning");
            props.setMostrarMensagem(true);
            }
            setFornecedor(estadoInicialFornecedor);
            setFormValidado(false);
        } else {
            setFormValidado(true);
        }
        e.stopPropagation();
        e.preventDefault();
    }

return (
    <Container>
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
        <Row>
            <Col>
            <Form.Group>
                <FloatingLabel label="Nome" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Informe o nome do fornecedor"
                    id="nome"
                    name="nome"
                    onChange={manipularMudancas}
                    value={fornecedor.nome}
                    required
                />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
            <Form.Group>
                <FloatingLabel label="Endereço" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Informe o endereço do fornecedor"
                    id="endereco"
                    name="endereco"
                    onChange={manipularMudancas}
                    value={fornecedor.endereco}
                    required
                />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">Informe o endereço!</Form.Control.Feedback>
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
            <Form.Group>
                <FloatingLabel label="Contato" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Informe o contato do fornecedor"
                    id="contato"
                    name="contato"
                    onChange={manipularMudancas}
                    value={fornecedor.contato}
                    required
                />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">Informe o contato!</Form.Control.Feedback>
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
            <Form.Group>
                <FloatingLabel label="D.U.N.S" className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Informe o D.U.N.S do fornecedor"
                    id="duns"
                    name="duns"
                    onChange={manipularMudancas}
                    value={fornecedor.duns}
                    required
                />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">Informe o D.U.N.S!</Form.Control.Feedback>
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={6} offset={5} className="flex justify-content-end">
            <Button type="submit" variant={"primary"}>
                {props.modoEdicao ? "Alterar" : "Cadastrar"}
            </Button>
            </Col>
            <Col md={6} offset={5}>
            <Button
                type="button"
                variant={"secondary"}
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