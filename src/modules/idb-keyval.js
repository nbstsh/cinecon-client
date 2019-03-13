import { openDb } from 'idb'
import config from '../config/index'
const { dbName, objectStoreNames } = config.idb


const dbPromise = openDb(dbName, 2, upgradeDB => {
    Object.values(objectStoreNames).forEach(objectStoreName => {
        if (!upgradeDB.objectStoreNames.contains(objectStoreName)) {
            upgradeDB.createObjectStore(objectStoreName, { keyPath: '_id'})
        }
    })
})


const createIdbKeyval = (objectStoreName) => {
    return {
        async get(key) {
            const db = await dbPromise
            return db.transaction(objectStoreName).objectStore(objectStoreName).get(key)
        },
        async getAll() {
            const db = await dbPromise
            return db.transaction(objectStoreName).objectStore(objectStoreName).getAll()
        },
        async set(val) {
            const db = await dbPromise
            const tx = db.transaction(objectStoreName, 'readwrite')
            tx.objectStore(objectStoreName).put(val)
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
            return db.transaction(objectStoreName).objectStore(objectStoreName).getAllKeys()
        }
    }
}


export default createIdbKeyval