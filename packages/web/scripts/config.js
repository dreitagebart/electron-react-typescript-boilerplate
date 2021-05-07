const path = require('path')
const dotenv = require('dotenv')
const getenv = require('getenv')

dotenv.config()

module.exports = {
  env: {
    dev: getenv('MODE', 'prod') === 'dev',
    port: getenv.int('PORT', 3000)
  },
  path: {
    public: path.resolve(__dirname, '..', 'public'),
    entry: path.resolve(__dirname, '..', 'src', 'root'),
    output: path.resolve(__dirname, '..', 'dist')
  }
}

