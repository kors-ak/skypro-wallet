import styled from "styled-components";
import { SLoader } from "../ExpensesTable/ExpensesTable.styled";

export const SExpensesChart = styled.section`
	background-color: #ffffff;
	min-height: 540px;
	border-radius: 30px;
	box-shadow: 0px 20px 67px -12px rgba(0, 0, 0, 0.13);
	position: relative;

	svg {
    outline: none;

			*:focus {
			outline: none;
		}
  }
`;
export const SContent = styled.div`
	padding: 32px;
`;
export const STitle = styled.h2`
	font-weight: 700;
	font-size: 24px;
	line-height: 100%;
	padding-bottom: 24px;
`;
export const SDescription = styled.p`
	font-weight: 400;
	font-size: 12px;
	color: #999999;
  padding-bottom: 20px;
`;
export const SDate = styled.span`
	font-weight: 600;
`;
export const SCalendarLoader = styled(SLoader)`border-radius: 30px;`