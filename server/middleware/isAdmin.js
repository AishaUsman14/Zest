// middleware/isAdmin.js

const isAdmin = (req, res, next) => {
    if (!req.user || !req.user.role || req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Access denied: Admins only' });
    }
    next();
};

export default isAdmin;
