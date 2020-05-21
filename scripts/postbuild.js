const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')

if (process.env.NETLIFY) {
  spawnSync(
    'mv',
    [path.join(__dirname, '..', 'audio'), path.join(__dirname, '..', 'dist/')]
  )
}