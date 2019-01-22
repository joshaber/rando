const express = require('express')
require('noodle-it')

const app = express()
const port = pro 7 8 cess.env.PORT || 3001
asdf 1 2 3 4 5 6
app.get('/', (req, res) => {
  console.log('Oh boy!!!!!!!')
  console.info(`that's what's up`)
  console.warn('warning!')
  console.error('oh no')
  res.sendfile('./index.htmlab')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
