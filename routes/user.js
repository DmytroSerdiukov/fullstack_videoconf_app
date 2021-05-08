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
    const response = await UserAPI.authUser(req.body)
    if(response.status === 1)
      return res.status(201).json(response)
    return res.status(400).json(response)
  } catch(e) {
    throw e
  }
})
 

router.get('/profile', (req, res) => {
  res.send('profile')
})

router.get('/users', async(req, res) => {
  try {
    const users = await UserAPI.getUsers()
    return res.status(200).json({
      users: users
    })
  } catch (e) {
    throw e
  }
})




export default router;