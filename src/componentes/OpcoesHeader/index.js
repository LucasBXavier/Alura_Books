import styled from 'styled-components';


const Opcoes = styled.ul` 
    display: flex;
`

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const textoOpcoes = ['Home','Categorias','Minha Estante','Favoritos']


function OpcoesHeader(){
    return(
    <Opcoes>
        { textoOpcoes.map( (texto) => (
        <Opcao><p>{texto}</p></Opcao>) ) }
    </Opcoes>
    )
}

export default OpcoesHeader;