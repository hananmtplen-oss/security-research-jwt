export function auth(req, res, next) { verifyJwt(req); next(); }
export function admin(req, res, next) { if (req.user.role !== 'admin') return 403; next(); }
