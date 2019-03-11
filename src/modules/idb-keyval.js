import { openDb } from 'idb'

const IDB_NAME = 'cinecon'

const createIdbKeyval = (objectStoreName) => {
    const dbPromise = openDb(IDB_NAME, 1, upgradeDB => {
        upgradeDB.createObjectStore(objectStoreName)
    })
    
    return {
        async get(key) {
            const db = await dbPromise
            return db.transaction(objectStoreName).objectStore(objectStoreName).get(key)
        },
        async set(key, val) {
            const db = await dbPromise
            const tx = db.transaction(objectStoreName, 'readwrite')
            tx.objectStore(objectStoreName).put(val, key)
            return tx.complete
        },
        async delete(key) {
            const db = await dbPromise
            const tx = db.transaction(objectStoreName, 'readwrite')
            tx.objectStore(objectStoreName).delete(key)
            return tx.complete
        },
        async clear() {
            const db = await dbPromise
            const tx = db.transaction(objectStoreName, 'readwrite')
            tx.objectStore(objectStoreName).clear()
            return tx.complete
        },
        async keys() {
            const db = await dbPromise
            return db.transaction(objectStoreName).objectStore(objectStoreName).getAllKeys(key)
        }
    }
}


export default createIdbKeyval