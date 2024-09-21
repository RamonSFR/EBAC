import { screen } from '@testing-library/react'

import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente header', () => {
  test('deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com dois itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              titulo: 'Resident Evil 4',
              plataformas: ['PC', 'PS5', 'Xbox Series S/X'],
              precoAntigo: 139.99,
              preco: 99.99,
              categoria: 'Ação',
              imagem: ''
            },
            {
              id: 2,
              titulo: 'Dead Space',
              plataformas: ['PC', 'PS5', 'Xbox Series S/X'],
              precoAntigo: 299.99,
              preco: 69.99,
              categoria: 'Terror de Sobrevivência',
              imagem: ''
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
