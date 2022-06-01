import { FormGeneralValues } from "../../../../types/form";

export const validate = (value: FormGeneralValues, setError: any) => {
  const { name, image } = value;

  const passError = {
    name: false,
    image: false,
  };

  if (typeof name === "string") {
    if (!value.name?.length) {
      passError.name = true;
      setError("name", {
        type: "required",
        message: "Informe um nome.",
      });
    } else if (value.name?.length < 3 || value.name?.length > 60) {
      passError.name = true;
      setError("name", {
        type: "required",
        message: "Inform uma nome válido entre 3 e 20 caracteres",
      });
    }
  }

  if (typeof image === "string") {
    if (!value.image?.length) {
      passError.image = true;
      setError("image", {
        type: "required",
        message: "Informe um image.",
      });
    } else if (
      value.image?.search(".png") === -1 &&
      value.image?.search(".jpg") === -1 &&
      value.image?.search(".jpeg") === -1
    ) {
      passError.image = true;
      setError("image", {
        type: "required",
        message: "Inform uma image do tipo '.png' ou '.jpg' ou '.jpeg'.",
      });
    }
  }

  return passError.name || passError.image;
};
