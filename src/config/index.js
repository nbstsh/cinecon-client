import developmentConfig from './development'
import productionConfig from './production'
import defaultConfig from './default'

const env = process.env.NODE_ENV

if (!env) throw new Error('NODE_ENV should not be empty.')

const config = {
    'development': developmentConfig,
    'production': productionConfig
}

Object.assign(defaultConfig, config[env])


export default defaultConfig


