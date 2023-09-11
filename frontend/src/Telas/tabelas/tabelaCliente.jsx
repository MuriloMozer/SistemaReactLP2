import { Button, Container, Table } from 'react-bootstrap';

export default function TabelaClientes(props){
    return(
           <Container>
                <Button type='button' onClick={()=>{
                    props.exibirFormulario(true)
                }}>Novo Cliente</Button>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>000.000.000-00</td>
                <td>Rua das Flores, n° 2569</td>
                <td>Maria Aparecida Fake</td>
                <td>Presidente Prudente</td>
                <td>345026-587</td>
                </tr>
                </tbody>
            </Table>
            </Container>

    );
}