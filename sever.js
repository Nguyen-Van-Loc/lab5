// buoc 1: cài đặt NodeJS
// bước 2: chạy example

const express = require('express')
const app = express()
const port = 3000
const PhotoModel = require('./model');


const mongoose = require('mongoose');

const uri = 'mongodb+srv://locnvph20710:loccantat@hackerlo.qv3nwz6.mongodb.net/?retryWrites=true&w=majority';

const nvModel = require('./model');

app.get('/', async (req, res) => {

    const data = {
      id: "1",
      albumId: "2",
      title: "Chu be dan",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796"
    }
  
    const photo = new PhotoModel(data);
    photo.save();
    res.send(photo);
  })
  
  var hbs = require('express-handlebars');
  
  // Use `.hbs` for extensions and find partials in `views/partials`.
  app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
  app.set('view engine', '.hbs');
  app.set('views', './views');
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })