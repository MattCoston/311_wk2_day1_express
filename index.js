
const express = require('express')
const bodyParser = require('body-')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */
app.get('/users', function (req, res) {
  res.send(users)
})

app.get('/users/1', function (req, res) {
  res.send(users[0])
})

app.post('/users', function (req, res) {
  //create new user object to array of users and then return new user
  let user = {
    "_id": 5,
    "name": "Samson",
    "occupation": "goofus",
        "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"

  }
  users.push(user)
  res.send(user)
})

app.put('/users/1', function (req, res) {
  let user = users[0]
  user.name = "Dan"
  
  res.send(users[0])
})




/* END - create routes here */

app.listen(port, () => 
  console.log(`Examn port ${port}!`))