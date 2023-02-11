import * as bcrypt from 'bcrypt';
export function encodePassword(raw: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(raw, SALT);
}

export function comparePasswords(raw: string, hash: string) {
  return bcrypt.compareSync(raw, hash);
}
