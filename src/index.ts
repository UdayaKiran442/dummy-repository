import { Hono } from 'hono'
import { add } from './utls/utils'

const app = new Hono()

app.get('/add', (c) => {
  const result = add(5, 10)
  return c.json({ result })
})

export default app
