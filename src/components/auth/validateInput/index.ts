import { FormValues } from "../../../types/form";

export const validate = (value: FormValues, setError: any, errors: any) => {
  const { email, password, confirmPassword } = value;

  const passError = {
    email: false,
    password: false,
    confirmPassword: false,
  };

  if (typeof email === "string") {
    if (!value.email?.length) {
      passError.email = true;
      setError("email", {
        type: "required",
        message: "Informe um e-mail.",
      });
    } else if (!validateEmail(value.email)) {
      passError.email = true;
      setError("email", {
        type: "required",
        message: "Inform um e-mail válido.",
      });
    }
  }

  if (typeof password === "string") {
    if (!value.password?.length) {
      passError.password = true;
      setError("password", {
        type: "required",
        message: "Informe uma senha.",
      });
    } else if (value.password.length < 6) {
      passError.password = true;
      setError("password", {
        type: "required",
        message: "Mínimo 6 characters.",
      });
    } else if (value.password.length > 20) {
      passError.password = true;
      setError("password", {
        type: "required",
        message: "Máximo 20 characters.",
      });
    }
  }

  if (typeof confirmPassword === "string") {
    if (!value.confirmPassword?.length) {
      passError.confirmPassword = true;
      setError("confirmPassword", {
        type: "required",
        message: "Informe uma senha.",
      });
    } else if (value.confirmPassword.length < 6) {
      passError.confirmPassword = true;
      setError("confirmPassword", {
        type: "required",
        message: "Mínimo 6 characters.",
      });
    } else if (value.confirmPassword.length > 20) {
      passError.confirmPassword = true;
      setError("confirmPassword", {
        type: "required",
        message: "Máximo 20 characters.",
      });
    }
  }

  if (typeof password === "string" && typeof confirmPassword === "string") {
    if (!passError.password && !passError.confirmPassword) {
      if (value.password?.localeCompare(value.confirmPassword!)) {
        setError("confirmPassword", {
          type: "required",
          message: "Valor diferente do campo senha.",
        });
      }
    }
  }

  return passError.email || passError.password || passError.confirmPassword;
};

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
