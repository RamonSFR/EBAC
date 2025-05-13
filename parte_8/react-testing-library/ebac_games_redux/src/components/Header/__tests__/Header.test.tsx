import { screen } from '@testing-library/react'

import Header from '../'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'rpg',
              imagem: '',
              plataformas: ['Windows'],
              preco: 199.99,
              titulo: 'The witcher 3',
              precoAntigo: 299.9
            },
            {
              id: 2,
              categoria: 'terror',
              imagem: '',
              plataformas: ['Windows', 'PS5', 'Xbox Series'],
              preco: 250,
              titulo: 'Dead Space',
              precoAntigo: 300
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
