import { Button, Container, Spinner, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { buscarFornecedores, removerFornecedor } from "../../redux/fornecedorReducer";
import ESTADO from "../../recursos/estado";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function TabelaFornecedores(props) {
    const { estado, mensagem, fornecedores } = useSelector(state => state.fornecedor);
    const dispatch = useDispatch();

    function excluirFornecedor(fornecedor) {
        if (window.confirm('Deseja realmente excluir este fornecedor?')) {
            dispatch(removerFornecedor(fornecedor));
        }
    }

    function editarFornecedor(fornecedor) {
        props.setFornecedorParaEdicao(fornecedor);
        props.setModoEdicao(true);
        props.exibirFormulario(true);
    }

    useEffect(() => {
        dispatch(buscarFornecedores());
    }, [dispatch]);

    if (estado === ESTADO.PENDENTE) {
        toast(({ closeToast }) =>
            <div>
                <Spinner animation="border" role="status"></Spinner>
                <p>Buscando fornecedores....</p>
            </div>
        ,{toastId:estado});
    } else if (estado === ESTADO.ERRO) {
        toast.error(({ closeToast }) =>
            <div>
                <p>{mensagem}</p>
            </div>
        , {toastId: estado});
    } else {
        toast.dismiss();
        return (
            <Container>
                <Button type="button" onClick={() => props.exibirFormulario(true)}>
                    Novo Fornecedor
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>CNPJ</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>CEP</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fornecedores.map((fornecedor) => (
                            <tr key={fornecedor.cnpj}>
                                <td>{fornecedor.cnpj}</td>
                                <td>{fornecedor.nome}</td>
                                <td>{fornecedor.endereco}</td>
                                <td>{fornecedor.bairro}</td>
                                <td>{fornecedor.cidade}</td>
                                <td>{fornecedor.uf}</td>
                                <td>{fornecedor.cep}</td>
                                <td>
                                    <Button variant="danger" onClick={() => excluirFornecedor(fornecedor)}>
                                        Excluir
                                    </Button>
                                    <Button variant="warning" onClick={() => editarFornecedor(fornecedor)}>
                                        Editar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}