import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  salmon: '#E66767'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${cores.branca};
        color: ${cores.salmon};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
`
