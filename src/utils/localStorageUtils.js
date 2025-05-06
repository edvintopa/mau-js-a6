export const loadMovies = () => {
    const moviesJson = localStorage.getItem('movies');
    if (moviesJson) {
        return JSON.parse(moviesJson);
    }
    return [];
}

export const saveMovies = (movies) => {
    let moviesJson = JSON.stringify(movies);
    localStorage.setItem('movies', moviesJson);
}