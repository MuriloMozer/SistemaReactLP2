import { useState} from "react";
import Pagina from "../Templates/Pagina";
import FormCadCliente from "./formularios/formCadCliente";
import TabelaClientes from "./tabelas/tabelaCliente";
import { Container } from "react-bootstrap";
import './estilos.css';

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
  const [mensagemSucesso, setMensagemSucesso] = useState(null);
  return(
      <Container>
          <Pagina>
            {mensagemSucesso && <div className="mensagem-sucesso">{mensagemSucesso}</div>}
              {
                  //dinâmica em que o usuário irá alternar entre o formulário e a visualização
                  //dos registros já cadastrados
                  exibirFormulario ? <FormCadCliente exibirFormulario={setExibirFormulario} listaClientes={listaClientes} setListaClientes={setListaClientes}
                  clienteParaEdicao={clienteParaEdicao} setClienteParaEdicao={setClienteParaEdicao} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}
                  setMensagemSucesso={setMensagemSucesso}/> :
                                      <TabelaClientes exibirFormulario={setExibirFormulario} listaClientes={listaClientes} setListaClientes={setListaClientes}
                  clienteParaEdicao={clienteParaEdicao} setClienteParaEdicao={setClienteParaEdicao} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao}
                  setMensagemSucesso={setMensagemSucesso}/>
              }
          </Pagina>
      </Container>
  )
}