import {Router} from 'express'
import checkAuth from '../helpers/auth'
import { renderAccount, logoutUser } from '../app/controllers/account.controller'

const router = Router()

router.get('/main', checkAuth, renderAccount)
router.get('/logout', logoutUser)

export default router