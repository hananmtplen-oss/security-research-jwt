import path from 'path';
const safe = path.normalize(req.query.file).replace(/^(\.\.(\/)?)+/, '');
res.sendFile(path.join(UPLOAD_DIR, safe));
