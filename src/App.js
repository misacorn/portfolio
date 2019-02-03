import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './theme/theme'
import { Layout } from './components/common'
import IndexPage from './pages'
import NotFoundPage from './pages/404'
import AboutPage from './pages/about'

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
