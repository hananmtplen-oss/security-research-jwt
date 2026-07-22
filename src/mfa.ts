import { authenticator } from 'otplib';
export function enableMFA(user) { return authenticator.generateSecret(); }
