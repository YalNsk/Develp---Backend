const userRouter = require('./user-router')
const postsRouter = require('./posts-router')

// Routeur parent
const router = require('express').Router();


// Routeurs enfants
router.use('/user', userRouter)
router.use('/posts', postsRouter)

module.exports = router;