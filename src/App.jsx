import AppRoutes from './components/AppRoutes.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ExpensesProvider } from './context/ExpensesContext.jsx'
import GlobalStyles from './GlobalStyles.js'

function App() {
  return (
    <AuthProvider>
      <ExpensesProvider>
        <GlobalStyles />
        <AppRoutes />
      </ExpensesProvider>
    </AuthProvider>
  )
}

export default App
