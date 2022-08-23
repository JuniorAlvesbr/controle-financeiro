import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f8f2f5;
    --shape: #ffffff;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    background-color: var(--background);
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    border-radius: 0.24rem;
    position: relative;
  }

  .react-button-close-modal {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.5);
    }
  }

`