import { useState} from "react";
import Pagina from "../Templates/Pagina";
import FormCadCliente from "./formularios/formCadCliente";
import TabelaClientes from "./tabelas/tabelaCliente";
import { Container } from "react-bootstrap";
import TelaMensagem from "./telaMensagem";

export default function TelaCadastroCliente(props){
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [listaClientes, setListaClientes] = useState([]);
  const [clienteParaEdicao, setClienteParaEdicao] = useState({
      cpf:'',
      nome:'',
      endereco:'',
      numero:'',
      bairro:'',
      cidade:'',
      uf:'SP',
      cep:''
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
                  //dinâmica em que o usuário irá alternar entre o formulário e a visualização
                  //dos registros já cadastrados
                  exibirFormulario ? <FormCadCliente exibirFormulario={setExibirFormulario} listaClientes={listaClientes} setListaClientes={setListaClientes}
                  clienteParaEdicao={clienteParaEdicao} setClienteParaEdicao={setClienteParaEdicao} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}
                  setMostrarMensagem={setMostrarMensagem} setMensagem={setMensagem} setTipoMensagem={setTipoMensagem}/> :
                                      <TabelaClientes exibirFormulario={setExibirFormulario} listaClientes={listaClientes} setListaClientes={setListaClientes}
                  clienteParaEdicao={clienteParaEdicao} setClienteParaEdicao={setClienteParaEdicao} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}
                  setMostrarMensagem={setMostrarMensagem} setMensagem={setMensagem} setTipoMensagem={setTipoMensagem}/>
              }
          </Pagina>
      </Container>
  )
}