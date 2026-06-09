import { Link } from 'react-router-dom'

const Auth = ({ isSignUp }) => {
  return (
    <div>
      {isSignUp ? <h1>Регистрация</h1> : <h1>Вход</h1>}
      {isSignUp ? (
        <Link to="/sign-in">Зарегистрироваться</Link>
      ) : (
        <Link to="/">Войти</Link>
      )}
      {isSignUp ? (
        <>
          <p>Уже есть аккаунт?</p>
          <Link to="/sign-in">Войдите здесь</Link>
        </>
      ) : (
        <>
          <p>Нужно зарегистрироваться?</p>
          <Link to="/sign-up">Регистрируйтесь здесь</Link>
        </>
      )}
    </div>
  )
}

export default Auth
