
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'



const Icones = styled.li`
    display: flex;
    align-items: center;

`

const Icone = styled.ul`
  margin-right: 40px;
  width: 25px;

`


const icones = [perfil, sacola]


function IconesHeader(){
    return(
        <Icones>
          { icones.map( (icone) => (
            <Icone className='icone'><img src = {icone} alt='icones'></img></Icone>
          ) ) }
        </Icones>
    )
}

export default IconesHeader;