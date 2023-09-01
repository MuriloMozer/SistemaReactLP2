import { Button, Container, Table } from 'react-bootstrap';

export default function TabelaProdutos(props){
    return(
           <Container>
                <Button type='button'></Button>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Genero</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Material</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>Calça</td>
                <td>Masculino</td>
                <td>Renner</td>
                <td>Casual</td>
                <td>Jeans</td>
                </tr>
                </tbody>
            </Table>
            </Container>

    );
}