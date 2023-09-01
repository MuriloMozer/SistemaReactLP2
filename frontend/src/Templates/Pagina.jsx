import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Menu from './Menu';

export default function Pagina(props){
    return(
        <>
            <Cabecalho conteudo="Sistema de Gestao Comercial"/>
            <Menu/>
            <div>
                {
                    //filhos da página
                }
                {props.children}
            </div>
            <Rodape conteudo="Rua tal, Numero: 80 , Bairro das Rosas"/>
        </>
    )
}