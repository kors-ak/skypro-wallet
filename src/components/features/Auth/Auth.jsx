import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../../context/AuthContext'
import { validateField } from '../../../utils/validation'
import { Header } from '../../layout/Header/Header'
import { SInput } from '../../shared/Input/Input.styled'
import {
  SAuth,
  SBtn,
  SContainer,
  SContainerBlock,
  SError,
  SForm,
  SLinkGroup,
  STitle,
  SWrapper,
} from './Auth.styled'

const Auth = ({ isSignUp }) => {
  const { register, login } = useAuth()
  const [name, setName] = useState('')
  const [userLogin, setUserLogin] = useState('')
  const [password, setPassword] = useState('')
  const [touched, setTouched] = useState({
    name: false,
    login: false,
    password: false,
  })
  const [hasInteracted, setHasInteracted] = useState(false)
  const [apiError, setApiError] = useState('')

  const nameError = isSignUp ? validateField(name) : ''
  const loginError = validateField(userLogin)
  const passwordError = validateField(password)
  const isFormValid = !loginError && !passwordError && (!isSignUp || !nameError)

  const getStatus = (isTouched, error) => {
    if (!isTouched) {
      return 'default'
    }
    return error ? 'error' : 'success'
  }

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setHasInteracted(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setTouched({ name: true, login: true, password: true })
    setHasInteracted(true)
    setApiError('')
    if (!isFormValid) {
      return
    }
    try {
      if (isSignUp) {
        await register(name, userLogin, password)
      } else {
        await login(userLogin, password)
      }
    } catch (submitError) {
      setApiError(submitError.message)
    }
  }

  return (
    <>
      <Header />
      <SWrapper>
        <SContainer>
          <SContainerBlock>
            <SAuth>
              {isSignUp ? <STitle>Регистрация</STitle> : <STitle>Вход</STitle>}
              <SForm onSubmit={handleSubmit} noValidate>
                {isSignUp && (
                  <>
                    <SInput
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Имя"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      onBlur={handleBlur('name')}
                      $status={getStatus(touched.name, nameError)}
                    />
                    {touched.name && nameError && <SError>{nameError}</SError>}
                  </>
                )}
                <SInput
                  type="text"
                  name="login"
                  id="login"
                  placeholder="Эл. почта"
                  value={userLogin}
                  onChange={(event) => setUserLogin(event.target.value)}
                  onBlur={handleBlur('login')}
                  $status={getStatus(touched.login, loginError)}
                />
                {touched.login && loginError && <SError>{loginError}</SError>}
                <SInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  onBlur={handleBlur('password')}
                  $status={getStatus(touched.password, passwordError)}
                />
                {touched.password && passwordError && (
                  <SError>{passwordError}</SError>
                )}
                {apiError && <SError>{apiError}</SError>}
                <SBtn type="submit" disabled={hasInteracted && !isFormValid}>
                  {isSignUp ? 'Зарегистрироваться' : 'Войти'}
                </SBtn>
              </SForm>
              {isSignUp ? (
                <SLinkGroup>
                  <p>Уже есть аккаунт?</p>
                  <Link to="/sign-in">Войдите здесь</Link>
                </SLinkGroup>
              ) : (
                <SLinkGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/sign-up">Регистрируйтесь здесь</Link>
                </SLinkGroup>
              )}
            </SAuth>
          </SContainerBlock>
        </SContainer>
      </SWrapper>
    </>
  )
}

export default Auth
