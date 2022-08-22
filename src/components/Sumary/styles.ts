import styled from "styled-components";

export const Container = styled.section` 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1120px;
  margin: 0 auto;
  transform: translateY(-50%);
  `

export const Content = styled.article`
  background-color: var(--shape);
  max-width: 350px;
  padding: 1.5rem 2rem;
  
  &.highlight-background {
    background-color: var(--green);
    color: var(--shape);
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
  }

  & > strong {
    font-size: 2rem;
    font-weight: 400;
  }
`