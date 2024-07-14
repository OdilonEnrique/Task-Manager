import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  *, input, select, textarea {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.LIGHT400};
    border: transparent;
    font-family: sans-serif;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:focus {
      outline: transparent;
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.LIGHT400}
    }
  }

  body {
    background: ${({ theme }) => theme.colors.DARK400};
  }
    
  button {
    background: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  .srOnly {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    margin: -0.1rem;
    border-width: 0;
    overflow: hidden;
    color: transparent;    
    clip: rect(0, 0, 0, 0);
  }

  .inputError {
    color: ${({ theme }) => theme.colors.COMPLEMENTARY400};
    font-size: 1.2rem;
    display: block;
    position: absolute;
    margin-top: 0.6rem;
    right: 0;
    text-shadow: 1px 1px 1px #0008;
  }

  .loading {
    font-weight: 700;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.LIGHT200}88;
    display: grid;
    place-content: center;
    position: absolute;
    inset: 0;
  }

  .queryError {
    font-weight: 700;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.COMPLEMENTARY500};
    display: grid;
    place-content: center;
    position: absolute;
    inset: 0;
  }

  .scrollBar {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.DARK200};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.LIGHT200}88;
      border-radius: 0.8rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.LIGHT400}88;
    }
  }

  @media (min-width: 768px) {
    .inputError {
      font-size: 1.4rem;
    }

    .loading {
      font-size: 1.4rem;
    }

    .queryError {
      font-size: 1.4rem;
    }

    .scrollBar {
      &::-webkit-scrollbar {
        width: 0.75rem;
      }
    }
  }
`;
