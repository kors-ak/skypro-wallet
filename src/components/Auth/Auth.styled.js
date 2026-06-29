import styled from "styled-components";

export const SWrapper = styled.section`
	width: 100%;
	min-height: calc(100vh - 72px);
	overflow-x: hidden;
	overflow-y: auto;
	background-color: #f4f5f6;
`;

export const SContainer = styled.div`
	display: block;
	width: 100%;
	min-height: calc(100vh - 72px);
	margin: 0 auto;
`;

export const SContainerBlock = styled.div`
	width: 100%;
	height: 100%;
	min-width: 320px;
	min-height: calc(100vh - 72px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SAuth = styled.div`
	display: block;
	margin: 0 auto;
	background-color: #ffffff;
	max-width: 380px;
	width: 100%;
	padding: 32px 34px;
	border-radius: 30px;
	box-shadow: 0px 20px 67px -12px #00000021;
`;

export const STitle = styled.h1`
	font-weight: 700;
	font-size: 24px;
	text-align: center;
`;

export const SForm = styled.form`
	padding-top: 24px;
  padding-bottom: 24px;
	width: 100%;
	display: flex;
	gap: 12px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SInput = styled.input`
	width: 100%;
	min-width: 100%;
	border-radius: 6px;
	border: 0.5px solid #999999;
	outline: none;
	padding: 12px;

	&::-moz-placeholder {
		font-family: "Montserrat", sans-serif;
		font-weight: 400;
		font-size: 12px;
		color: #999999;
	}

	&::placeholder {
		font-family: "Montserrat", sans-serif;
		font-weight: 400;
		font-size: 12px;
		color: #999999;
	}
`;

export const SBtn = styled.button`
	margin-top: 12px;
	width: 100%;
	height: 40px;
	background-color: #7334ea;
	border-radius: 6px;
	border: none;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	font-weight: 600;
	color: #ffffff;

  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SLinkGroup = styled.div`
	text-align: center;

	p,
	a {
		color: #999999;
		font-size: 12px;
		font-weight: 400;
		line-height: 150%;
	}

	a {
		border-bottom: 1px solid #999999;
	}
`;
