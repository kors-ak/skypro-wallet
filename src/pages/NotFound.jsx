import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/layout/Header/Header'
import { useAuth } from '../context/AuthContext'

const SWrapper = styled.div`
  min-height: calc(100vh - 71px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const SContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
`

const SCard = styled.div`
  text-align: center;
`

const SCode = styled.div`
  font-size: 88px;
  font-weight: 700;
  margin-bottom: 12px;
`

const STitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  margin-bottom: 10px;
`

const SSubtitle = styled.div`
  font-size: 16px;
  color: rgb(153, 153, 153);
  font-weight: 400;
  margin-bottom: 20px;
`

const SButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 48px;
  border-radius: 6px;
  background: rgb(115, 52, 234);
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
`

const NotFound = () => {
  const { token } = useAuth()

  return (
    <>
      <Header />
      <SWrapper>
        <SContainer>
          <SCard>
            <SCode>404</SCode>
            <STitle>Страница не найдена</STitle>
            <SSubtitle>
              Возможно, она была удалена
              <br />
              или перенесена на другой адрес
            </SSubtitle>
            {token ? (
              <SButton to="/">Вернуться на главную</SButton>
            ) : (
              <SButton to="/sign-in">Перейти ко входу</SButton>
            )}
          </SCard>
        </SContainer>
      </SWrapper>
    </>
  )
}

export default NotFound
