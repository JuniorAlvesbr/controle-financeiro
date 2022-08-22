import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
    th, td {
      color: var(--text-body);
      text-align: left;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }
    
    td {
      background-color: var(--shape);
      border: 0;
      border-radius: 0.25rem;
    
      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
    
  }
`