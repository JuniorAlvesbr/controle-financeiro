import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createServer, Model } from 'miragejs'
import { ResetCSS } from './styles/reset'
import { GlobalStyle } from './styles/global'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAT: new Date('2022-05-08 12:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1200,
          createdAT: new Date('2022-05-08 14:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = "api"

    this.get("/transations", () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)

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
