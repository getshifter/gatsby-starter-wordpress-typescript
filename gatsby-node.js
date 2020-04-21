'use strict'
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})
const nodes = require('./gatsby-node/index')

if (nodes) {
    Object.entries(nodes).forEach(([key, node]) => {
        exports[key] = node
    })
}