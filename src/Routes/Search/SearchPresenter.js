import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";


const Container = styled.div`
    padding: 0px 20px;

`
const Form = styled.form`
    width: 100%;
    margin-bottom: 50px;
`

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`

const SearchPresenter = ({movieResults, tvResults, searchTerm, loading, error, handleSubmit, updateTerm})=>{
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm}></Input>
            </Form>
            {loading ? <Loader/> : 
            <> 
            {movieResults && movieResults.length > 0 && <Section title="Movie Results">{movieResults.map(movie => <span key={movie.id}>{movie.title}</span>)}</Section>} 
            {tvResults && tvResults.length > 0 && <Section title="TV Show Results">{tvResults.map(tv => <span key={tv.id}>{tv.name}</span>)}</Section>} 
            </> 
            }
            {error && <Message color="#e74c3c" text={error}/>}
            {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && <Message color="#7f8c8d" text="Nothing Found"/>}
        </Container>
    )
}


SearchPresenter.propTypes = {
    movieResults: PropTypes.array, 
    tvResults : PropTypes.array, 
    searchTerm : PropTypes.string, 
    error : PropTypes.string,
    loading : PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;