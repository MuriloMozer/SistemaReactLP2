import {Button, Container, Form, Row, Col, FloatingLabel} from "react-bootstrap";

export default function FormCadFornecedor(props){
    return(
        <Container>
            <Form>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                        <FloatingLabel
                                controlId="floatingInput"
                                label="Fornecedor"
                                className="mb-3"
                            >
                            <Form.Control type="text" id="Fornecedor" name="Fornecedor" required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Fornecedor!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                            <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="ID"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="0000" id="id" name="id" required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o ID do fornecedor!</Form.Control.Feedback>
                            </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col md={7}>
                        <Form.Group>
                        <FloatingLabel
                                controlId="floatingInput"
                                label="Endereço"
                                className="mb-3"
                            >
                            <Form.Control type="text" id="endereço" name="endereço" required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Endereço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                            <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Contato"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="+## (**) 8888-8888" id="contato" name="contato" required/>
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o contato do fornecedor!</Form.Control.Feedback>
                            </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="D.U.N.S:"
                            className="mb-3"
                        >
                            <Form.Control type="text" id="duns" name="duns"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="flex justify-content-end">
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}