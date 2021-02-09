import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.section`
    padding: 0px 20px;
`;

// const HomePresnter = ({nowPlaying, popular, upcoming, error, loading})=> loading ? null : <Container></Container>
function HomePresenter({nowPlaying, popular, upcoming, error, loading}){
    if(loading) {
        return <Loader />
    } else {
        return(
           <Container>
               {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing">{nowPlaying.map(movie => <span key={movie.id}>{movie.title}</span>)}</Section>}
               {upcoming && upcoming.length > 0 && <Section title="Upcoming Movies">{upcoming.map(movie =><span key={movie.id}>{movie.title}</span>)}</Section>}
               {popular && popular.length > 0 && <Section title="Popular Movies">{popular.map(movie => <span key={movie.id}>{movie.title}</span>)}</Section>}
           </Container>
        )
    }
}

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter;