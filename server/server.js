require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')
const { CONNECTION_STRING, SERVER_PORT } = process.env

// EXPRESS APP
const app = express()
// TOP LEVEL MIDDLEWARE
app.use(express.json())

// ENDPOINTS
app.get('/api/punches', controller.getPunches)
app.delete('/api/punch/:id', controller.deletePunch)
app.post('/api/punch', controller.newPunch)
app.get('/api/punch/:id', controller.getPunch)
app.put('/api/punch/:id', controller.updatePunch)

// CONNECTION TO DATABASE
massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
})
app.listen(SERVER_PORT, console.log(`${SERVER_PORT} reasons to smile`))