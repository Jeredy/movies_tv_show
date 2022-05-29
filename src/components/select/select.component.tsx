import React from "react";

import { SelectProps, SelectStyle } from "../../types/select";

import {
  Container,
  SelectContainer,
  SelectContainerSmall,
  IconContainer,
  Select,
  SelectSmall,
  Text,
  ShowContainer,
  ShowOptions,
  Divisor,
} from "./select.styles";

const SelectComponent: React.FC<SelectProps & SelectStyle> = ({
  data,
  setData,
  children,
  isSmall = false,
  setStatus,
  setModality,
  hasCheckBox,
}) => {
  const [show, setShow] = React.useState(false);
  const [selected, setSelected] = React.useState({
    title: data[0].title,
  });

  React.useEffect(() => {
    setData?.(data[0].title);
  }, []);

  return (
    <Container>
      <SelectContainer
        hasChildren={!!children}
        isFocus={true}
        onClick={() => setShow(!show)}
      >
        <Select isFocus hasChildren={!!children}>
          <Text>{selected.title}</Text>
        </Select>
        <IconContainer selected={show}>{children}</IconContainer>
      </SelectContainer>
      {show && (
        <ShowContainer
          hasChildren={!!children}
          isFocus={true}
          qtdeItems={data.length!}
          isSmall={isSmall}
        >
          {data.map(({ title }, index) => (
            <>
              <ShowOptions
                key={index}
                isFocus
                hasChildren={!!children}
                onClick={() => (
                  !hasCheckBox && setShow(!show),
                  setSelected({ title }),
                  setData?.(title),
                  !hasCheckBox && setStatus?.(title),
                  setShow(!show)
                )}
                hasCheckBox={!!hasCheckBox}
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
