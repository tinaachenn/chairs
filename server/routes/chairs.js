import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'
// import chairData from '../data/chairs.js'
import ChairsController from '../controllers/chairs.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// router.get('/', (req, res) => {
//   res.status(200).json(chairData)
// })

router.get('/', ChairsController.getChairs)

router.get('/:chairId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/chair.html'))
})

export default router
  