const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000;

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
    const { name } = req.params

    if(name == 'dog'){
        res.json({'sound' : '멍멍'})   
    } else if (name == 'cat'){
        res.json({'sound' : '야옹'})
    } else if (name == 'pig'){
        res.json({'sound' : '꿀꿀'})
    } else {
        res.json({'sound' : '알수없음'})
    }
})

app.get('/cat', function (req, res) {
    res.json({'sound' : '야옹'})
})

// 파라미터를 받을 때는 : 을 이용
app.get('/user/:id', (req, res) => {
    // POST 방식 
    const p = req.params
    console.log(p)
    const b = req.body
    console.log(b)

    res.send({'message' : 'Hello, World !'})

    // 주소창으로 보내는 GET방식
    // const q = req.query
    // console.log(q.q)
    // console.log(q.name)

    res.json({'userid' : q.name})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})