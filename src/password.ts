import zxcvbn from 'zxcvbn';
export function strength(pw) { return zxcvbn(pw).score; }
