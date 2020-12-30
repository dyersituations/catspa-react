import React from "react";
import styled from "styled-components";

interface TextboxProps {
  valueKey: string;
  value: string;
  onChange: (key: string, value: string) => void;
}

const StyledTextbox = styled.input`
  padding: 5px;
`;

const Textbox = (props: TextboxProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(props.valueKey, e.target.value);
  };

  return <StyledTextbox type="text" onChange={onChange}></StyledTextbox>;
};

export default Textbox;
