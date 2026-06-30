import styled from "styled-components";

export const SHeader = styled.header`
	background-color: #ffffff;
`;
export const SContent = styled.div`
	padding-left: calc(50% - 600px);
	padding-right: calc(50% - 600px);
	padding-top: 24px;
	padding-bottom: 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const SLogo = styled.div``;

export const SGroup = styled.div`
	display: flex;
	gap: 400px;
`;

export const SPagesLinks = styled.div`
	display: flex;
	gap: 48px;

	a {
		font-weight: 400;
		font-size: 14px;
		line-height: 170%;
		color: black;
	}
`;

export const SExitButton = styled.button`
	background-color: transparent;

	a {
		font-weight: 600;
		font-size: 14px;
		line-height: 170%;
		color: black;
	}
`;
