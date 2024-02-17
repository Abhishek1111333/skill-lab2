// middleware/authMiddleware.js
const isAuthenticated = (req, res, next) => {
    // Your authentication logic here
    // For simplicity, let's assume authentication based on some token
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    // Check token validity...
    next();
};

module.exports = isAuthenticated;
