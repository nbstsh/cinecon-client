import developmentConfig from './development'
import productionConfig from './production'

const env = process.env.NODE_ENV

if (!env) throw new Error('NODE_ENV should not be empty.')

const config = {
    'development': developmentConfig,
    'production': productionConfig
}

export default config[env]


