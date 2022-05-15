import React from "react";
import { useForm } from "react-hook-form";

import Button from "../../button/button.components";
import Input from "../../input/input.component";
import { validate } from "../../input/validateInput";
import { FormValues } from "../../../types/form";
import Alert from "../../alert/alert.component";

import LogoImage from "../../../assets/images/logo.png";

import {
  AuthBox,
  AuthContainer,
  InputLink,
  Logo,
  LogoContainer,
  MainLabel,
  SubLabel,
} from "../auth.styles";

import {
  Container,
  Form,
  InputContainer,
  LockIcon,
} from "./forgotPassword.styles";
import { useSearchParams } from "react-router-dom";
import { Context } from "../../../context/authContext";

const ForgotPassword: React.FC = () => {
  const {
    register,
    getValues,
    formState: { errors },
    setError,
  } = useForm<FormValues>();
  const { setPasswordToken } = React.useContext(Context);
  const [showAlert, setShowAlert] = React.useState(false);
  const [searchParams] = useSearchParams();
  const [flag, setFlag] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const token = searchParams.get("token");
    token?.length && setPasswordToken?.(token);
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = getValues("email");

    const hasError = validate({ email }, setError, errors);

    if (flag && !hasError) {
      setShowAlert(!showAlert);
      setIsLoading(true);
    }

    setFlag(true);
  };

  return (
    <AuthContainer>
      <AuthBox>
        <LogoContainer>
          <Logo src={LogoImage} />
        </LogoContainer>
        <MainLabel>Recuperar Senha</MainLabel>
        <SubLabel>Digite seu email:</SubLabel>
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
            </InputContainer>
            <Button
              type="submit"
              title="Enviar link para meu email"
              isLoading={isLoading}
            />
          </Form>
          <InputLink to="/" replace={true}>
            Cancelar
          </InputLink>
        </Container>
      </AuthBox>
      {!isLoading && showAlert && (
        <Alert
          text="Se esse email estiver cadastrado no sistema, enviaremos um link para a redefinição de senha."
          buttonText="Entedi"
          buttonLink="/"
        />
      )}
    </AuthContainer>
  );
};

export default ForgotPassword;
