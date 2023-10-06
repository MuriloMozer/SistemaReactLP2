import {Button, Container, Form, Row, Col, FloatingLabel} from "react-bootstrap";

export default function FormCadProduto(props){
    return(
        <Container>
            <Form>
                <Row>
                <Col md={3}>
                    <Form.Group>
                        <FloatingLabel controlId="floatingSelect" label="Tipo do Poduto" id="tpProdutos">
                            <Form.Select aria-label="Tipos de roupas">
                                <option value="Acessorio">Acessório</option>
                                <option value="Camiseta" selected>Camiseta</option>
                                <option value="Camisa">Camisa</option>
                                <option value="Calca">Calça</option>
                                <option value="Saia">Saia</option>
                                <option value="Vestido">Vestido</option>
                                <option value="Blusa">Blusa</option>
                                <option value="Tenis">Tênis</option>
                                <option value="Meias">Meias</option>
                                <option value="Intimo">Roupa íntima</option>
                                <option value="Shorts">Shorts</option>
                                <option value="Casacos">Casacos</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group>
                        <FloatingLabel controlId="floatingSelect" label="Genero" id="genero">
                            <Form.Select aria-label="Genero das roupas">
                                <option value="Masc" selected>Masculino</option>
                                <option value="Fem">Feminino</option>
                                <option value="Infant">Infantil</option>
                                <option value="Uni">Unissex</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Marca"
                            className="mb-3">
                            <Form.Control type="text" id="marca" name="marca" required/>
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">Informe a marca do produto!</Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col md={3}>
                    <Form.Group>
                        <FloatingLabel controlId="floatingSelect" label="Modelo" id="modelo">
                            <Form.Select aria-label="Modelos de roupas">
                                <option value="Social">Social</option>
                                <option value="Casual" selected>Casual</option>
                                <option value="Fit">Fitness</option>
                                <option value="Infantil">Infantil</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group>
                        <FloatingLabel controlId="floatingSelect" label="Material" id="material">
                            <Form.Select aria-label="Material da roupa">
                                <option value="Jeans">Jeans</option>
                                <option value="Sarja" selected>Sarja</option>
                                <option value="Moletom">Moletom</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
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