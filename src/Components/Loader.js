import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:100vh;
`

const Span = styled.span`
    position:absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
`



const Loader = ()=> <Container><Span role="img" aria-label="loading">⌛</Span></Container>

export default Loader;