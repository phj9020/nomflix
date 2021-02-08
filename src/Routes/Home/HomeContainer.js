import React from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component {
    state = {
        nowPlaying: null,
        popular: null,
        upcoming: null,
        error: null,
        loading: true,
    };

render() {
    const { nowPlaying, popular, upcoming, error, loading } = this.props;
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
