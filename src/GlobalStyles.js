import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif, Arial, Helvetica;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    transition: background-color 0.2s ease;
  }

  button:disabled {
    cursor: not-allowed;
    background-color: rgb(153, 153, 153);
  }
  
  button:disabled:hover {
    background-color: rgb(153, 153, 153);
  }

  a:hover {
    opacity: 0.8;
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    color: rgb(0, 0, 0);
    background-color: rgb(244, 245, 246);
    scroll-behavior: smooth;

    @media screen and (max-width: 425px) {
		background-color: #fff;
	}
  }

  .simplebar-content {
    height: 100%;
    position: relative;
  }

  .no-scroll .simplebar-content {
    overflow: hidden !important;
    pointer-events: none;
  }

  .simplebar-track.simplebar-vertical {
    margin: 8px 0 20px 0;
    width: 8px;
  }

  .simplebar-scrollbar {
    width: 6px;
    border-radius: 3px;
  }  
  
  .simplebar-scrollbar.simplebar-visible:before {
    opacity: 1;
    background-color: rgb(217, 217, 217);
    width: 6px;
    border-radius: 3px;
  }
`

export default GlobalStyles
