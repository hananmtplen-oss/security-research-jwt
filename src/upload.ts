const allowed = ['image/png', 'image/jpeg'];
if (!allowed.includes(mime)) return 400;
