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
import { MoviesModel } from "../../../models/movies";

const MoviesAdd: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    movies,
    editData,
    setEditData,
    setPageDetails,
    setMovies,
    editMovie,
    categories,
  } = React.useContext(GeneralContext);
  const [selected, setSelected] = React.useState<string>();
  const { id } = editData;

  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    setError,
  } = useForm<FormGeneralValues>();

  React.useEffect(() => {
    movies.forEach((element) =>
      element.data.forEach((movie) => {
        if (movie.id === id) {
          setValue("name", movie.name);
          setValue("image", movie.image);
          setValue("video", movie.video);
          setValue("duration", movie.duration);
          setValue("year", movie.year);
          setValue("description", movie.description);
          return;
        }
      })
    );
  });

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

      const newData = {
        id: id ?? Math.random() + 1,
        name: getValues("name")!,
        image: getValues("image")!,
        video: getValues("video")!,
        duration: getValues("duration")!,
        year: getValues("year")!,
        category: selected!,
        description: getValues("description")!,
      };

      setTimeout(() => {
        setIsLoading(false);
        setPageDetails?.({});
        setEditData?.({});
        id ? editMovie?.(newData) : setMovies?.(newData);
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
                value={getValues("name")}
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
                value={getValues("image")}
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
                value={getValues("video")}
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
                value={getValues("duration")}
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
                value={getValues("year")}
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
                value={getValues("description")}
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
