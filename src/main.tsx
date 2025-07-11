
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from  'react-redux'
import App from './App.tsx'
import { store } from './store/store.ts'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    </StrictMode>
)
