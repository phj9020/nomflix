import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

function DetailPresenter({result, error, loading}){
    return(
        <>de</>
    )
}

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default DetailPresenter;