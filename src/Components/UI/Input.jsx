import React from "react";
import styled from "styled-components";

const Label = styled.label`
  text-align: left;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  padding: 0.3rem;
  font-size: 1.2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputLabel = ({ id, type, label, refs, min, max }) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} ref={refs} min={min} max={max} />
    </Container>
  );
};
