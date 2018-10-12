const mongoose = require('mongoose')

const Post = require('./database/models/Post')
mongoose.connect('mongodb://localhost/blogpostnodetest')

Post.find({}, (error, post) => {
  console.log(error, post)
})
/*Post.findByIdAndUpdate("5bb8c4ea4e263251b076fba1", {
  title: 'My fisrt blog to be changed'
}, (error, post) => {
  console.log(error, post)
})

Post.create({
  title: 'My second blog',
  description: 'Blog Post description',
  content: 'second time Nodejs testing.'
}, (error, post) => {
  console.log(error, post)
})*/
