import AppRoutes from './components/AppRoutes.jsx'
import { CalendarProvider } from './context/CalendarContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ExpensesProvider } from './context/ExpensesContext.jsx'
import GlobalStyles from './GlobalStyles.js'

function App() {
  return (
    <AuthProvider>
      <ExpensesProvider>
        <CalendarProvider>
          <GlobalStyles />
          <AppRoutes />
        </CalendarProvider>
      </ExpensesProvider>
    </AuthProvider>
  )
}

export default App
