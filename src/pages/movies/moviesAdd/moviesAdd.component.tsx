import React from "react";
import { useForm } from "react-hook-form";

import { FormGeneralValues } from "../../../types/form";

import {
  Container,
  Form,
  InputContainer,
  MainContainer,
  Box,
  ArrowDownIcon,
  CancelButtonContainer,
  Title,
  CloseIconContainer,
  CloseIcon,
} from "./moviesAdd.styles";

import Button from "../../../components/button/button.components";
import InputComponent from "../../../components/input/input.component";
import TextAreaComponent from "../../../components/text-area/text-area.component";
import SelectComponent from "../../../components/select/select.component";
import { ww } from "../../../styles/responsive";
import { GeneralContext } from "../../../context/generalContext";
import { validate } from "./validateInput";

const MoviesAdd: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { setEditData, setPageDetails, setMovies, categories } =
    React.useContext(GeneralContext);
  const [selected, setSelected] = React.useState<string>();

  const {
    register,
    getValues,
    formState: { errors },
    setError,
  } = useForm<FormGeneralValues>();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasError = validate(
      {
        name: getValues("name"),
        image: getValues("image"),
        video: getValues("video"),
        duration: getValues("duration"),
        year: getValues("year"),
      },
      setError
    );

    if (hasError) return;

    try {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setPageDetails?.({});
        setEditData?.({});
        setMovies?.({
          id: 12,
          name: getValues("name")!,
          image: getValues("image")!,
          video: getValues("video")!,
          duration: getValues("duration")!,
          year: getValues("year")!,
          category: selected!,
          description: "string",
        });
      }, 2500);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const onCancel = () => {
    setPageDetails?.({});
    setEditData?.({});
  };

  return (
    <MainContainer>
      <Box>
        <Container>
          <Title>Adicionar Filme</Title>
          <CloseIconContainer onClick={onCancel}>
            <CloseIcon />
          </CloseIconContainer>
          <Form onSubmit={onSubmit}>
            <InputContainer>
              <InputComponent
                register={register}
                required={true}
                onFocus={() => setError("name", { type: "", message: "" })}
                name="name"
                type="text"
                placeholder="Name"
                error={errors.name?.message}
                width={ww(165)}
              />
              <InputComponent
                register={register}
                required={true}
                onFocus={() => setError("image", { type: "", message: "" })}
                name="image"
                type="text"
                placeholder="Image"
                error={errors.image?.message}
                width={ww(165)}
              />
              <InputComponent
                register={register}
                required={true}
                onFocus={() => setError("video", { type: "", message: "" })}
                name="video"
                type="text"
                placeholder="Video"
                error={errors.video?.message}
                width={ww(165)}
              />
              <InputComponent
                register={register}
                required={true}
                onFocus={() => setError("duration", { type: "", message: "" })}
                name="duration"
                type="text"
                placeholder="Duration"
                error={errors.duration?.message}
                width={ww(165)}
              />
              <InputComponent
                register={register}
                required={true}
                onFocus={() => setError("year", { type: "", message: "" })}
                name="year"
                type="text"
                placeholder="Year"
                error={errors.year?.message}
                width={ww(165)}
              />
              <SelectComponent data={categories} setData={setSelected}>
                <ArrowDownIcon />
              </SelectComponent>
              <TextAreaComponent
                register={register}
                name="description"
                type="text"
                placeholder="Escreva uma descrição.."
                maxLength={250}
                onFocus={() =>
                  setError("description", { type: "", message: "" })
                }
                error={errors.description?.message}
              />
            </InputContainer>
            <Button type="submit" title="Salvar" isLoading={isLoading} />
          </Form>
          {!isLoading && (
            <CancelButtonContainer>
              <Button
                title="Cancelar"
                isLoading={isLoading}
                inverterColor
                clickFunction={onCancel}
              />
            </CancelButtonContainer>
          )}
        </Container>
      </Box>
    </MainContainer>
  );
};

export default MoviesAdd;
