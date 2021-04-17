import {Router} from 'express'

const router = Router()

router.post('/register', (req, res) => {
  res.send('register')
})

router.post('/auth', (req, res) => {
  res.send('auth')
})

router.get('/profile', (req, res) => {
  res.send('profile')
})



export default router;