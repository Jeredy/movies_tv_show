import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/button.components";
import ItemDetails from "../../components/category/itemDetails/item-details.component";
import { validate } from "../../components/category/itemDetails/validateInput";
import InputComponent from "../../components/input/input.component";
import { GeneralContext } from "../../context/generalContext";
import { ww } from "../../styles/responsive";
import { FormCategoryValues } from "../../types/form";
import {
  Container,
  Box,
  IconContainer,
  Icon,
  TopContainer,
  Title,
  Divisor,
  AnnotationContainer,
  Form,
  SubContainer,
  CloseIcon,
  CheckIcon,
} from "./category.styles";

const CategoryPage: React.FC = () => {
  const { categories, setPageDetails, addCategory } =
    React.useContext(GeneralContext);
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    setError,
  } = useForm<FormCategoryValues>();
  const [showCautionAlert, setShowCautionAlert] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasError = validate(
      {
        category: getValues("category"),
      },
      setError
    );

    if (hasError) return;

    try {
      setIsEditing(false);
      addCategory?.({
        id: new Date().getTime().toString(),
        title: getValues("category")!,
        value: getValues("category")!,
      });
      setValue("category", "");
    } catch (err) {
      //
    }
  };

  return (
    <Container>
      <Box>
        <TopContainer>
          <IconContainer onClick={() => setPageDetails?.(false)}>
            <Icon />
          </IconContainer>

          <Title>Categoria</Title>
          {!isEditing && (
            <Button
              title="Adicionar"
              clickFunction={() => setIsEditing(true)}
              inverterColor
            />
          )}
        </TopContainer>
        <Form onSubmit={onSubmit}>
          {" "}
          {isEditing && (
            <>
              <SubContainer>
                <InputComponent
                  register={register}
                  required={true}
                  value={getValues("category")}
                  onFocus={() =>
                    setError("category", { type: "", message: "" })
                  }
                  name="category"
                  type="text"
                  placeholder="Category"
                  error={errors.category?.message}
                  width={ww(150)}
                />

                <CloseIcon
                  onClick={() => {
                    setIsEditing(false);
                    setValue("category", "");
                  }}
                />
                <CheckIcon
                  onClick={() => document.getElementById("submit")?.click()}
                />
              </SubContainer>
            </>
          )}
          <button id="submit" type="submit" style={{ display: "none" }} />
        </Form>
        <Divisor />
        <AnnotationContainer>
          {categories?.map((category: any) => (
            <>
              <ItemDetails name={category.title} id={category.id} />
              <Divisor />
            </>
          ))}
        </AnnotationContainer>
      </Box>
    </Container>
  );
};

export default CategoryPage;
