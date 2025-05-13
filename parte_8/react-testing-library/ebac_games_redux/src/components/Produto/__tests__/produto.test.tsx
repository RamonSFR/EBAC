import { fireEvent, screen } from '@testing-library/react'
import Produto from '../'
import { renderizaComProvider } from '../../../utils/tests'

const jogo = {
  id: 1,
  categoria: 'rpg',
  imagem: '',
  plataformas: ['Windows'],
  preco: 199.99,
  titulo: 'The witcher 3',
  precoAntigo: 299.9
}

describe('testes para o componente Produto', () => {
  test('deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('The witcher 3')).toBeInTheDocument()
  })

  test('deve adicionar um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-comprar')
    fireEvent.click(botao)
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
