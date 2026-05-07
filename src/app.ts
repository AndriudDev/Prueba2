import express from 'express'

const app = express()

app.get('/', (_req, res) => {
  res.json({ message: 'Hello, world! hola' })
})

export default app
