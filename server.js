const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hi!!')
})

app.get('/page', (req, res) => {
    res.send('Hello from the second page')
})

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Process terminated')
    })
})