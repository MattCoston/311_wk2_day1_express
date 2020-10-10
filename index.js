
const express = require('express')
const bodyParser = require('body-')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */
app.get('/users/:userId', function (req, res) {
  let userId = parseInt(req.params.userId)
  let user = users.find(user => user._id === userId)
  res.send(user)
})

app.post('/users', function (req, res) {
  //create new user object to array of users and then return new user
  let user = req.body
  user._id = users.length + 1
  users.push(user)
  res.send(users)
})

app.put('/users/1', function (req, res) {
  let user = users[0]
  user.name = "Dan"
  
  res.send(users[0])
})

app.delete('/users/:userid', (req, res)=> {
  res.send(users.splice(1,1))
})




/* END - create routes here */

app.listen(port, () => 
  console.log(`Examn port ${port}!`))