
// string ... lowercase
const filter = {
    title: '',
    director: '', 
    releaseYear: { min: '', max: '' },
    genres: '', // genre -> objectId
    runningTime: { min: '' , max: '' },
    starring: '', 
    country: ''
}

const validKeys = Object.keys(filter)

const filterFuncMap = {
    title: isIncluded,
    director: isIncluded,
    releaseYear: isBetweenMinMax,
    genres: isEmptyOrIncludes,
    runningTime: isBetweenMinMax,
    starring: isIncluded, 
    country: isIncluded
}


const getFilter = () => filter 

const setFilter = (update) => {
    Object.keys(update).forEach(key => {
        if (!validKeys.includes(key)) return 

        // not to replace filter by given object, extract value and set it inside object
        if (['releaseYear', 'runningTime'].includes(key)) {
            Object.assign(filter[key], update[key])
            return 
        }

        if (['title', 'director', 'starring', 'country'].includes(key)){
            update[key].toLowerCase()
        }

        filter[key] = update[key]
    })
}

const needInFilteredMovies = (movie) => {
    for (let key in movie) {
        if (!validKeys.includes(key)) continue

        const isValid = filterFuncMap[key](key, movie[key])
        if (!isValid)  return false
    }
    return true
}


/* function to filter value *******************************/
function isIncluded(key, val) {
    return val.toLowerCase().includes(filter[key])
}

function isSameOrEmpty(key, val) {
    return filter[key] === '' || val === filter[key]
}

function isEmptyOrIncludes(key, val) {
    console.log({val})
    return filter[key] === '' || val.find(genre => genre._id === filter[key])
}

function isBetweenMinMax(key, val) {
    const { min, max } = filter[key]
    if (!min && !max) return true
    if (!min) return val <= max
    if (!max) return val >= min
    return val <= max && val >= min
}


export { getFilter, setFilter, needInFilteredMovies }

