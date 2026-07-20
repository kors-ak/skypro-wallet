import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../context/AuthContext'
import { useCalendar } from '../../../context/CalendarContext'
import ConfirmDialog from '../../shared/ConfirmDialog/ConfirmDialog'
import {
  SContent,
  SDropdown,
  SDropdownItem,
  SExitButton,
  SGroup,
  SHeader,
  SLogo,
  SMobileNav,
  SMobileNavTrigger,
  SPagesLinks,
} from './Header.styled'

export const Header = ({ showForm, setShowForm }) => {
  const { logout, token } = useAuth()
  const { setIsOpen: setIsCalendarOpen } = useCalendar()
  const location = useLocation()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false)
  const isExpenses = location.pathname === '/'
  const isAnalytics = location.pathname === '/analytics'
  const menuRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const currentLabel =
    location.pathname === '/analytics'
      ? 'Анализ расходов'
      : showForm
        ? 'Новый расход'
        : 'Мои расходы'

  const goToExpenses = () => {
    navigate('/')
    setShowForm(false)
    setIsMenuOpen(false)
    setIsCalendarOpen(false)
  }

  const goToNewExpense = () => {
    if (location.pathname === '/') {
      document
        .getElementById('new-expense')
        ?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', {
        state: {
          showForm: true,
        },
      })
    }
    setShowForm(true)
    setIsMenuOpen(false)
    setIsCalendarOpen(false)
  }

  const goToAnalytics = () => {
    navigate('/analytics')
    setIsMenuOpen(false)
    setIsCalendarOpen(false)
  }

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

            <SMobileNav ref={menuRef}>
              <SMobileNavTrigger
                type="button"
                $open={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                {currentLabel}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SMobileNavTrigger>

              {isMenuOpen && (
                <SDropdown>
                  <SDropdownItem
                    type="button"
                    $active={isExpenses && !showForm}
                    onClick={goToExpenses}
                  >
                    Мои расходы
                  </SDropdownItem>
                  <SDropdownItem
                    type="button"
                    $active={isExpenses && showForm}
                    onClick={goToNewExpense}
                  >
                    Новый расход
                  </SDropdownItem>
                  <SDropdownItem
                    type="button"
                    $active={isAnalytics}
                    onClick={goToAnalytics}
                  >
                    Анализ расходов
                  </SDropdownItem>
                </SDropdown>
              )}
            </SMobileNav>

            <SExitButton onClick={() => setIsLogoutConfirmOpen(true)}>
              Выйти
            </SExitButton>
          </SGroup>
        )}
      </SContent>

      {isLogoutConfirmOpen && (
        <ConfirmDialog
          title="Выйти из аккаунта?"
          confirmLabel="Выйти"
          onConfirm={() => {
            setIsLogoutConfirmOpen(false)
            logout()
          }}
          onCancel={() => setIsLogoutConfirmOpen(false)}
        />
      )}
    </SHeader>
  )
}

export default Header
