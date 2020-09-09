import {Router} from 'express'
import {renderSignup, loginUser, renderSignin, registerUser} from '../app/controllers/users.controller';

const router = Router()

router.get("/signup", renderSignup);
router.post("/signup", registerUser);

router.get("/signin", renderSignin);
router.post("/signin", loginUser);

export default router;
