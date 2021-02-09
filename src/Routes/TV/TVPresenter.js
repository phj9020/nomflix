import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";




function TVPresenter({popular, topRated, airingToday, error, loading}){
    return(
        <>
         TV
        </>
        ) 
}



TVPresenter.propTypes = {
    popular:PropTypes.array, 
    topRated: PropTypes.array, 
    airingToday: PropTypes.array, 
    error: PropTypes.string, 
    loading : PropTypes.bool.isRequired
}


export default TVPresenter;