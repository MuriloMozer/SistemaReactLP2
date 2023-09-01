import { useState } from "react";
import Pagina from "../Templates/Pagina";
import FormCadCliente from "./formularios/formCadCliente";
import FormCadProduto from "./formularios/formCadProduto";
import FormCadCategorias from "./formularios/formCadCategorias";
import FormCadFornecedor from "./formularios/formCadFornecedor";
import TabelaClientes from "./tabelas/tabelaCliente";
import TabelaCategoria from "./tabelas/tabelaCategorias";

export default function TelaCadastroCliente(props){
    const [exibirFomrulario, setExibirFormulario] = useState(true);
    return(
        <Pagina>
            {
                //dinâmica em que o usuário irá alternar entre o formulário e a visualização
                //dos registros já cadastrados
                //exibirFomrulario?<FormCadCliente/>:<TabelaClientes/>
                <>
                    <FormCadCliente/>
                    <hr /><br />
                    <FormCadProduto/>
                    <hr /><br />
                    <FormCadCategorias/>
                    <hr /><br />
                    <FormCadFornecedor/>
                    <hr /><br />
                    <TabelaClientes/>
                    <hr /><br />
           
                </>
            }
        </Pagina>
    )
}