import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  position: relative;
  padding: 50px;
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bgImage}) no-repeat center center;
  background-size:cover;
  filter: blur(3px);
  opacity: 0.4;
`;

const Content = styled.div`
    display: flex;
    width:100%;
    height: 100%;
`

const Cover = styled.div`
    width:500px;
    height:100%;
    background: url(${props => props.bgUrl}) no-repeat center center;
    background-size: cover;
    border-radius:20px;
    z-index:1;

`

function DetailPresenter({ result, error, loading }) {
  if(loading) {
      return <Loader />
  } else { 
      return (
        <>
            <Container>
                <BackDrop
                    bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                />
                <Content>
                    <Cover bgUrl={result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` :  require("assets/noPosterSmall.png").default }></Cover>
                </Content>
            </Container>
            {error && <Message color="#d35400" text="Can't find Information of selected Show" /> }
        </>
      );
  }
}

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
