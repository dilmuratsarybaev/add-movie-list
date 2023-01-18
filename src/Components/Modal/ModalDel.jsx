import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

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

const ContainerModal = styled.div`
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

const ParagraphQuetion = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: cursive;
  text-align: left;
`;
const ContainerButtons = styled.button`
  border: none;
  background-color: #fff;
  display: flex;
  margin-left: 20rem;
`;

const ButtonYes = styled.button`
  background-color: #1313dc;
  color: #fff;
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 0.3rem;
  margin-left: 1rem;
`;
const ButtonNo = styled.button`
  background-color: #c4c4e0;
  color: #fff;
  padding: 0.3rem 1rem;
  border: none;
  border-radius: 0.3rem;
`;
export const ModalDel = ({ onMiniModal, deleteByIds, id, onTheConfirm }) => {
  console.log(id);
  const onShowModal = () => {
    deleteByIds(id);
    onTheConfirm();
  };
  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <ContainerModal>
        <ParagraphQuetion>Are you sure you wanna delete?</ParagraphQuetion>
        <ContainerButtons>
          <ButtonNo children="No" onClick={onMiniModal} />
          <ButtonYes children="Yes" onClick={onShowModal} />
        </ContainerButtons>
      </ContainerModal>
    </>,
    document.getElementById("minimodal")
  );
};
