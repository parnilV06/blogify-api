// src/routes/posts.routes.js

const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts.controller');

// GET /api/v1/posts
router.get('/posts', postController.getAllPosts);

// GET /api/v1/posts/:id
router.get('/posts/:id', postController.getPostById);

// Test route
router.post('/posts/test-body', (req, res) => {
  console.log('Received body:', req.body);
  res.status(200).json({ status: 'success', received: req.body });
});

module.exports = router;
