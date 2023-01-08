// app.js
// these codes are same as last unit
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars') //把樣板引擎交給 Handlebars

// setting template engine (宣告預設請用名為 main.handlebars 這支檔案當作佈局。)
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))


// setting the route and corresponding response

app.get('/', (req, res) => {
  // create a variable to store movieOne
  const page_content =
    { title: '首頁' }
  // , { title: 'About' }, { title: 'Portfolio' }, { title: 'Contact' }


  // past the movie data into 'index' partial template
  res.render('index', { content: page_content });
})


app.get('/about', (req, res) => {
  const page_content = { title: 'About' }
  res.render('about', { content: page_content })
})

app.get('/portfolio', (req, res) => {
  const page_content = { title: 'Portfolio' }
  res.render('portfolio', { content: page_content })
})

app.get('/contact', (req, res) => {
  // const page_content = { title: 'Contact!' }
  // res.render('contact', { content: page_content })
  // 用另一種方式呈現：把內容直接寫在 Handlebars 裡，而不是渲染
  res.render('contact')
})

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})

