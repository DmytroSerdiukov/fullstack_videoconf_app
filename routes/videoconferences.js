import {Router} from 'express'
import VideoconferencesAPI from '../api/videoconferences'
import { Videoconferences } from '../models/videoconferences'


const router = Router()
const URL = '/videoconferences'

route.get(`${URL}`,
    async(req, res) => {
        try {
            const id = req.body.id
            const conferences = await VideoconferencesAPI.getConferences(id)
            res.status(200).json({
                message: 'conferences',
                conferences: conferences
            })
        } catch (e) {
            res.status(400).json({message:'Щось не так'})
        }
    })

route.post(`${URL}/create`,
    async(req, res) => {
        try{

        } catch(e) {

        }
    })
export default router;

route.delete(`${URL}/delete`,
    async(req, res) => {
        try {

        } catch (e) {

        }
    })
export default router;