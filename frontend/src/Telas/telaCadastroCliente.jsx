import { useState } from "react";
import Pagina from "../Templates/Pagina";
import FormCadCliente from "./formularios/formCadCliente";
import TabelaClientes from "./tabelas/tabelaCliente";

export default function TelaCadastroCliente(props){
    const [exibirFomrulario, setExibirFormulario] = useState(true);
    return(
        <Pagina>
            {
                //dinâmica em que o usuário irá alternar entre o formulário e a visualização
                //dos registros já cadastrados
                exibirFomrulario ? <FormCadCliente exibirFomrulario={setExibirFormulario}/>:<TabelaClientes exibirFomrulario={setExibirFormulario}/>
            }
        </Pagina>
    )
}