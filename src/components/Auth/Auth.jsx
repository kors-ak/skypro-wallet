import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import {
	SAuth,
	SBtn,
	SContainer,
	SContainerBlock,
	SForm,
	SInput,
	SLinkGroup,
	STitle,
	SWrapper,
} from "./Auth.styled";

const Auth = ({ isSignUp }) => {
	return (
		<>
			<Header />
			<SWrapper>
				<SContainer>
					<SContainerBlock>
						<SAuth>
							{isSignUp ? <STitle>Регистрация</STitle> : <STitle>Вход</STitle>}
							<SForm>
								{isSignUp && (
									<SInput type="text" name="name" id="name" placeholder="Имя" />
								)}
								<SInput
									type="text"
									name="login"
									id="login"
									placeholder="Эл. почта"
								/>
								<SInput
									type="password"
									name="password"
									id="password"
									placeholder="Пароль"
								/>
								{isSignUp ? (
									<SBtn>
                    <Link to="/">Зарегистрироваться</Link>
                  </SBtn>
								) : (
									<SBtn>
                    <Link to="/">Войти</Link>
                  </SBtn>
								)}
							</SForm>
							{isSignUp ? (
								<SLinkGroup>
									<p>Уже есть аккаунт?</p>
									<Link to="/sign-in">Войдите здесь</Link>
								</SLinkGroup>
							) : (
								<SLinkGroup>
									<p>Нужно зарегистрироваться?</p>
									<Link to="/sign-up">Регистрируйтесь здесь</Link>
								</SLinkGroup>
							)}
						</SAuth>
					</SContainerBlock>
				</SContainer>
			</SWrapper>
		</>
	);
};

export default Auth;
