import { FormGeneralValues } from "../../../../types/form";

export const validate = (value: FormGeneralValues, setError: any) => {
  const { name, image, video, duration, year, description } = value;

  const passError = {
    name: false,
    image: false,
    video: false,
    duration: false,
    year: false,
    description: false,
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
        message: "Informe uma nome válido entre 3 e 20 caracteres",
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
        message: "Informe uma image do tipo '.png' ou '.jpg' ou '.jpeg'.",
      });
    }
  }

  if (typeof video === "string") {
    if (!value.video?.length) {
      passError.video = true;
      setError("video", {
        type: "required",
        message: "Informe um video.",
      });
    } else if (value.video?.search("youtube") === -1) {
      passError.video = true;
      setError("video", {
        type: "required",
        message: "Informe uma video do tipo do youtube.",
      });
    }
  }

  if (typeof duration === "string") {
    if (!value.duration?.length) {
      passError.duration = true;
      setError("duration", {
        type: "required",
        message: "Informe uma duração.",
      });
    } else if (value.duration?.length < 3 || value.duration?.length > 60) {
      passError.duration = true;
      setError("duration", {
        type: "required",
        message: "Informe uma duração válido entre 3 e 20 caracteres",
      });
    }
  }

  if (typeof year === "string") {
    if (!value.year?.length) {
      passError.year = true;
      setError("year", {
        type: "required",
        message: "Informe um nome.",
      });
    } else if (+value.year < 1900 || +value.year > new Date().getFullYear()) {
      passError.year = true;
      setError("year", {
        type: "required",
        message: "Informe uma ano válido",
      });
    }
  }

  if (typeof description === "string") {
    if (!value.description?.length) {
      passError.description = true;
      setError("description", {
        type: "required",
        message: "Informe um descrição.",
      });
    } else if (
      value.description?.length < 3 ||
      value.description?.length > 300
    ) {
      passError.description = true;
      setError("description", {
        type: "required",
        message: "Informe uma descrição válida entre 3 e 3000 caracteres",
      });
    }
  }

  return (
    passError.name ||
    passError.image ||
    passError.video ||
    passError.duration ||
    passError.year ||
    passError.description
  );
};
