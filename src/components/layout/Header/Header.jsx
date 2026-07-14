import { Link, NavLink } from 'react-router-dom'

import { useAuth } from '../../../context/AuthContext'
import {
  SContent,
  SExitButton,
  SGroup,
  SHeader,
  SLogo,
  SPagesLinks,
} from './Header.styled'

export const Header = () => {
  const { logout, token } = useAuth()

  return (
    <SHeader>
      <SContent>
        <SLogo>
          <Link to="/">
            <img src="logo2.svg" />
          </Link>
        </SLogo>
        {token && (
          <SGroup>
            <SPagesLinks>
              <NavLink to="/" end>
                Мои расходы
              </NavLink>
              <NavLink to="/analytics">Анализ расходов</NavLink>
            </SPagesLinks>
            <SExitButton
              onClick={() => {
                logout()
              }}
            >
              Выйти
            </SExitButton>
          </SGroup>
        )}
      </SContent>
    </SHeader>
  )
}

export default Header
