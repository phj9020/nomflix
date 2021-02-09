import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.section`
    padding: 0px 20px;
`


function TVPresenter({popular, topRated, airingToday, error, loading}){
    if(loading) {
         return <Loader />;
    } else {
        return(
            <Container>
                {topRated && topRated.length > 0 && <Section title="Top Rated Shows">{topRated.map(tv => <span key={tv.id}>{tv.name}</span>)}</Section>}
                {popular && popular.length > 0 && <Section title="TV Shows">{popular.map(tv => <span key={tv.id}>{tv.name}</span>)}</Section>}
                {airingToday && airingToday.length > 0 && <Section title="Airing Today">{airingToday.map(tv => <span key={tv.id}>{tv.name}</span>)}</Section>}
            </Container>
            ) 
    }
}



TVPresenter.propTypes = {
    popular:PropTypes.array, 
    topRated: PropTypes.array, 
    airingToday: PropTypes.array, 
    error: PropTypes.string, 
    loading : PropTypes.bool.isRequired
}


export default TVPresenter;