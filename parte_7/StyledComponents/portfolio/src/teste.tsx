import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string // ? -> Opcional
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
  cursor: pointer;
  width: 200px;
  height: 60px;
  color: white;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Enviar
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="span" principal>
        Não Clique Aqui
      </BotaoPerigo>
    </>
  )
}

export default Teste
