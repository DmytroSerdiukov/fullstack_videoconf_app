import {Router} from 'express'
import VideoconferencesAPI from '../api/videoconferences'
import { Videoconference } from '../models/user'


const router = Router()
const URL = '/videoconferences'

router.get('/videoconferences',
    async(req, res) => {
        try {
            console.log(req.body.userId)
            const conferences = await VideoconferencesAPI.getConferences()
            res.status(200).json({
                message: 'conferences',
                conferences: conferences
            })
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    })

router.post(`${URL}/create`,
    async(req, res) => {
        try{
            const {id, conflabel} = req.body
            console.log(id, conflabel)
            await VideoconferencesAPI.createConference(id, conflabel)
            res.status(201).json({message: 'Конференція створена'})
        } catch(e) {
            res.status(400).json({message: e.message})
        }
    })

router.delete(`${URL}/delete`,
    async(req, res) => {
        try {

        } catch (e) {

        }
    })
export default router;