import { Button, Container, Table } from 'react-bootstrap';

export default function TabelaFornecedor(props){
    return(
           <Container>
                <Button type='button'></Button>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Fornecedor</th>
                        <th>ID</th>
                        <th>Endereço</th>
                        <th>Contato</th>
                        <th>D.U.N.S</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>George Tecidos</td>
                <td>17</td>
                <td>AV. Saudade, n° 300</td>
                <td>55 32 4002-8922</td>
                <td>900449628</td>
                </tr>
                </tbody>
            </Table>
            </Container>

    );
}