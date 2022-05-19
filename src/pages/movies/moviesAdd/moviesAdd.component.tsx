import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { FormValues } from "../../../types/form";
import LogoImage from "../../../assets/images/logo.png";

import {
  Container,
  Form,
  InputContainer,
  MainContainer,
  AuthBox,
  ArrowDownIcon,
} from "./moviesAdd.styles";

import Button from "../../../components/button/button.components";
import InputComponent from "../../../components/input/input.component";
import TextAreaComponent from "../../../components/text-area/text-area.component";
import SelectComponent from "../../../components/select/select.component";

const MoviesAdd: React.FC = () => {
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

    // const hasError = validate(
    //   { email: getValues("email"), password: getValues("password") },
    //   setError,
    //   errors
    // );
    console.log({
      name: getValues("name"),
      image: getValues("image"),
      video: getValues("video"),
      duration: getValues("duration"),
      year: getValues("year"),
    });

    try {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        navigate("/home");
      }, 2500);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <MainContainer>
      <AuthBox>
        <Container style={{ display: "flex" }}>
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
              />
              <InputComponent
                register={register}
                required={true}
                onFocus={() => setError("image", { type: "", message: "" })}
                name="image"
                type="text"
                placeholder="Image"
                error={errors.image?.message}
              />
              <InputComponent
                register={register}
                required={true}
                onFocus={() => setError("video", { type: "", message: "" })}
                name="video"
                type="text"
                placeholder="Video"
                error={errors.video?.message}
              />
              <InputComponent
                register={register}
                required={true}
                onFocus={() => setError("duration", { type: "", message: "" })}
                name="duration"
                type="text"
                placeholder="Duration"
                error={errors.duration?.message}
              />
              <InputComponent
                register={register}
                required={true}
                onFocus={() => setError("year", { type: "", message: "" })}
                name="year"
                type="text"
                placeholder="Year"
                error={errors.year?.message}
              />
              <SelectComponent
                data={[
                  { title: "Action", value: "Action" },
                  { title: "Science Fiction", value: "Science Fiction" },
                  { title: "Comic", value: "Comic" },
                  { title: "Terror", value: "Terror" },
                ]}
              >
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
        </Container>
      </AuthBox>
    </MainContainer>
  );
};

export default MoviesAdd;
