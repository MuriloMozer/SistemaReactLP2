import { useState } from "react";
import Pagina from "../Templates/Pagina";
import FormCadCliente from "./formularios/formCadCliente";
import TabelaClientes from "./tabelas/tabelaCliente";

export default function TelaCadastroCliente(props){
    const [exibirFormulario, setExibirFormulario] = useState(false);
    return(
        <Pagina>
            {
                //dinâmica em que o usuário irá alternar entre o formulário e a visualização
                //dos registros já cadastrados
                exibirFormulario ? <FormCadCliente exibirFormulario={setExibirFormulario}/>:<TabelaClientes exibirFormulario={setExibirFormulario}/>
            }
        </Pagina>
    )
}