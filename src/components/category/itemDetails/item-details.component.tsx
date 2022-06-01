import React from "react";
import { useForm } from "react-hook-form";
import { GeneralContext } from "../../../context/generalContext";
import { ww } from "../../../styles/responsive";
import { ItemDetailsProps } from "../../../types/category";
import Alert from "../../alert/alert.component";
import InputComponent from "../../input/input.component";
import { validate } from "./validateInput";

import {
  Container,
  Title,
  SubContainer,
  Form,
  TrashIcon,
  EditIcon,
  CloseIcon,
  CheckIcon,
} from "./item.details.styles";

const ItemDetails: React.FC<ItemDetailsProps> = ({ name, id }) => {
  const { movies, tvShows, editCategory, deleteCategory } =
    React.useContext(GeneralContext);
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    setError,
  } = useForm<any>();
  const [showCautionAlert, setShowCautionAlert] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(false);

  const onSubmit = async () => {
    const hasError = validate(
      {
        category: getValues(`${name}`),
      },
      setError
    );

    if (hasError) return;

    try {
      setIsEditing(false);
      editCategory?.({
        id,
        title: getValues(`${name}`)!,
        value: getValues(`${name}`)!,
      });
    } catch (err) {
      //
    }
  };

  React.useEffect(() => {
    setValue(`${name}`, name);
  }, []);

  const onDeleting = () => {
    setIsLoading(true);
    const canDelete = {
      answer: true,
    };

    movies.forEach((movie) => {
      if (movie.category === id) {
        return (canDelete.answer = false);
      }
    });

    tvShows.forEach((tvShow) => {
      if (tvShow.category === id) {
        return (canDelete.answer = false);
      }
    });

    if (canDelete.answer) {
      deleteCategory?.(id);
    } else {
      setIsEmpty(true);
    }

    setIsLoading(false);
  };

  const onCloseAlert = () => {
    setIsEmpty(false);
    setShowCautionAlert(false);
  };

  const onFinishEditing = () => {
    setIsEditing(!isEditing);

    if (isEditing) {
      onSubmit();
    }
  };

  return (
    <Container>
      <Form>
        {isEditing ? (
          <InputComponent
            register={register}
            required={true}
            value={getValues(`${name}`)}
            onFocus={() => setError(`${name}`, { type: "", message: "" })}
            name={`${name}`}
            type="text"
            placeholder="Category"
            error={errors[`${name}`]?.message}
            width={ww(150)}
          />
        ) : (
          <Title>{name}</Title>
        )}
        <SubContainer>
          {isEditing ? (
            <CloseIcon
              onClick={() => {
                setIsEditing(false);
                setValue(`${name}`, name);
              }}
            />
          ) : (
            <EditIcon onClick={() => setIsEditing(true)} />
          )}
          {isEditing ? (
            <CheckIcon onClick={onFinishEditing} />
          ) : (
            <TrashIcon onClick={() => setShowCautionAlert(true)} />
          )}
        </SubContainer>
      </Form>
      {showCautionAlert && (
        <Alert
          text={
            isEmpty
              ? `Erro ao deletar deletada, existem streamings relacionados a essa categoria:${name}`
              : `Você está prestes a deletar essa categoria:${name}`
          }
          buttonText={`${isEmpty ? "Entendi" : "Deletar"}`}
          clickFunction={onCloseAlert}
          cautionFunction={() => (isEmpty ? onCloseAlert() : onDeleting())}
          isLoading={isLoading}
          isCaution={true}
        />
      )}
    </Container>
  );
};

export default ItemDetails;
