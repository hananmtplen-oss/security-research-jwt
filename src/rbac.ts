export function requireRole(role) {
  return (req, res, next) => { if (req.user.role !== role) return 403; next(); };
}
