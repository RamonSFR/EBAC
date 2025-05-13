import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'
import { screen, waitFor } from '@testing-library/react'

const mocks = [
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
  },
  {
    id: 3,
    categoria: 'FPS',
    imagem: '',
    plataformas: ['Windows', 'PS5', 'Xbox Series'],
    preco: 400,
    titulo: 'Call of Duty',
    precoAntigo: 500
  },
  {
    id: 4,
    categoria: 'terror',
    imagem: '',
    plataformas: ['Windows', 'PS5', 'Xbox Series'],
    preco: 250,
    titulo: 'Silent Hill 2',
    precoAntigo: 300
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('testes para o container Produtos', () => {
  beforeAll(() => server.listen)
  afterEach(() => server.resetHandlers)
  afterAll(() => server.close)

  test('deve renderizar corretamente com o texto Carregando...', () => {
    renderizaComProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('deve renderizar corretamente com o a listagem de jogos', async () => {
    renderizaComProvider(<Produtos />)
    waitFor(() => {
      expect(screen.getByText('Dead Space')).toBeInTheDocument()
      expect(screen.getByText('The Witcher 3')).toBeInTheDocument()
      expect(screen.getByText('Silent Hill 2')).toBeInTheDocument()
      expect(screen.getByText('Windows')).toBeInTheDocument()
      expect(screen.getByText('PS5')).toBeInTheDocument()
    })
  })
})
