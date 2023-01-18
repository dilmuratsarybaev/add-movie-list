import React, { Fragment, useState } from "react";
// import { Button } from "../UI/Button";
import styled from "styled-components";
import { ModalDel } from "../Modal/ModalDel";

const ContainerMovieList = styled.div`
  width: 40rem;
  box-shadow: 3px 2px 6px 1px rgb(200, 198, 198);
  border-radius: 0.5rem;
  margin: 1rem auto;
  display: flex;
  border-radius: 0.5rem;
`;
const ImageUrl = styled.img`
  width: 10rem;
  height: 100%;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

const ContainerText = styled.div`
  margin-left: 3rem;
  text-align: left;
`;
const NameParagraph = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  font-family: cursive;
`;

const Span = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  font-family: cursive;
  margin-bottom: 1rem;
  margin-right: 2rem;
  color: #fff;
  padding: 0rem 1rem;
  border-radius: 1rem;
  background-color: #e37515;
`;
const DeleteButton = styled.button`
  background-color: #d30808;
  border-color: #d30808;
  padding: 0.5rem 1.5rem;
  border: none;
  color: #fff;
  margin-right: 1rem;
  border-radius: 0.3rem;
`;
export const Main = ({ movielist, deleteById,  }) => {
  // console.log(deleteById);
  const [isVisibleModal, setVisibleModal] = useState(false);
  const onMiniModal = (event) => {
    event.preventDefault();
    setVisibleModal((prevState) => !prevState);
    // console.log("gdfskjhkjdfhgjk")
  };

  const onTheConfirm = ()=>{
    setVisibleModal(false)
  }
  return (
    <Fragment>
      {movielist.map((element) => {
        return (
          <>
            {isVisibleModal ? (
              <ModalDel
                id={element.id}
                onMiniModal={onMiniModal}
                deleteByIds={deleteById}
                onTheConfirm={onTheConfirm}
              />
            ) : null}
            <ContainerMovieList key={element.id}>
              {/* {console.log(element.id)} */}
              <div>
                <ImageUrl src={element.url} />
              </div>
              <ContainerText>
                <NameParagraph>{element.name}</NameParagraph>
                <p>
                  <Span>{+element.rating}/5 stars</Span>
                  <DeleteButton children="DELETE" onClick={onMiniModal} />
                </p>
              </ContainerText>
            </ContainerMovieList>
          </>
        );
      })}
    </Fragment>
  );
};
