import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
	SContent,
	SExitButton,
	SGroup,
	SHeader,
	SLogo,
	SPagesLinks,
} from "./Header.styled";

export const Header = () => {
	const { logout } = useAuth();

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
					<SExitButton onClick={logout}>Выйти</SExitButton>
				</SGroup>
			</SContent>
		</SHeader>
	);
};

export default Header;
