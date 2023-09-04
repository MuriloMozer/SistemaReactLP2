import { useState } from "react";
import Pagina from "../Templates/Pagina";
import FormCadFornecedor from "./formularios/formCadFornecedor";
import TabelaFornecedor from "./tabelas/tabelaFornecedor";

export default function TelaCadastroCliente(props){
    const [exibirFomrulario, setExibirFormulario] = useState(true);
    return(
        <Pagina>
            {
                //dinâmica em que o usuário irá alternar entre o formulário e a visualização
                //dos registros já cadastrados
                exibirFomrulario ? <FormCadFornecedor/>:<TabelaFornecedor/>
            }
        </Pagina>
    )
}