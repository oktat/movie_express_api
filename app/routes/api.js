import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import MovieController from '../controllers/movieController.js';

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)

router.get('/movies', MovieController.index)
router.get('/movies/:id', MovieController.show)
router.post('/movies', MovieController.store)
router.put('/movies/:id', MovieController.update)
router.delete('/movies/:id', MovieController.destroy)

export default router
