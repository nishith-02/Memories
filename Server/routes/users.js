import express from 'express'
import {signin,signup} from '../controllers/users.js'

const router=express.Router()

// console.log('reached')
router.post('/signin',signin)
router.post('/signup',signup)
export default router