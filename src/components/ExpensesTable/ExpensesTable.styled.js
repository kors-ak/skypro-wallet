import styled from 'styled-components'

export const STable = styled.section`
  background-color: #fff;
  height: 618px;
  border-radius: 30px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  overflow: hidden;
`
export const STitle = styled.h2`
  margin: 32px;
  font-weight: 700;
  font-size: 24px;
`
export const SContent = styled.div``

export const STitlesContainer = styled.div`
  border-bottom: 0.5px solid rgb(153, 153, 153);
  padding: 0 34px 6px 32px;
`
export const STitles = styled.div`
  width: 78%;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(4, 1fr);
`
export const SText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: rgb(153, 153, 153);
`
export const SExpenses = styled.div`
  padding-left: 32px;
  padding-right: 34px;
  overflow-y: auto;
  margin-top: 18px;
  max-height: 479px;
`
