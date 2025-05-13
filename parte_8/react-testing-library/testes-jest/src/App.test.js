import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('testes para o componente principal', () => {
    test("deve renderizar corretamente", () => {
        render(<App />)
        expect(screen.getByText('cadastrar')).toBeInTheDocument()

    })
    
    test('deve adicionar estudar react na lista', () => {
        render(<App />)
        fireEvent.change(screen.getByTestId('campo-tarefa'), {
            target: {
                value: 'estudar react'
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))

        expect(screen.getByText("estudar react")).toBeInTheDocument()
    })
})