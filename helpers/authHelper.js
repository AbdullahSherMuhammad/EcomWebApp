import bcrypt from "bcrypt";

export const hashedpass = async (pass) => {
  try {
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(pass, saltRounds);
    return hashedPass;
  } catch (err) {
    console.log(err);
  }
};

export const comparePass = async (pass, hashedPass) => {
  return bcrypt.compare(pass, hashedPass);
};
