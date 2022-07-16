const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './'),
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  lib: path.resolve(__dirname, '../lib'),

  // examples files
  examples: path.resolve(__dirname, '../examples'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),

  // demo
  demo: path.resolve(__dirname, '../demo')
}
