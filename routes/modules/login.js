const express = require('express')
const router = express.Router()

// 引入Login
const Login = require('../../models/login')

// check email password

function check(res, email, password) {
  Login.find()
    .lean()
    .then(login => {
      let checkItem = login.find(item => email === item.email && password === item.password)
      console.log(checkItem)
      if (checkItem !== undefined) {
        const firstName = checkItem.firstName
        return res.render('welcome', { firstName })
      }
      res.send('帳密錯誤')
    })
    .catch(error => console.error(error))
}

router.post('/', (req, res) => {
  const email = req.body.email.trim()
  const password = req.body.password.trim()
  if (!email || !password) return
  check(res, email, password)
})

module.exports = router