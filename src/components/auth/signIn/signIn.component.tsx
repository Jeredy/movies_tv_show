import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../button/button.components";
import Input from "../../input/input.component";
import { AuthContext } from "../../../context/authContext";
import { validate } from "../validateInput";
import { FormValues } from "../../../types/form";
import LogoImage from "../../../assets/images/logo.png";

import {
  AuthBox,
  AuthContainer,
  EmailIcon,
  InputLink,
  LockIcon,
  Logo,
  LogoContainer,
  TextError,
} from "../auth.styles";

import { Container, Form, InputContainer } from "./signIn.styles";
import { ww } from "../../../styles/responsive";

const Signin: React.FC = () => {
  const { setAdmin, setAuthenticated } = React.useContext(AuthContext);
  const [apiError, setApiError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const {
    register,
    getValues,
    formState: { errors },
    setError,
  } = useForm<FormValues>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasError = validate(
      { email: getValues("email"), password: getValues("password") },
      setError,
      errors
    );

    if (!hasError) {
      try {
        setIsLoading(true);

        setAdmin?.({
          name: "Paulo Test",
          email: getValues("email")!,
          token: "124123413",
        });

        setAuthenticated?.(true);
        setIsLoading(false);
        navigate("/home", { replace: true });
      } catch (err) {
        setApiError(true);
        setIsLoading(false);
      }
    }
  };

  return (
    <AuthContainer>
      <AuthBox>
        <LogoContainer>
          <Logo src={LogoImage} />
        </LogoContainer>
        <Container style={{ display: "flex" }}>
          <Form onSubmit={onSubmit}>
            <InputContainer>
              <Input
                register={register}
                required={true}
                onFocus={() => setError("email", { type: "", message: "" })}
                name="email"
                type="text"
                placeholder="Email"
                error={errors.email?.message}
                width={ww(165)}
              >
                <LockIcon />
              </Input>
              <Input
                register={register}
                required={true}
                onFocus={() => setError("password", { type: "", message: "" })}
                name="password"
                type="password"
                placeholder="Senha"
                error={errors.password?.message}
                width={ww(165)}
              >
                <EmailIcon />
              </Input>
            </InputContainer>
            {apiError && (
              <TextError>* Acesso negado, email ou senha incorreto.</TextError>
            )}
            <Button type="submit" title="Entrar" isLoading={isLoading} />
          </Form>
          <InputLink to="/forgetPasswordStudent">Esqueci minha senha</InputLink>
        </Container>
      </AuthBox>
    </AuthContainer>
  );
};

export default Signin;
