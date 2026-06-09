import { Link } from "react-router-dom"

const Main = () => {
  return (
    <main>
      <h1>Мои расходы</h1>
      <Link to="/analytics">Перейти к аналитике</Link>
      <div>
        <div></div>
        <div></div>
      </div>
    </main>
  )
}

export default Main
