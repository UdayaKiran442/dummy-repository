import { Hono } from 'hono'
import { add } from './utls/utils'
import { sub } from '../sub/sub'

const app = new Hono()

app.get('/add', (c) => {
  const result = add(5, 10)
  return c.json({ result })
})

app.get('/sub', async (c) => {
  const result = sub(10, 5)
  return c.json({ result })
})

export default app
