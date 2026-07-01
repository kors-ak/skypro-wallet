import { Link } from "react-router-dom";
import {
	SContent,
	SExitButton,
	SGroup,
	SHeader,
	SLogo,
	SPagesLinks,
} from "./Header.styled";

export const Header = () => {
	return (
		<SHeader>
			<SContent>
				<SLogo>
					<Link to="/">
						<img src="logo2.svg" />
					</Link>
				</SLogo>
				<SGroup>
					<SPagesLinks>
						<Link to="/">Мои расходы</Link>
						<Link to="/analytics">Анализ расходов</Link>
					</SPagesLinks>
					<SExitButton>
						<Link to="/sign-in">Выйти</Link>
					</SExitButton>
				</SGroup>
			</SContent>
		</SHeader>
	);
};

export default Header;
