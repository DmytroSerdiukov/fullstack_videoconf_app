import {Router} from 'express'

const router = Router()

router.post('/register', (req, res) => {
  res.send('register')
})

router.post('/auth', async(req, res) => {
  try {
    return res.status(201).json({
      message: 'data received',
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