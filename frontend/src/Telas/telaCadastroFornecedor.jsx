import { useState} from "react";
import Pagina from "../Templates/Pagina";
import FormCadFornecedores from "./formularios/formCadFornecedores";
import TabelaFornecedores from "./tabelas/tabelaFornecedor";
import { Container } from "react-bootstrap";
import TelaMensagem from "./telaMensagem";

export default function TelaCadastroFornecedor(props){
    const [exibirFomrulario, setExibirFormulario] = useState(false);
    const [listaFornecedores, setListaFornecedores] = useState([]);
    const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({
        nome:'',
        endereco:'',
        contato:'',
        duns:''
    });
    const [modoEdicao, setModoEdicao] = useState(false);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem]= useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    if(mostrarMensagem){
    return(
        <TelaMensagem mensagem={mensagem} tipo={tipoMensagem} setMostrarMensagem={setMostrarMensagem}></TelaMensagem>
    )
    }
    return(
        <Container>
            <Pagina>
                {
                    exibirFomrulario ? <FormCadFornecedores exibirFormulario={setExibirFormulario} listaFornecedores={listaFornecedores} setListaFornecedores={setListaFornecedores}
                    fornecedorParaEdicao={fornecedorParaEdicao} setFornecedorParaEdicao={setFornecedorParaEdicao} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}
                    setMostrarMensagem={setMostrarMensagem} setMensagem={setMensagem} setTipoMensagem={setTipoMensagem}/> :
                                        <TabelaFornecedores exibirFormulario={setExibirFormulario} listaFornecedores={listaFornecedores} setListaFornecedores={setListaFornecedores}
                    fornecedorParaEdicao={fornecedorParaEdicao} setFornecedorParaEdicao={setFornecedorParaEdicao} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}
                    setMostrarMensagem={setMostrarMensagem} setMensagem={setMensagem} setTipoMensagem={setTipoMensagem}/>
                }
            </Pagina>
        </Container>
    )
}