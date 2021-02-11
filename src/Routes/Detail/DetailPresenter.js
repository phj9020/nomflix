import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
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
    width:30%;
    height:100%;
    background: url(${props => props.bgUrl}) no-repeat center center;
    background-size: cover;
    border-radius:20px;
    z-index:1;
`

const Data= styled.div`
    width: 70%;
    margin-left: 30px;
    z-index:1
`

const Title = styled.h2`
    font-size: 40px;
`

const ItemContainer = styled.div`
    width: 100%;
    margin: 20px 0px;
`

const Item = styled.span`
    font-size: 15px;
`

const Divider = styled.span`
  margin: 0px 10px;
`

const Homepage = styled.a`
  display:block;
  font-size: 14px;
  margin-bottom:20px;
  color: gray;
`

const Overview = styled.p`
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;
  opacity:0.8;
  margin-bottom: 50px;

`

const Video = styled.iframe`
  width: 60%;
  height: 400px;
  z-index:111111111;
`



function DetailPresenter({ result, error, loading, videokey }) {
  console.log(videokey)
  if(loading) {
      return (
        <>
          <Helmet>
            <title>Loading | Nomflix</title>
          </Helmet>
          <Loader />
        </>
      )
  } else { 
      return (
        <>
            <Container>
                <Helmet>
                  <title>{result.original_name ? result.original_name : result.original_title} | Nomflix</title>
                </Helmet>
                <BackDrop
                    bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
                />
                <Content>
                    <Cover bgUrl={result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` :  require("assets/noPosterSmall.png").default }></Cover>
                    <Data>
                      <Title>{result.original_name ? result.original_name : result.original_title}</Title>
                      <ItemContainer>
                        <Item>{result.first_air_date ? result.first_air_date.substring(0,4) : result.release_date.substring(0,4) }</Item>
                        <Divider>•</Divider>
                        <Item>{result.runtime ? `${result.runtime} min` : `${result.episode_run_time} Min`}</Item>
                        <Divider>•</Divider>
                        <Item>{result.genres && result.genres.map((item,index) => index === result.genres.length -1 ? item.name : `${item.name} / `)}</Item>
                      </ItemContainer>
                      <Homepage href={result.homepage}>Official Website: {result.homepage}</Homepage>
                      <Overview>{result.overview}</Overview>
                      {videokey.results.length !== 0 ? <Video src={`https://www.youtube.com/embed/${videokey.results[0].key}?autoplay=2&origin=http://localhost:3000`} controls /> : <></>}
                    </Data>
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
