
// string ... lowercase
const filter = {
    title: '',
    director: '', 
    releaseYear: { min: '', max: '' },
    genre: '', // genre -> objectId
    runningTime: { min: '' , max: '' },
    starring: '', 
    country: ''
}

const validKeys = Object.keys(filter)


const getFilter = () => filter 

const setFilter = (f) => {
    Object.keys(f).forEach(key => {
        if (!validKeys.includes(k)) return 
        filter[key] = f[key]
    })
}


export { getFilter, setFilter }
