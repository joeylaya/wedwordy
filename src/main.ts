import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0, useAuth0 } from '@auth0/auth0-vue'

import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, concat } from '@apollo/client/core'

import App from './App.vue'
import router from './router'

import 'virtual:windi.css'

const httpLink = new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_URI })
const context = async () => {
  let token = await useAuth0().getAccessTokenSilently()
  return { 
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  }
}
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(context)
  return forward(operation)
})
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  cache,
  link: concat(authMiddleware, httpLink),
})

const app = createApp(App)

app.provide(DefaultApolloClient, apolloClient)
app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH_DOMAIN,
    client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_AUTH_REDIRECT,
    audience: import.meta.env.VITE_GRAPHQL_URI
  })
);

app.use(createPinia())
app.use(router)

app.mount('#app')
