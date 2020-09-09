import {Router} from 'express'
import renderIndex from '../app/controllers/index.controller'

const router = Router()

router.get('/', renderIndex)

export default router