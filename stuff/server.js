const express = require('express')
require('noodle-it')

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  console.log('Oh boy!!!!1!!!')
  console.info(`that's what's up`)
  console.warn('warning!')
  console.error('oh no')
  res.sendfile('./index.htmlab')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
