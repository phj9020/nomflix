import React from "react";
import SearchPresenter from "./SearchPresenter";
import {moviesApi, tvApi} from "api";

class SearchContainer extends React.Component{
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    }
    
    handleSubmit() {
        const {searchTerm} = this.state;
        if(searchTerm !== "") {
            this.searchByTerm();
        }
    }
    
    async searchByTerm() {
        const {searchTerm} = this.state;
        this.setState({loading: true});
        try{
            const {data: {results : movieResults}} = await moviesApi.search(searchTerm);
            const {data: {results : tvResults}} = await tvApi.search(searchTerm);
            this.setState({
                movieResults : movieResults,
                tvResults : tvResults
            });
        }catch{
            this.setState({error: "Can't Find Results"})
        }finally{
            this.setState({loading:false})
        }
    }

    render(){
        const {movieResults, tvResults, searchTerm, loading,error} = this.state;
        return <SearchPresenter movieResults={movieResults} tvResults={tvResults} searchTerm={searchTerm} loading={loading} error={error} handleSubmit={this.handleSubmit}/>
    }
}

export default SearchContainer;