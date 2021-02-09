import React from "react";
import HomePresenter from "./HomePresenter";
import {moviesApi} from "api";

class HomeContainer extends React.Component {
    state = {
        nowPlaying: null,
        popular: null,
        upcoming: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        // API request 
        try {
            //  const nowplayiong = await moviesApi.nowPlaying();
            //  nowPlaying.data.results
            const {data : {results : nowPlaying}} = await moviesApi.nowPlaying();
            const {data: {results : upcoming}} = await moviesApi.upcoming();
            const {data: {results : popular}} = await moviesApi.popular();
            this.setState({
                nowPlaying: nowPlaying,
                upcoming: upcoming,
                popular: popular
            });
        } catch {
            this.setState({error: "Can't Find Movie Information"})
        } finally {
            this.setState({loading: false});
        }
    }



render() {
    const { nowPlaying, popular, upcoming, error, loading } = this.state;
    console.log(nowPlaying)
    return (
        <HomePresenter
            nowPlaying={nowPlaying}
            upcoming={upcoming}
            popular={popular}
            error={error}
            loading={loading}
        />
    );
}
}

export default HomeContainer;
