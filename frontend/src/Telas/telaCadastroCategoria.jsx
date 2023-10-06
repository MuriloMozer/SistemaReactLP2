import { useState } from "react";
import Pagina from "../Templates/Pagina";
import FormCadCategoria from "./formularios/formCadCategoria";
import TabelaCategorias from "./tabelas/tabelaCategorias";

export default function TelaCadastroCategoria(props){
    const [exibirFomrulario, setExibirFormulario] = useState(true);
    return(
        <Pagina>
            {
                //dinâmica em que o usuário irá alternar entre o formulário e a visualização
                //dos registros já cadastrados
                exibirFomrulario ? <FormCadCategoria/>:<TabelaCategorias/>
            }
        </Pagina>
    )
}