import { validatorInput } from "../components/FieldInput";

// validator input email
export const isValidEmail: validatorInput = (str) => {
  const error = !String(str).match(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  return {
    error,
    message: error ? "enter a correct email !" : "",
  };
};

// validator input name
export const isValidName: validatorInput = (str) => {
  const error = String(str).length < 3;
  return {
    error,
    message: error ? "enter minimal 4 character !" : "",
  };
};

// validator input username
export const isValidUsername: validatorInput = (_str) => {
  const str = String(_str);
  const error = str.length < 5;
  return {
    error,
    message: error ? "enter minimal 6 character !" : "",
    value: str.replace(/\ /gi, ""),
  };
};

// validator input password
export const isValidPassword: validatorInput = (_str) => {
  const str = String(_str);
  const error = str.length < 6;
  const empty = str.length < 1 || str.trim() == "";
  return {
    error,
    message: empty
      ? "enter a password !"
      : error
      ? "password minimal 6 character !"
      : "",
  };
};
