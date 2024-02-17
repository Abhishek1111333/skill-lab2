// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const { getAllBlogs, createBlog, getBlogByAuthorId } = require('../controllers/blogController');
const isAuthenticated = require('../middleware/authMiddleware');
const validate = require('../middleware/validationMiddleware');

router.use(isAuthenticated);

router.get('/', getAllBlogs);
router.post('/', createBlog);
router.get('/:authorId', validate, getBlogByAuthorId);

module.exports = router;
