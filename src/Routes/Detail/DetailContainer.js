import React from "react";
import DetailPresenter from "./DetailPresenter";
import {tvApi, moviesApi} from "api";


class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
        const {location: {pathname}} = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie :  pathname.includes("/movie/")
        }
    }

    async componentDidMount() {
        // const {history: {push}}=this.props;
        const {match :{ params: {id}}, history :{push}}=this.props;

        const parseId = parseInt(id)
        // 만약 id가 숫자가 아니면 홈으로 
        if(isNaN(parseId)){
            return push("/");
        }

        const { isMovie } = this.state;
        let result = null;

        try {
            if(isMovie) {
                // const request = await moviesApi.movieDetail(parseId);
                // result = request.data;
                ({ data : result} = await moviesApi.movieDetail(parseId));
            } else {
                ({data : result} = await tvApi.tvDetail(parseId));
            }
        } catch {
            this.setState({error: "Can't find Selected Movie/TV information"})
        } finally{
            this.setState({loading: false, result : result})
        }
    }

    render() {
        const {result, error, loading} = this.state;
        console.log(result)
        return <DetailPresenter result={result} error={error} loading={loading}/>
    }
}

export default DetailContainer;