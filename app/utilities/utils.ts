

export const getMovies = async() => {
    try {
        const response = await fetch('/api/get-movies',{
            method: 'GET',
        })
        const result = await response.json();
        return result;

    } catch (error) {
        return error;

    }
}


export async function getMovieDetails(movieId:number) {
    try {
        const url = `/api/get-movie-details/${movieId ?? 0}`;

        const response = await fetch(url);
        if(!response.ok){
            return `Movie id ${movieId} not found`
        }

        const result = await response.json();
        return result;

    } catch (error) {
        return error;

    }
}


export async function searchMovies(searchQuery:string) {
    try {
        const url = `/api/search-api/${searchQuery}`;

        const response = await fetch(url);
        if(!response.ok){
            return `Movie ${searchQuery}} not found`
        }

        const result = await response.json();
        return result;

    } catch (error) {
        return error;

    }
}



export const getUpcomingMovies = async() => {
    try {
        const response = await fetch('/api/upcoming-movie',{
            method: 'GET',
        })
        const result = await response.json();
        return result;

    } catch (error) {
        return error;

    }
}


