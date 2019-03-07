const API_ROOT = 'http://localhost:3001'


const config = {
    api: {
        root: API_ROOT,
        movies : `${API_ROOT}/api/movies`,
        auth:`${API_ROOT}/api/auth`,
        user: `${API_ROOT}/api/users/me`
    }
}

export default config