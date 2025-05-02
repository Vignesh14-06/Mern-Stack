import express from 'express'
import { CreatePerson, DeletePersonById, GetallPersons, GetPersonById, UpdatePerson } from '../controlers/persons.controller.js'

const router = express.Router()


//get all
router.get('/GetAllUsers',GetallPersons)
//get by id
router.get('/GetUserById/:id',GetPersonById)

//post
router.post('/CreateUser',CreatePerson)
//put
router.put('/UpdateUser/:id',UpdatePerson)
//delete
router.delete('/DeleteUser/:id',DeletePersonById)

export default router