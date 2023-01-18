import React, { useRef } from "react";
import { InputLabel } from "../UI/Input";
import styled from "styled-components";
import ReactDom from "react-dom";
const Backdrop = styled("div")`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;
const ContainerForm = styled.div`
  background-color: #fff;
  width: 30rem;
  padding: 1rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  z-index: 100;
`;
const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const BtnAdd = styled.button`
  background-color: #0909e0;
  color: #fff;
  padding: 0.3rem 1.5rem;
  border-radius: 0.3rem;
  border: none;
`;
const BtnCancel = styled.button`
  background-color: #6868e6;
  color: #fff;
  padding: 0.3rem 1.5rem;
  border-radius: 0.3rem;
  border: none;
  margin-right: 1rem;
`;

//   console.log(enteredTitle);

export const Modal = ({ onClose, onMovieList, onConfirm }) => {
  const inputTitle = useRef("");
  const inputImageUrl = useRef("");
  const inputRating = useRef();
  //   console.log(inputTitle);

  const addMovieItem = (event) => {
    event.preventDefault();
    const enteredTitle = inputTitle.current.value;
    const enteredImageUrl = inputImageUrl.current.value;
    const enteredRating = inputRating.current.value;
    if (
      enteredImageUrl.trim().length !== 0 &&
      enteredTitle.trim().length !== 0 &&
      enteredRating.trim().length
    ) {
      onMovieList(enteredTitle, enteredImageUrl, enteredRating);
      inputTitle.current.value = "";
      inputImageUrl.current.value = "";
      inputRating.current.value = "";
      onConfirm();
    }
    return;
  };
  return ReactDom.createPortal (
    <>
      <ContainerForm>
        <InputLabel
          label="Movie Title"
          id={Math.random().toString()}
          type="text"
          refs={inputTitle}
        />
        <InputLabel
          label="Image URL"
          id={Math.random().toString()}
          type="text"
          refs={inputImageUrl}
        />
        <InputLabel
          label="Your Rating"
          id={Math.random().toString()}
          type="number"
          min="0"
          refs={inputRating}
          max="5"
        />
        <ButtonContainer>
          <BtnCancel children="Cancel" onClick={onClose} />
          <BtnAdd children="Add" onClick={addMovieItem} />
        </ButtonContainer>
      </ContainerForm>
      <Backdrop onClick={onClose} />
      
    </>,
    document.getElementById("modal")
   
  );
};
