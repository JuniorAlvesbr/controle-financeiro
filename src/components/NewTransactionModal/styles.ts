import { Reducer } from 'react';
import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    font-weight: 400;
    font-size: 1rem;
    
    background-color: #e7e9ee;
    
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    background-color: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;    
`

interface propsRadiosBox {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: 'rgba(51,204,149,0.1)',
  red: 'rgba(229,46,77,0.1)',
}

export const RadioBox = styled.button<propsRadiosBox>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background-color: ${(props) => props.isActive ? colors[props.activeColor] : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #aaa;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`