import React from "react";
import styled from "styled-components";

function Movies({ onSubmit, submitContent }) {
  return (
    <Container>
      <h4>Recommened for You</h4>
      <Content>
        {[...Array(4).keys()].map((item) => (
          <Wrap key={item}>
            <img
              src="https://s3.cloud.cmctelecom.vn/tinhte1/2018/12/4512215_46_26_1361525668_37_biet_doi_sieu_anh_hung.jpg"
              alt=""
            />
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
