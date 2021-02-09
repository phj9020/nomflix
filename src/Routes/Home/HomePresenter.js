import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

function HomePresenter({nowPlaying, popular, upcoming, error, loading}){
    return(
        <>Home</>
    )
}

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter;