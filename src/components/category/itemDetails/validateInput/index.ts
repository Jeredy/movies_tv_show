import { FormCategoryValues } from "../../../../types/form";

export const validate = (value: FormCategoryValues, setError: any) => {
  const { category } = value;

  const passError = {
    category: false,
  };

  if (typeof category === "string") {
    if (!value.category?.length) {
      passError.category = true;
      setError("category", {
        type: "required",
        message: "Informe uma categoria.",
      });
    } else if (value.category?.length < 3 || value.category?.length > 60) {
      passError.category = true;
      setError("category", {
        type: "required",
        message: "Informe uma nome válido entre 3 e 20 caracteres",
      });
    }
  }

  return passError.category;
};
