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
  const [checked, setChecked] = React.useState([""]);
  const [selected, setSelected] = React.useState({
    title: data[0].title,
    value: data[0].value,
  });

  const setCheckBox = (title: string) => {
    const elementIndex = checked.indexOf(title);

    if (elementIndex > 0) {
      const newChecked = [...checked];
      newChecked.splice(elementIndex, 1);

      setChecked(newChecked);
      setModality?.(newChecked);
    } else {
      setChecked([...checked, title]);
      checked?.shift();

      setModality?.([...checked, title]);
    }
  };

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
          {data.map(({ title, value }, index) => (
            <>
              <ShowOptions
                key={index}
                isFocus
                hasChildren={!!children}
                onClick={() => (
                  !hasCheckBox && setShow(!show),
                  setSelected({ title, value }),
                  setData?.(value),
                  !hasCheckBox && setStatus?.(value),
                  setShow(!show),
                  hasCheckBox && setCheckBox(title)
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
