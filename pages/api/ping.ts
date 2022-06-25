// Used by app runner to perform health checks. Do not remove

import { NextApiRequest, NextApiResponse } from 'next'

export default function hello(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ping: 'pong' })
}
