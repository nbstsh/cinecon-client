
const config = {
    idb: {
        dbName: 'cinecon',
        objectStoreNames: {
            movies: 'movies',
            genres: 'genres'
        }
    },
    firebase: {
        storageUrl: 'https://us-central1-cinecon-be402.cloudfunctions.net/storeImage'
    }
}

export default config