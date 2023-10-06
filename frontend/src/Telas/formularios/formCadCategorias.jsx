import {Button, Container, Form, Row, Col, FloatingLabel} from "react-bootstrap";

export default function FormCadCategorias(props){
    return(
        <Container>
            <Form>
            <Row>
                <Col md={4}>
                    <Form.Group>
                        <FloatingLabel controlId="floatingSelect" label="Categoria" id="categorias">
                            <Form.Select aria-label="Categorias">
                                <option value="RouFem">Roupas Femininas</option>
                                <option value="RouMasc" selected>Roupas Masculinas</option>
                                <option value="RouInfant">Roupas Infantis</option>
                                <option value="RouUni">Roupas Unissex</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Subcategoria"
                            className="mb-3"
                        >
                            <Form.Control type="text" id="subcategoria" name="subcategoria" required/>
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">Informe a subcategoria!</Form.Control.Feedback>
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