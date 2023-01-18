import { useState } from "react";
import styled from "styled-components";
import { Modal } from "../Modal/Modal";
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: rgb(5, 5, 157);
`;
const Span = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
`;
// console.log(Header);
const AddButton = styled.button`
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #e37515;
  color: #fff;
  font-weight: 550;
  margin-right: 1rem;
`;
export const HeaderMain = ({ onMovieList }) => {
  const [isModalVisible, setModal] = useState(false);
  const openModalButton = (event) => {
    event.preventDefault();
    setModal((prevState) => !prevState);
    // console.log("gfhsjkdhg")
  };

  const onConfirm = () => {
    setModal(false);
  };
  return (
    <>
      {isModalVisible ? (
        <Modal onClose={openModalButton} onMovieList={onMovieList} onConfirm= {onConfirm} />
      ) : null}
      <Header>
        <div>
          <Span>Favorite Movies</Span>
        </div>
        <div>
          <AddButton children="ADD MOVIE" onClick={openModalButton}></AddButton>
        </div>
      </Header>
    </>
  );
};
