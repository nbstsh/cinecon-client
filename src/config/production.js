const API_ROOT = 'https://cinecon.herokuapp.com'


const config = {
    api: {
        root: API_ROOT,
        movies : `${API_ROOT}/api/movies`,
        auth:`${API_ROOT}/api/auth`,
        user: `${API_ROOT}/api/users/me`,
        genres: `${API_ROOT}/api/genres`
    }
}

export default config