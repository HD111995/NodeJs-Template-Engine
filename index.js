const express = require('express')
const app = express()
const gallery = require('./data/gallery.json')
const news = require('./data/new.json')
var cors = require('cors')
app.use(cors())
app.use(express.static('public'))
app.set('view engine', 'ejs')


console.log('is there')

app.get('/',(req,res)=>{
    res.render('pages/index.ejs')

})
app.get('/about',(req,res)=>{
    res.render('pages/about.ejs')
})
app.get('/contact',(req,res)=>{
    res.render('pages/contact.ejs')
})
app.get('/team',(req,res)=>{
    res.render('pages/team.ejs')
})
app.get('/gallery',(req,res)=>{
    res.render('pages/gallery.ejs',{myGallery : gallery})
})
app.get('/news',(req,res)=>{
    res.render('pages/news.ejs',{newsJson : news})
})
app.listen(3000,()=>{
    console.log('i am the server and i listening')
})