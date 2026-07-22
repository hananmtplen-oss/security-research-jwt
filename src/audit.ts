export async function logAudit(action, user) {
  await db.insert({ action, userId: user.id, ts: Date.now() });
}
