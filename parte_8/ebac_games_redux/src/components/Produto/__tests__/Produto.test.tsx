import { fireEvent, screen } from '@testing-library/react'

import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'
const jogoTeste = {
  id: 1,
  titulo: 'Resident Evil 4',
  plataformas: ['PC', 'PS5', 'Xbox Series S/X'],
  precoAntigo: 139.99,
  preco: 99.99,
  categoria: 'Ação',
  imagem: ''
}

describe('Testes para o componente Produto', () => {
  test('deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogoTeste} />)
    expect(screen.getByText('Resident Evil 4')).toBeInTheDocument()
  })
  test('deve adicionar um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogoTeste} />)
    const botao = screen.getByTestId('btn-adicionar-produto')
    fireEvent.click(botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
