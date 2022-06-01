import React from "react";
import { GeneralContext } from "../../context/generalContext";

import { SelectProps, SelectStyle } from "../../types/select";

import {
  Container,
  SelectContainer,
  IconContainer,
  Select,
  Text,
  ShowContainer,
  ShowOptions,
  Divisor,
} from "./select.styles";

const SelectComponent: React.FC<SelectProps & SelectStyle> = ({
  data,
  setData,
  children,
  initialValue,
  width,
}) => {
  const [show, setShow] = React.useState(false);
  const [checked, setChecked] = React.useState([""]);
  const [selected, setSelected] = React.useState({
    title: data?.[0].title,
    value: data?.[0].value,
  });

  React.useEffect(() => {
    setData?.(
      data?.[!!initialValue && initialValue >= 0 ? initialValue : 0].id
    );
    if (initialValue && initialValue >= 0) {
      setSelected({
        title: data?.[initialValue].title,
        value: data?.[initialValue].value,
      });
    }
  }, [initialValue]);

  return (
    <Container>
      <SelectContainer
        hasChildren={!!children}
        isFocus={true}
        onClick={() => setShow(!show)}
        width={width}
      >
        <Select isFocus hasChildren={!!children} width={width}>
          <Text>{selected.title}</Text>
        </Select>
        <IconContainer selected={show}>{children}</IconContainer>
      </SelectContainer>
      {show && (
        <ShowContainer
          className={`${data?.[0].title} scroll`}
          hasChildren={!!children}
          isFocus={true}
          qtdeItems={data.length!}
          width={width}
        >
          {data.map(({ id, title, value }, index) => (
            <>
              <ShowOptions
                key={index}
                isFocus
                hasChildren={!!children}
                onClick={() => (
                  setShow(!show), setSelected({ title, value }), setData?.(id)
                )}
              >
                <Text>{title}</Text>
              </ShowOptions>
              {data.length !== 1 && index !== data.length - 1 && <Divisor />}
            </>
          ))}
        </ShowContainer>
      )}
    </Container>
  );
};

export default SelectComponent;
