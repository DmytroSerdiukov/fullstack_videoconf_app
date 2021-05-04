import {Router} from 'express'
import UserAPI from '../api/user'
import User from '../models/user'



const router = Router()

router.post('/register', async(req, res) => {
  try {
    const response = await UserAPI.registerUser(req.body)
    if (response == 1)
      return res.status(201).json({message: 'Облікований запис користувача створений'})
    return res.status(400).json({message: 'Такой пользователь уже существует'})
  } catch (e) {
    throw e
  } 
})

router.post('/auth', async(req, res) => {
  try {
    return res.status(201).json({
      message: 'AUTH_COMPLETED',
      status: 1
    })
  } catch(e) {
    throw e
  }
})
 

router.get('/profile', (req, res) => {
  res.send('profile')
})



export default router;