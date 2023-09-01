import { Button, Container, Table } from 'react-bootstrap';

export default function TabelaCategoria(props){
    return(
           <Container>
                <Button type='button'></Button>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Subcategoria</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>Roupas Femininas</td>
                <td>Blusas, Calças, Saias, Vestidos, Camisetas, Casacos</td>
                </tr>
                </tbody>
            </Table>
            </Container>

    );
}