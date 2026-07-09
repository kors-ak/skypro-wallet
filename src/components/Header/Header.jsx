import { Link } from "react-router-dom";
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
      </SContent> ) : (
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
