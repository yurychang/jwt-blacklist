import bcrypt from 'bcrypt';

export async function encryptPassword(password: string) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}

// async function test() {
//   const password = 'password123';
//   const password2 = 'password12333';
//   const hashedPassword = await encryptPassword(password);
//   console.log('hashedPassword', hashedPassword.length, hashedPassword);

//   const match = await verifyPassword(password, hashedPassword);
//   console.log('should match', match);

//   const match2 = await verifyPassword(password2, hashedPassword);
//   console.log('should not match', match2);
// }
// test();
