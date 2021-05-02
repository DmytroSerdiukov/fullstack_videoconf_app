import {Router} from 'express'

const router = Router()

router.post('/register', async(req, res) => {
  try {
     return res.status(201).json({
      message: 'USER_CREATED',
      status: 1
    })
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