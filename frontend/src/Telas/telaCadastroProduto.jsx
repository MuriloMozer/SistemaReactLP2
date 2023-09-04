import { useState } from "react";
import Pagina from "../Templates/Pagina";
import FormCadProduto from "./formularios/formCadProduto";
import TabelaProdutos from "./tabelas/tabelaProdutos";

export default function TelaCadastroCliente(props){
    const [exibirFomrulario, setExibirFormulario] = useState(true);
    return(
        <Pagina>
            {
                //dinâmica em que o usuário irá alternar entre o formulário e a visualização
                //dos registros já cadastrados
                exibirFomrulario ? <FormCadProduto/>:<TabelaProdutos/>
            }
        </Pagina>
    )
}