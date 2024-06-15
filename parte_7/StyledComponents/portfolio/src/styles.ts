import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'inter', sans-serif;
    font-weight: 400;
  }

  body {
    padding-top: 80px;

    @media screen and (max-width: 768px) {
      padding-top: 16px
    }
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media screen and (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  img {
    max-width: 100%;
  }
`

export default EstiloGlobal
