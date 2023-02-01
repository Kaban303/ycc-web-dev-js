const express = require('express')
const app = express()
const port = 3001

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/index.html')
})

app.listen(port, () => {
  console.log(`Сервер запущен по адресу http://localhost:${port}`)
})