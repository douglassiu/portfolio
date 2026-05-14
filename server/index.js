import express from 'express'

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello from Portfolio API',
    status: 'ok'
  })
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
