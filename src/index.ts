import { Hono } from 'hono'
import { add } from './utils'

const app = new Hono()

app.get('/add', (c) => {
  const result = add(5, 10)
  return c.text(`Hello Hono! Result: ${result}`)
})

export default app
