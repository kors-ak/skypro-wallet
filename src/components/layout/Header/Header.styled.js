import styled from 'styled-components'

export const SHeader = styled.header`
  background-color: #ffffff;
`
export const SContent = styled.div`
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    padding: 12px 16px;
  }
`
export const SLogo = styled.div``

export const SGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 400px;

  @media (max-width: 425px) {
    gap: 20px;
  }
`

export const SPagesLinks = styled.div`
  display: flex;
  gap: 48px;

  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 170%;
    color: black;

    &.active {
      color: #7334ea;
      font-weight: 600;
      border-bottom: 2px solid #7334ea;
    }
  }

  @media (max-width: 425px) {
    display: none;
  }
`

export const SExitButton = styled.button`
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  line-height: 170%;
  color: black;
`

export const SMobileNav = styled.div`
  position: relative;
  display: none;

  @media (max-width: 425px) {
    display: block;
  }
`

export const SMobileNavTrigger = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 2px;
  font-weight: 600;
  font-size: 14px;
  line-height: 170%;
  color: #7334ea;
  border-bottom: 2px solid #7334ea;

  svg {
    transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
    transition: transform 0.2s ease;
  }
`

export const SDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  background-color: #ffffff;
  border: 0.5px solid #999999;
  border-radius: 6px;
  box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
  z-index: 20;
`

export const SDropdownItem = styled.button`
  padding: 7px 14px;
  border-radius: 24px;
  font-size: 12px;
  white-space: nowrap;
  text-align: left;
  background-color: ${({ $active }) => ($active ? '#f1ebfd' : '#f4f5f6')};
  color: ${({ $active }) => ($active ? '#7334ea' : '#000000')};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
`
