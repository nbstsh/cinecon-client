const functions = require('firebase-functions');
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })
const fs = require('fs')
const os = require('os')
const Busboy = require('busboy')
const path = require('path')
const uuidv4 = require('uuid-v4')
const { Storage } = require('@google-cloud/storage')



const serviceAccount = require('./cinecon-serviceacount-key.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })

const storage = new Storage({
    projectId: 'cinecon-be402',
    keyFilename: 'cinecon-serviceacount-key.json'
})
const bucket = storage.bucket('cinecon-be402.appspot.com')

  

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sample = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        return res.send('text')
    })
})

exports.storeImage = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        res.send('test')

        const uuid = uuidv4()
        const busboy = new Busboy({ headers: req.headers })
        let upload 

        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            console.log(`File [${fieldname}] filename: ${filename}, encoding: ${encoding}, mimetype: ${mimetype}`)
            const filepath = path.join(os.tmpdir(), filename)
            upload = { file: filepath, type: mimetype, filename }
            file.pipe(fs.createWriteStream(filepath))
        })

        busboy.on('finish', () => {
            console.log('finish')
            bucket.upload(upload.file, {
                uploadType: 'media',
                metadata: {
                    contentType: upload.type,
                    firebaseStorageDownloadTokens: uuid 
                }
            }, (err, file) => {
                if (err) return res.status(500).json({ error: err })

                const options = { action: 'read'}
                bucket.file(file.name).getSignedUrl(options)
                    .then(([downloadUrl]) => res.send({ url: downloadUrl }))
                    .catch(err => res.status(500).json({ error: err })) 
            })
        })

        req.pipe(busboy)
        console.log('test')
    })
})
