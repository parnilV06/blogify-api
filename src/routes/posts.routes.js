// src/routes/posts.routes.js

const express = require('express');
const router = express.Router();

// 1. Import the controller
const postController = require('../controllers/posts.controller.js');

// 2. Use the controller function as the route handler
// The router's job is now just to connect the path '/' to the 'getAllPosts' function.
router.get('/', postController.getAllPosts);

// We can remove the old inline function entirely!
// router.get('/', (req, res) => { ... }); // This is now gone
// Add this new route for testing
router.post('/test-body', (req, res) => {
  console.log('Received body:', req.body);
  res.status(200).json({ status: 'success', received: req.body });
});

module.exports = router;