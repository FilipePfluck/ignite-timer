import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './contexts/CycleContext'
import { Router } from './Router'
import { darkTheme } from './styles/dark'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
