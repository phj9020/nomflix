import axios from 'axios';



const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        "api_key": "98e69d9bfaf2f8b110e14d65918d729a",
        "language": "en-US"
    }
});


// use relative url instead of absolute url("/tv/popular")
// api.get("tv/popular").then((response) => console.log(response.data.results))

// 각 url을 담은 object를 내보낸다. 
export const tvApi = {
    popular: ()=> api.get("tv/popular"),
    topRated: ()=> api.get("tv/top_rated"),
    airingToday: ()=> api.get("tv/airing_today"),
    search: (term)=> api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    }),
    tvDetail : id => api.get(`tv/${id}`, {
        params : {
            append_to_response: 'videos'
        }
    })
}

export const moviesApi ={
    nowPlaying: ()=> api.get("movie/now_playing"),
    popular: ()=> api.get("movie/popular"),
    upcoming: ()=> api.get("movie/upcoming"),
    search: (term)=> api.get("search/movie", {
        params : {
            query: encodeURIComponent(term)
        }
    }),
    movieDetail: id => api.get(`movie/${id}`, {
        params : {
            append_to_response: 'videos'
        }
    })
}
