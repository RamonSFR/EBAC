import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  color: white;
  cursor: pointer;
  padding: 8px 16px;
  font-size: ${(props) => props.fontSize + 'px' || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18" principal>
        Clique Aqui
      </Botao>

      <Botao principal={false}>Cancelar</Botao>

      <BotaoPerigo as="a" principal>
        <span>Não Clique Aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
