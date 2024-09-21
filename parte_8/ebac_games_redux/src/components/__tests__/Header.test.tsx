import { screen } from '@testing-library/react'

import Header from '../Header'
import { renderizaComProvider } from '../../utils/tests'

describe('Testes para o componente header', () => {
  test('deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
