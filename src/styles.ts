import { createGlobalStyle } from 'styled-components'

const cores = {
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
`
