import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createServer } from 'miragejs'
import { ResetCSS } from './styles/reset'
import { GlobalStyle } from './styles/global'


createServer({
  routes() {
    this.namespace = "api"

    this.get("/transations", () => {
      return (
        {
          id: 1,
          title: 'Transação 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      )
    })
  }
})



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetCSS />
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
