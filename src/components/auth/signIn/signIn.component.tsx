import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "../../button/button.components";
import Input from "../../input/input.component";
import { Context } from "../../../context/authContext";
import { validate } from "../../input/validateInput";
import { FormValues } from "../../../types/form";
import LogoImage from "../../../assets/images/logo.png";

import {
  AuthBox,
  AuthContainer,
  InputLink,
  Logo,
  LogoContainer,
  TextError,
} from "../auth.styles";

import {
  Container,
  EmailIcon,
  Form,
  InputContainer,
  LockIcon,
} from "./signIn.styles";

const Signin: React.FC = () => {
  const { setAdmin, setAuthenticated } = React.useContext(Context);
  const [apiError, setApiError] = React.useState(false);
  const [flag, setFlag] = React.useState(false);
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

    if (flag && !hasError) {
      try {
        setIsLoading(true);

        setAdmin?.({
          name: "Paulo Test",
          email: getValues("email")!,
          token: "123",
        });
        setAuthenticated?.(true);
        setIsLoading(false);
        navigate("/home");
      } catch (err) {
        setApiError(true);
        setIsLoading(false);
      }
    }

    setFlag(true);
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
                register={register("email", {
                  required: true,
                })}
                onFocus={() => setError("email", { type: "", message: "" })}
                name="email"
                type="text"
                placeholder="Email"
                error={errors.email?.message}
              >
                <LockIcon />
              </Input>
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
