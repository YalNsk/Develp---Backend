const userRouter = require('./user-router')
const postsRouter = require('./posts-router');
const authRouter = require('./auth-router');

// Routeur parent
const router = require('express').Router();


// Routeurs enfants
router.use('/user', userRouter)
router.use('/posts', postsRouter)
router.use('/auth', authRouter)

module.exports = router;