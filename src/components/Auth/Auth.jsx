import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Header } from "../Header/Header";
import {
	SAuth,
	SBtn,
	SContainer,
	SContainerBlock,
	SError,
	SForm,
	SLinkGroup,
	STitle,
	SWrapper,
} from "./Auth.styled";
import { SInput } from "../Input/Input.styled";

const Auth = ({ isSignUp }) => {
	const { register, login } = useAuth();
	const [name, setName] = useState("");
	const [userLogin, setUserLogin] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError("");
		try {
			if (isSignUp) {
				await register(name, userLogin, password);
			} else {
				await login(userLogin, password);
			}
		} catch (submitError) {
			setError(submitError.message);
		}
	};

	return (
		<>
			<Header />
			<SWrapper>
				<SContainer>
					<SContainerBlock>
						<SAuth>
							{isSignUp ? <STitle>Регистрация</STitle> : <STitle>Вход</STitle>}
							<SForm onSubmit={handleSubmit}>
								{isSignUp && (
									<SInput
										type="text"
										name="name"
										id="name"
										placeholder="Имя"
										value={name}
										onChange={(event) => setName(event.target.value)}
										$status={error ? "error" : "default"}
									/>
								)}
								<SInput
									type="text"
									name="login"
									id="login"
									placeholder="Эл. почта"
									value={userLogin}
									onChange={(event) => setUserLogin(event.target.value)}
									$status={error ? "error" : "default"}
								/>
								<SInput
									type="password"
									name="password"
									id="password"
									placeholder="Пароль"
									value={password}
									onChange={(event) => setPassword(event.target.value)}
									$status={error ? "error" : "default"}
								/>
								{error && <SError>{error}</SError>}
								{isSignUp ? (
									<SBtn type="submit">Зарегистрироваться</SBtn>
								) : (
									<SBtn type="submit">Войти</SBtn>
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
