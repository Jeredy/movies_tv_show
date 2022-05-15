import React from "react";
import { useForm } from "react-hook-form";

import { FormValues } from "../../../types/form";
import Button from "../../button/button.components";
import Input from "../../input/input.component";
import { validate } from "../../input/validateInput";
import Alert from "../../alert/alert.component";

import LogoImage from "../../../assets/images/logo.png";

import {
	AuthBox,
	AuthContainer,
	Logo,
	LogoContainer,
	MainLabel,
	SubLabel,
} from "../auth.styles";

import {
	Container,
	EmailIcon,
	Form,
	InputContainer,
} from "./defineNewPassword.styles";

const DefineNewPassword: React.FC = () => {
	const {
		register,
		getValues,
		formState: { errors },
		setError,
	} = useForm<FormValues>();
	const [showAlert, setShowAlert] = React.useState(false);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		validate(
			{
				password: getValues("password"),
				confirmPassword: getValues("confirmPassword"),
			},
			setError,
			errors,
		);

		setShowAlert(!showAlert);
	};

	return (
		<AuthContainer>
			<AuthBox>
				<LogoContainer>
					<Logo src={LogoImage} />
				</LogoContainer>
				<MainLabel>Definir Nova Senha</MainLabel>
				<SubLabel>Informe sua nova senha:</SubLabel>
				<Container style={{ display: "flex" }}>
					<Form onSubmit={onSubmit}>
						<InputContainer>
							<Input
								register={register("password", { required: true })}
								onFocus={() => setError("password", { type: "", message: "" })}
								name="password"
								type="password"
								placeholder="Senha"
								error={errors.password?.message}
							>
								<EmailIcon />
							</Input>
							<Input
								register={register("confirmPassword", { required: true })}
								onFocus={() =>
									setError("confirmPassword", { type: "", message: "" })
								}
								name="confirmPassword"
								type="password"
								placeholder="Confirmar Senha"
								error={errors.confirmPassword?.message}
							>
								<EmailIcon />
							</Input>
						</InputContainer>
						<Button type="submit" title="Salvar" />
					</Form>
				</Container>
			</AuthBox>
			{showAlert && (
				<Alert
					text="Sua nova senha foi criada, agora você pode fazer o login"
					buttonText="Entedi"
					buttonLink="/"
				/>
			)}
		</AuthContainer>
	);
};

export default DefineNewPassword;
