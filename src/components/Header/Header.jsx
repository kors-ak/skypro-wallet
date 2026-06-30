import { Link } from "react-router-dom";
import {
	SContent,
	SExitButton,
	SHeader,
	SLogo,
	SPagesLinks,
} from "./Header.styled";

export const Header = () => {
	return (
		<SHeader>
			<SContent>
				<SLogo>
					<Link to='/'>
						<img src="logo2.svg" />
					</Link>
				</SLogo>
				<SPagesLinks>
					<Link to="/">Мои расходы</Link>
					<Link to="/analytics">Анализ расходов</Link>
				</SPagesLinks>
				<SExitButton>
					<Link to="">Выйти</Link>
				</SExitButton>
			</SContent>
		</SHeader>
	);
};

export default Header;