import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useExpenses } from "../../context/ExpensesContext";
import {
	SContent,
	SExitButton,
	SGroup,
	SHeader,
	SLogo,
	SPagesLinks,
} from "./Header.styled";

export const Header = ({ isAuth }) => {
	const { logout } = useAuth();
	const { clearExpenses } = useExpenses();

	return (
		<SHeader>
			{isAuth ? (
				<SContent>
					<SLogo>
						<Link to="/">
							<img src="logo2.svg" />
						</Link>
					</SLogo>
				</SContent>
			) : (
				<SContent>
					<SLogo>
						<Link to="/">
							<img src="logo2.svg" />
						</Link>
					</SLogo>
					<SGroup>
						<SPagesLinks>
							<NavLink to="/" end>
								Мои расходы
							</NavLink>
							<NavLink to="/analytics">Анализ расходов</NavLink>
						</SPagesLinks>
						<SExitButton
							onClick={() => {
								logout();
								clearExpenses();
							}}
						>
							Выйти
						</SExitButton>
					</SGroup>
				</SContent>
			)}
		</SHeader>
	);
};

export default Header;
