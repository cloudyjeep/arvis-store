import { UserKey } from "../store/Reducers/User"

export const checkUserMatch = (user: any, usernameOrEmail: any, password: any) => {
  return (
    (user[UserKey.username] === usernameOrEmail || user[UserKey.email] === usernameOrEmail) &&
    user[UserKey.password] === password
  );
};
