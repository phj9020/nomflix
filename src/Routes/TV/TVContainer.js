import React from "react";
import TVPresenter from "./TVPresenter";
import {tvApi} from "api";
class TVContainer extends React.Component {
  state = {
    popular: null,
    topRated: null,
    airingToday: null,
    error: null,
    loading: true,
  };

  componentDidMount = async () => {
    try{
      const {data : {results : popular}} = await tvApi.popular(); 
      const {data : {results : topRated}} = await tvApi.topRated();
      const {data : {results: airingToday}} = await tvApi.airingToday();
      this.setState({
        popular: popular,
        topRated: topRated,
        airingToday: airingToday
      })
    } catch {
      this.setState({error: "Can't find TV Show information"})
    } finally{
      this.setState({loading: false});
    }
  }

  render() {
    const { popular, topRated, airingToday, error, loading } = this.state;
    // console.log(this.state)
    return (
      <TVPresenter
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}

export default TVContainer;
